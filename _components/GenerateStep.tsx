import * as React from 'react';

const NETWORK_URLS = {
  'Testnet': 'https://faucet.altnet.rippletest.net/accounts',
  'Devnet': 'https://faucet.devnet.rippletest.net/accounts',
}

export function GenerateStep({useNetwork = 'Testnet'}) {
  const faucetUrl = NETWORK_URLS[useNetwork];
  return (
    <>
      <button id="generate-creds-button" className="btn btn-primary" data-fauceturl={faucetUrl}>
        Get {useNetwork} credentials
      </button>
      <div className="loader collapse">
        <img className="throbber" src={require('../assets/img/xrp-loader-96.png')} />
        Generating Keys...
      </div>
      <div className="output-area" />
    </>
  );
}
