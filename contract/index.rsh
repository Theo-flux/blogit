'reach 0.1';
const OBject=Object({

});

export const main = Reach.App(() => {
  //Alice will deploy the contract
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ctcAddress: Fun([Address], Null)
  });
  //Bob will be able to mint NFT and publish on-chain while storing the metadata on IPFS
  const B = Participant('Bob', {
   Mint: Fun([], Object({
     nftId: Token
   })),
   Post: Fun([], Object({
     Id: UInt,
     Owner: Address,
     tipAmount: UInt,
     postHash: Bytes(128)

   }))
  });
  init();
  A.publish();
  const info= getAddress();
  commit();
  A.only(()=>{
    interact.ctcAddress(info)
  })
  // The first one to publish deploys the contract
 

  // The second one to publish always attaches
  B.only(()=>{
    const myNFTId= declassify(interact.Mint());
  })
  B.publish(myNFTId);
  const M1= new Map (Address, OBject);
  const Profiles= new Map (Address, UInt) //Address of a user mapped to the selected NFTId
  commit();
  // write your program here
  exit();
});
