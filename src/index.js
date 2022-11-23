import AppContainer from 'containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import client from 'config/wagmi';
import 'components/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <WagmiConfig client={client}>
        <AppContainer />
    </WagmiConfig>
);
