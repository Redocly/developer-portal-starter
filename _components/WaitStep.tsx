import * as React from 'react';

const NETWORK_URLS = {
  Testnet: 'https://testnet.xrpl.org',
  Devnet: 'https://devnet.xrpl.org',
  Mainnet: 'https://livenet.xrpl.org',
};

export function WaitStep({ useNetwork = 'Testnet' }) {
  const explorerUrl = NETWORK_URLS[useNetwork];
  return (
    <table className="wait-step" data-explorerurl={explorerUrl}>
      <tbody>
        <tr>
          <th>Transaction ID:</th>
          <td className="waiting-for-tx">(None)</td>
        </tr>
        <tr>
          <th>Latest Validated Ledger Index:</th>
          <td className="validated-ledger-version">(Not connected)</td>
        </tr>
        <tr>
          <th>Ledger Index at Time of Submission:</th>
          <td className="earliest-ledger-version">(Not submitted)</td>
        </tr>
        <tr>
          <th>
            Transaction <code>LastLedgerSequence</code>:
          </th>
          <td className="lastledgersequence">(Not prepared)</td>
        </tr>
        <tr className="tx-validation-status"></tr>
      </tbody>
    </table>
  );
}
