/**
 * Helpers for Wagmi Plugin, Wrap wagmi props in 1 function
 * documentation on `https://wagmi.sh/docs/getting-started`
 *
 * returns @Object
 */

import { useAccount, useConnect, useEnsName, useNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

function useWeb3Connect() {
    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    const { data: ensName } = useEnsName({ address });
    const { connect, isLoading, error } = useConnect({
        connector: new InjectedConnector()
    });

    if (error) {
        alert(error.message);
    }

    return { address, isConnected, chain, ensName, isLoading, handleConnect: connect };
}

export default useWeb3Connect;
