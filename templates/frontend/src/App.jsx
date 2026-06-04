import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="hero">
          <h1>Your Blockchain Project</h1>
          <p className="subtitle">Scaffolded by Africa's Blockchain Club</p>

          <div className="cards">
            <div className="card">
              <h3>📄 Write Contracts</h3>
              <p>Add your Solidity files to <code>contracts/</code></p>
            </div>
            <div className="card">
              <h3>⚙️ Compile</h3>
              <p>Run <code>npm run compile</code> in the project root</p>
            </div>
            <div className="card">
              <h3>🚀 Deploy</h3>
              <p>Add a script to <code>scripts/</code> and run it with Hardhat</p>
            </div>
            <div className="card">
              <h3>🔗 Connect</h3>
              <p>Use the wallet button above to connect MetaMask, then interact with your contracts</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
