<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import hljs from "highlight.js/lib/core";
  import javascript from "highlight.js/lib/languages/javascript";
  import "highlight.js/styles/github-dark.css";

  // Register JavaScript language for highlight.js
  hljs.registerLanguage("javascript", javascript);

  // SDK snippets
  const sdkSnippets = {
    bybit: `import { GetP2POnlineAdsParamsV5, RestClientV5 } from "bybit-api";

const client = new RestClientV5({
  key: API_KEY,
  secret: API_SECRET,
  testnet: false,
});

const params: GetP2POnlineAdsParamsV5 = {
  currencyId: "EUR",
  tokenId: "USDT",
  size: "500",
  side: "1", // 1 = Buy, 0 = Sell
};

const response = await client.getP2POnlineAds(params);`,
    binance: `import { Spot } from "@binance/connector";

const client = new Spot(API_KEY, API_SECRET);

const response = await client.account().then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});`,
    kraken: `import KrakenClient from "kraken-api";

const client = new KrakenClient(API_KEY, API_SECRET);

const response = await client.getTicker({
  pair: "XXBTZUSD"
});`,
    coinbase: `import { CoinbasePro } from "coinbase-pro-node";

const client = new CoinbasePro({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  passphrase: API_PASSPHRASE,
  useSandbox: false,
});

const response = await client.rest.account.listAccounts();`,
  };

  // SDK data with icons and descriptions
  const sdkData = [
    {
      name: "Bybit",
      icon: "₿",
      description: "High-performance derivatives trading",
      key: "bybit",
    },
    {
      name: "Binance",
      icon: "◆",
      description: "World's largest crypto exchange",
      key: "binance",
    },
    {
      name: "Kraken",
      icon: "🐙",
      description: "Secure and reliable trading",
      key: "kraken",
    },
    {
      name: "Coinbase",
      icon: "○",
      description: "Professional trading platform",
      key: "coinbase",
    },
  ];

  // State for active SDK and copy functionality
  const activeSdk = ref<keyof typeof sdkSnippets>("bybit");
  const copyStatus = ref("Copy");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(sdkSnippets[activeSdk.value]);
      copyStatus.value = "Copied!";
      setTimeout(() => (copyStatus.value = "Copy"), 2000);
    } catch (err) {
      copyStatus.value = "Failed";
    }
  };

  // Highlight code on mount and when switching tabs
  onMounted(() => {
    hljs.highlightAll();
  });

  // Update highlighting when switching SDK
  const switchSdk = (sdk: keyof typeof sdkSnippets) => {
    activeSdk.value = sdk;
    setTimeout(() => hljs.highlightAll(), 0);
  };
</script>

<template>
  <div class="min-h-screen text-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section class="pt-5 text-center">
        <div class="max-w-4xl mx-auto">
          <h1
            class="text-5xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Unified Crypto APIs
            <br />
            <span class="text-orange-500">for Developers</span>
          </h1>
          <p
            class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Streamlined SDKs for major cryptocurrency exchanges. Simple, fast,
            and reliable.
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Documentation
            </button>

            <button
              class="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Github
            </button>
          </div>
        </div>
      </section>

      <!-- Code Example Section -->
      <section class="pb-16">
        <div class="max-w-4xl mx-auto">
          <!-- <div class="text-center mb-12">
            <h2 class="text-3xl font-light mb-4">Quick Start</h2>
            <p class="text-gray-400">
              Get up and running in minutes with our intuitive SDK
            </p>
          </div> -->

          <div
            class="bg-[#111] border border-white/10 rounded-xl overflow-hidden"
          >
            <!-- Tabs -->
            <div class="flex border-b border-white/10 overflow-x-auto">
              <button
                v-for="sdk in Object.keys(sdkSnippets)"
                :key="sdk"
                @click="switchSdk(sdk as keyof typeof sdkSnippets)"
                :class="[
                  'flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors border-b-2',
                  activeSdk === sdk
                    ? 'text-orange-500 border-orange-500 bg-white/5'
                    : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5',
                ]"
              >
                {{ sdk.charAt(0).toUpperCase() + sdk.slice(1) }}
              </button>
            </div>

            <!-- Code Content -->
            <div class="relative">
              <pre
                class="p-6 overflow-x-auto text-sm"
              ><code class="language-javascript">{{ sdkSnippets[activeSdk] }}</code></pre>
              <button
                @click="copyCode"
                :class="[
                  'absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                  copyStatus === 'Copied!'
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20',
                ]"
              >
                {{ copyStatus }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- SDK Grid -->
      <section class="py-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-light mb-4">Supported Exchanges</h3>
          <p class="text-gray-400">
            Connect to all major cryptocurrency exchanges with a single, unified
            API
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="sdk in sdkData"
            :key="sdk.key"
            @click="switchSdk(sdk.key as keyof typeof sdkSnippets)"
            class="group bg-[#111] border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-orange-500/50 hover:bg-white/5"
          >
            <div class="flex items-center justify-between mb-3">
              <div class="text-2xl">{{ sdk.icon }}</div>
              <svg
                class="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
            <h4 class="font-medium text-white mb-2">{{ sdk.name }}</h4>
            <p class="text-sm text-gray-400 leading-relaxed">
              {{ sdk.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium mb-3">Lightning Fast</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Optimized for performance with minimal latency and maximum
              throughput
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium mb-3">Fully Customizable</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Configure every aspect to match your trading strategy and
              requirements
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium mb-3">Secure by Design</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade security with API key encryption and rate
              limiting
            </p>
          </div>
        </div>
      </section>

      <!-- Available For Section -->
      <!-- <section class="py-16 text-center">
        <h3 class="text-xl font-light mb-8 text-gray-400">Available For:</h3>
        <div class="flex justify-center items-center space-x-8 flex-wrap gap-4">
          <div
            class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black"
          >
            JS
          </div>
          <div
            class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white"
          >
            TS
          </div>
          <div
            class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center font-bold text-white"
          >
            N
          </div>
          <div
            class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center font-bold text-white"
          >
            🔥
          </div>
          <div
            class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center font-bold text-white"
          >
            ⚡
          </div>
          <div
            class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center font-bold text-white"
          >
            💧
          </div>
          <div
            class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center font-bold text-white"
          >
            ⚫
          </div>
        </div>
      </section> -->

      <!-- CTA Section -->
      <section class="py-20 text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-light mb-4">Ready to Trade?</h2>
          <p class="text-gray-400 text-lg mb-8">
            Join thousands of developers building the future of finance
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/quantio"
              target="_blank"
              class="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/10 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div
              class="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center"
            >
              <span class="text-white font-bold text-xs">Q</span>
            </div>
            <span class="font-semibold">Quant.io</span>
          </div>
          <p class="text-gray-400 text-sm">
            Built with ❤️ by the community. Open source and free forever.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  /* Custom scrollbar for code blocks */
  pre::-webkit-scrollbar {
    height: 8px;
  }

  pre::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  pre::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background: #444;
  }

  /* Custom highlight.js theme adjustments */
  :deep(.hljs) {
    background: transparent !important;
    color: #e5e7eb;
  }

  :deep(.hljs-keyword) {
    color: #f97316;
  }

  :deep(.hljs-string) {
    color: #10b981;
  }

  :deep(.hljs-comment) {
    color: #6b7280;
  }
</style>
