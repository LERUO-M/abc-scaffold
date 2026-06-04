# abc-scaffold

**Africa's Blockchain Club** — project-agnostic blockchain scaffolding tool. Bootstrap a complete Hardhat + React workspace in seconds.

```bash
npx abc-scaffold my-project
```

---

## What gets scaffolded

```
my-project/
├── contracts/          # Drop your Solidity files here
├── scripts/            # Deployment and utility scripts
├── test/               # Hardhat test files
├── frontend/           # React + Vite UI
│   └── src/
│       ├── App.jsx
│       └── components/
│           └── Navbar.jsx   ← sticky nav with Connect Wallet button
├── hardhat.config.js
├── .env.example
├── .gitignore
└── README.md
```

Both root and frontend dependencies are installed automatically.

---

## Features

- **Project-agnostic** — works for NFTs, DeFi, DAOs, smart accounts, or anything else
- **Hardhat pre-configured** — Solidity 0.8.26, Cancun EVM, optimizer on, Sepolia network
- **OpenZeppelin + Account Abstraction** — ERC-20/721/1155, upgradeable contracts, ERC-4337 interfaces included as dependencies
- **React frontend** — Vite + React with a navbar and MetaMask wallet connection (ethers.js v6)
- **Auto install** — runs `npm install` in both the root and `frontend/` at the end
- **Plain JavaScript** — no TypeScript, no build step

---

## Usage

```bash
# With a name argument
npx abc-scaffold my-nft-project

# Or let it prompt you
npx abc-scaffold
? Project name: my-dao
```

---

## Inside the generated project

### Compile contracts
```bash
npm run compile
```

### Run tests
```bash
npm test
```

### Start a local node
```bash
npx hardhat node
```

### Deploy locally
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Start the frontend
```bash
cd frontend
npm run dev   # → http://localhost:5173
```

---

## Repository structure

```
abc-scaffold/  (this repo)
├── bin/
│   └── abc-scaffold.js   # CLI entry point
├── src/
│   ├── scaffold.js        # Scaffolding logic
│   └── logger.js          # Coloured output
├── templates/
│   ├── package.json       # Template for generated projects
│   ├── hardhat.config.js
│   ├── .env.example
│   ├── .gitignore
│   └── frontend/          # Full React app template
└── package.json
```

---

## License

MIT — Africa's Blockchain Club
