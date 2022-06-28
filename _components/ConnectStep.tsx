import * as React from 'react';

const NETWORK_URLS = {
  Testnet: 'wss://s.altnet.rippletest.net:51233',
  Devnet: 'wss://s.devnet.rippletest.net:51233',
  Mainnet: 'wss://xrplcluster.com',
};

export const ConnectStep = ({ useNetwork = 'Testnet' }) => {
  const wsUrl = NETWORK_URLS[useNetwork];
  return (
    <>
      <button id="connect-button" className="btn btn-primary" data-wsurl={wsUrl}>
        Connect to {useNetwork}
      </button>
      <div>
        <strong>Connection status:</strong>
        <span id="connection-status">Not connected</span>
        <div className="loader collapse" id="loader-connect">
          <img className="throbber" src={require('../assets/img/xrp-loader-96.png')} />
        </div>
      </div>
    </>
  );
};
