<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import hljs from "highlight.js/lib/core";
  import javascript from "highlight.js/lib/languages/javascript";
  import "highlight.js/styles/github-dark.css";

  // Register JavaScript language for highlight.js
  hljs.registerLanguage("javascript", javascript);

  // SDK snippets
  const sdkSnippets = {
    bybit: `
import { GetP2POnlineAdsParamsV5, RestClientV5 } from "bybit-api";

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

const response = await client.getP2POnlineAds(params);
`,
    binance: `
import { Spot } from "@binance/connector";

const client = new Spot(API_KEY, API_SECRET);

const response = await client.account().then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
`,
    kraken: `
import KrakenClient from "kraken-api";

const client = new KrakenClient(API_KEY, API_SECRET);

const response = await client.getTicker({
  pair: "XXBTZUSD"
});
`,
    coinbase: `
import { CoinbasePro } from "coinbase-pro-node";

const client = new CoinbasePro({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  passphrase: API_PASSPHRASE,
  useSandbox: false,
});

const response = await client.rest.account.listAccounts();
`,
  };

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
    setTimeout(() => hljs.highlightAll(), 0); // Ensure DOM update before highlighting
  };
</script>

<template>
  <div
    class="min-h-screen w-full flex flex-col items-center pt-[8vh] gap-16 text-white"
  >
    <!-- Info Tag -->
    <InfoTag />

    <!-- Hero Section -->
    <div class="text-center px-4">
      <h1 class="text-5xl md:text-6xl font-400 tracking-tight animate-fade-in">
        Trade with Quant.io
      </h1>
      <p
        class="text-lg md:text-xl max-w-2xl mx-auto mt-4 text-gray-300 leading-relaxed"
      >
        Seamlessly integrate our trading SDKs for lightning-fast market access.
      </p>
    </div>

    <!-- Quick Start Code Snippet with Tabs -->
    <div class="w-full max-w-3xl px-4 mt-12 animate-slide-up">
      <h2 class="text-2xl font-600 text-center mb-6">Quick Start</h2>
      <div class="bg-[#111] rounded-xl border border-white/10 shadow-lg">
        <!-- Tabs -->
        <div class="flex border-b border-white/10">
          <button
            v-for="sdk in ['bybit', 'binance', 'kraken', 'coinbase']"
            :key="sdk"
            :class="[
              'flex-1 py-3 text-sm font-medium text-center transition-colors cursor-pointer',
              activeSdk === sdk
                ? 'bg-white/5 text-white border-b-2 border-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            {{ sdk.charAt(0).toUpperCase() + sdk.slice(1) }}
          </button>
        </div>
        <!-- Code Snippet -->
        <div class="relative p-6">
          <pre
            class="text-sm text-gray-300 font-mono overflow-x-auto"
          ><code class="language-javascript">{{ sdkSnippets[activeSdk] }}</code></pre>
          <button
            @click="copyCode"
            class="absolute top-4 right-4 bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-200 transition duration-200"
          >
            {{ copyStatus }}
          </button>
        </div>
      </div>
    </div>

    <!-- SDK Options -->
    <div class="flex flex-col items-center">
      <h3 class="title-medium font-500">OUR SDK</h3>

      <div class="w-full justify-center mt-12 px-4 grid grid-flow-col gap-5">
        <SdkTile />
        <SdkTile />
        <SdkTile />
        <SdkTile />
      </div>
    </div>

    <!-- Features Section -->
    <div
      class="w-full max-w-6xl mt-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <div
        class="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
      >
        <h3 class="text-xl font-medium mb-3">Lightning Fast</h3>
        <p class="text-sm text-gray-400 leading-relaxed">
          Connect to markets in minutes with our intuitive trading SDKs.
        </p>
      </div>
      <div
        class="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
      >
        <h3 class="text-xl font-medium mb-3">Fully Customizable</h3>
        <p class="text-sm text-gray-400 leading-relaxed">
          Tailor trading strategies to align with your platform and goals.
        </p>
      </div>
      <div
        class="bg-[#111] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
      >
        <h3 class="text-xl font-medium mb-3">Secure by Design</h3>
        <p class="text-sm text-gray-400 leading-relaxed">
          Robust security to protect your trades and data from day one.
        </p>
      </div>
    </div>

    <!-- Call To Action -->
    <div class="my-24 text-center px-4">
      <h2 class="text-3xl md:text-4xl font-light">Ready to Trade?</h2>
      <p class="text-gray-300 mt-3 text-lg">
        Explore our docs or dive into the code on GitHub.
      </p>
      <div class="mt-8 flex justify-center gap-6">
        <a
          href="https://docs.quant.io"
          target="_blank"
          class="bg-white text-black font-medium px-6 py-2.5 rounded-full hover:bg-gray-200 transition duration-200"
        >
          Documentation
        </a>
        <a
          href="https://github.com/quantio"
          target="_blank"
          class="bg-transparent border border-white/30 text-white font-medium px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Animations */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out;
  }

  /* Custom styles */
  pre {
    background: #1a1a1a;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  code {
    font-family: "Fira Code", monospace;
  }
</style>
