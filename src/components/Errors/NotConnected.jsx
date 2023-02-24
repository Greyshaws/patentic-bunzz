import React from "react";
import classes from "./NotConnected.module.css"
import Button from "../UI/Button";
import ContractContext from "../../context/contract-context";

const NotConnected = () => {
    const ContractCtx = React.useContext(ContractContext)

    const {connectWallet} = ContractCtx

    const handleConnectWallet = () => {
        console.log("connect btn tapped")
        connectWallet()
    }
    return (
        <div className={classes["not-connected"]}>
            <p>You're wallet is not connected</p>
            <Button type="button" onClick={handleConnectWallet}>
                    Connect Wallet
                </Button>
        </div>
    )
}

export default NotConnected