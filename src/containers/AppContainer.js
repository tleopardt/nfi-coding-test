import React from 'react';
import AppScreen from 'components/screens/AppScreen';
import useWeb3Connect from 'utils/wagmi';

function AppContainer() {
    const web3Props = useWeb3Connect();

    return (
        <AppScreen web3Props={web3Props} />
    );
}

export default AppContainer;
