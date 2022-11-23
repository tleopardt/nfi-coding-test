import React from 'react';
import PropTypes from 'prop-types';

function AppScreen(props) {
    const { web3Props: { isConnected, isLoading, ensName, address, handleConnect, chain } } = props;

    return (
        <div className='container'>
            <h1>Web3 Authentication</h1>
            {
                isConnected
                    ? (
                        <>
                            <p>Your Address is <b>{ensName ?? address}</b></p>
                            <p>You are now connected on network <b>{chain.name}</b></p>
                        </>
                    )
                    : <button
                        className='button --bgColor-primary'
                        onClick={handleConnect}
                        disabled={isLoading}>
                            Connect to your wallet
                    </button>
            }
        </div>
    );
}

AppScreen.propTypes = {
    web3Props: PropTypes.object.isRequired
};

export default AppScreen;
