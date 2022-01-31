import logo from "./logo.svg";
import "./App.css";
import { LCDClient, Coin } from "@terra-money/terra.js";

// connect to bombay testnet
const terra = new LCDClient({
  URL: "https://bombay-lcd.terra.dev",
  chainID: "bombay-12",
});

// To use LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

// get the current swap rate from 1 TerraUSD to TerraKRW
const offerCoin = new Coin("uusd", "1000000");
terra.market.swapRate(offerCoin, "ukrw").then((c) => {
  console.log(`${offerCoin.toString()} can be swapped for ${c.toString()}`);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
