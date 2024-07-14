import Container from "../utils/Container"
import LinkButton from "../utils/LinkButton"
import "./App.css";
import { useState } from "react";
import ethers from 'ethers'; // Assuming ethers.js is imported here

const WalletConnect = () => {
  const [connected, setConnected] = useState(false);
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setWallet(signer);
      setConnected(true);
    } catch (error) {
      console.error('Error connecting to the wallet:', error);
      setConnected(false);
    }
  };

  return (
    <div>
      {connected ? (
        <p>Connected to wallet</p>
      ) : (
        <button onClick={connectWallet}>Connect to Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;