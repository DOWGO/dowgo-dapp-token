import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import App from "./App";

function AppWagmiWrapper() {
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.goerli, chain.localhost],
    [
      infuraProvider({ apiKey: process.env.REACT_APP_INFURA_PUBLIC_KEY }),
      jsonRpcProvider({
        rpc: () => {
          return {
            http: chain.localhost.rpcUrls.default,
          };
        },
      }),
    ]
  );

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
    connectors: [new MetaMaskConnector({ chains })],
  });

  return (
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  );
}

export default AppWagmiWrapper;
