import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  embeddedWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      secretKey={process.env.NEXT_PUBLIC_SECRET_KEY}
      supportedWallets={[embeddedWallet(), walletConnect(), metamaskWallet()]}
      activeChain={{
        chainId: 5040,
        rpc: ["https://subnets.avax.network/onigiri/mainnet/rpc"],
        nativeCurrency: {
          decimals: 18,
          name: "ONIGIRI MAINNET",
          symbol: "ONGR",
        },
        icon: {
          url: "/icon.png",
          width: 100,
          height: 100,
          format: "png",
        },
        shortName: "onigiri",
        slug: "onigiri",
        testnet: false,
        chain: "ONIGIRI",
        name: "ONIGIRI Mainnet",
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;
