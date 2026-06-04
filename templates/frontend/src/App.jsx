import { useState } from 'react';
import { BrowserProvider } from 'ethers';
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const [account, setAccount]       = useState(null);
  const [connecting, setConnecting] = useState(false);

  async function connectWallet() {
    if (!window.ethereum) {
      alert('MetaMask is not installed. Please install it at https://metamask.io');
      return;
    }

    setConnecting(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
    } catch (err) {
      console.error('Wallet connection rejected:', err);
    } finally {
      setConnecting(false);
    }
  }

  function truncate(addr) {
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        {account ? (
          <div className="connected">
            <span className="wallet-dot" />
            <span className="wallet-address">{truncate(account)}</span>
          </div>
        ) : (
          <button
            className="connect-btn"
            onClick={connectWallet}
            disabled={connecting}
          >
            {connecting ? 'Connecting…' : 'Connect Wallet'}
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
