import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env.PRIVATE_KEY);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());


const theNFT= await stdlib.launchToken(accBob, "BlogIt", "BLG", {supply: 1, metadataHash: "https://ipfs.io/ipfs/iQmeLJf1LrF3n6edoR5Dkzvr6gTmPWweHpd2xodUKFqKyHg"})
const nftParams= {
  nftId: theNFT.id,
  amtOfNFT: UInt
}

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ctcAddress: (info)=>{
      console.log(`This is the contract Address ${info}`)
    }
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    Mint: ()=>{
      return nftParams
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');
