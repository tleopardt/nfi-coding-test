/**
 * Wagmi Plugin for Viewing Web3Wallet
 * see documentation on `https://wagmi.sh/docs/getting-started`
 */
import { createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains(
    [chain.mainnet, chain.polygon],
    [publicProvider()]
);

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider
});

export default client;
