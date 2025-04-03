import 'dotenv/config'
import {ethers} from "ethers";
import { BrowserProvider,parseUnits,parseEther,formatEther,Contract} from "ethers";
import { HDNodeWallet } from "ethers/wallet";
// If no %%url%% is provided, it connects to the default
// http://localhost:8545, which most nodes use.
const provider = new ethers.JsonRpcProvider(process.env.URL);
// console.log("Private Key:", process.env.PRIVATE_KEY);

// Get write access as an account by getting the signer
const Signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


// console.log('````````````````````')
// console.log(provider)
// console.log('````````````````````')
//const signer = await provider.getSigner(process.env.PUBLIC_KEY)
const eth = parseEther("1.0")
// console.log(formatEther(eth));
// console.log('````````````````````')
// console.log(eth)
const getHash=await provider.getBlockNumber()
// console.log(getHash);
// console.log('++++++++++++')
// converts ether to wei.
const tx = await Signer.sendTransaction({
    to: "0x6E8A8908EEEdcF6B81C3B6C406969E2F60d3571E",
    value: ethers.parseEther("0.00002"),
  });
// console.log(tx)
const abi =[
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "donation_recieve",
      "inputs": [
        {
          "name": "_donation_ammount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "donation_tracking",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "donation_withdraw",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOwnerAddress",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getOwnerBalance",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTotalDonation",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "top_Donner_Donation",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ]
  
// Create a contract with the signer
const contract = new Contract("0x320f75cf83e3e609788f117c5207d07c3f23573d", abi, Signer);
console.log(contract)
const tnx = await contract.donation_recieve(30);
console.log("Transaction sent:", tnx.hash);

const receipt = await tnx.wait();
console.log("Transaction mined:", receipt.blockNumber);
const tnx1 = await contract.donation_recieve(30);
const total = await contract.getTotalDonation();
console.log("Updated sum:", total.toString());