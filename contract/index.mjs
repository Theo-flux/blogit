import {loadStdlib, ask} from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";


const stdlib= loadStdlib()

const isDeployer= await ask.ask(
  "Are you the deployer?",
  ask.yesno
);
const who= isDeployer? "Deployer": "Users"

console.log(`starting the blog as ${who}`)

let acc= null
const createAcc= await ask.ask(
  "Do you want to create account?",
  ask.yesno
);
if(createAcc){
  acc= await stdlib.newTestAccount(stdlib.parseCurrency(1000))
} else{
  const secret= await ask.ask(
    "What is your account secret?",
    (x=>x)
  );
  acc= await stdlib.newAccountFromSecret(secret);

}
let ctc= null
if (isDeployer){
  ctc=  acc.contract(backend);
  ctc.getInfo().then((info)=> {console.log(`this is the contract info ${JSON.stringify(info)}`)})
} else{
  const info= await ask.ask(
    "please paste the contract info",
    JSON.parse
  )
  ctc= await acc.contract(backend, info)
}
const interact= {...stdlib.hasRandom}
if(isDeployer){
  interact.amt=5
}
if(!isDeployer){
 const mintnftProfile= await ask.ask(
  "Do you wanna mint NFT as profile",
  ask.yesno
 )
 if(mintnftProfile){
 
  interact.mintNFTAsProfile=()=>{
    const nft= await stdlib.launchToken(acc, "name", "syn",{supply:1})
    return nft.id
  }
  const de= await acc.balancesOf([nft.id])
  console.log (`${de}`)
}
}
if(!isDeployer){
  const createPosts= await ask.ask(
    "Submit your post?",
    (x=>x)
  )
  
  interact.mintPost=()=>{
    const post= await stdlib.launchToken(acc, "nam", "sy",{supply:1, metadaHash: "createPost"})
   getParams={
    id: post.id,
    tipAmount: 5
  }
    return getParams;
  }
  console.log(`${acc.getAddress()}`)
}
const part = isDeployer ? ctc.p.Deployer : ctc.p.Users;
await part(interact);

ask.done()
