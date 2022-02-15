import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@3rdweb/react";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [1, 3, 4, 42, 80001];
  // Ethereun Mainnet - 1 (ETH)
  // Ropsten Test Network - 3 (ETH)
  // Rinkeby Test Network - 4 (ETH)
  // Kovan Test Network -  42 (ETH)
  // Polygon Mumbai Test Network - 80001 (MATIC)

  const connectors = {
    injected: {},
    // magic: {
    //   apiKey: 'pk_...', // Your magic api key
    //   chainId: 1, // The chain ID you want to allow on magic
    // },
    // walletconnect: {},
    // walletlink: {
    //   appName: 'web3-auth',
    //   url: 'http://localhost:3000',
    //   darkMode: false,
    // },
  };

  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
