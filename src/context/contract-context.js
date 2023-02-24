import React, { useState, useEffect } from "react";


const ContractContext = React.createContext({
  currentAccount: "",
  accounts: [],
//   balance: "",
  connectWallet: () => {},
});

// const = contractABI = 

export const ContractContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [accounts, setAccounts] = useState("")


  
   
   /**
  * Implement your connectWallet method here
  */
    const connectWallet = async () => {
        try {
          const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make sure you have metamask!");
          return;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
  
        /*
        * Check if we're authorized to access the user's wallet
        */
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length !== 0) {
            setAccounts(accounts)
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account)
        } else {
            console.log("No authorized account found")
          }
  

        } catch (error) {
          console.log(error)
        }
      }

      let connected = currentAccount ? true : false
    
  return (
    <ContractContext.Provider
      value={{
        currentAccount: currentAccount,
        accounts: accounts,
        connected: connected,
        connectWallet: connectWallet,
       }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;

// chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#