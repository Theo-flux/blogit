'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Deployer', {
    ...hasRandom,
    amt: UInt
    // Specify Alice's interact interface here
  });
  const B = Participant('Users', {
      ...hasRandom,
      mintNFTAsProfile:Fun([], Token),
      mintPost: Fun([], Object({
        id: Token,
        tipAmount: UInt,
      
       }))
      // payTip: Fun([UInt], Object({
      //   postID: Token,
      //   author: Address
      // })) //this includes the amount of Tip, the ID of the post you wanna tip and the address that created the post
      
    // Specify Bob's interact interface here
  });
  init();
  // The first one to publish deploys the contract
  A.only(()=>{
   const amts= declassify(interact.amt);
  })
  A.publish(amts);
  commit();
  B.only(()=>{
    const mintedNFT= declassify(interact.mintNFTAsProfile());
    //const {id, tipAmount}=declassify(interact.mintPost());
  })
  // The second one to publish always attaches
  B.publish(mintedNFT);
 
  
  
  commit();
  // write your program here
  exit();
});
