import {createSolanaRpc, devnet,address } from "@solana/kit";
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = {
    address:"5zvtrSQ4MfDDkPhP5YKbGRjY4WqJ9RPAFyuSH17xBTzJ"    
}
console.log("Wallet address:", wallet.address);
const { value: balance } = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);