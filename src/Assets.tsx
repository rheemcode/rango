import { Disclosure } from "@headlessui/react";
import { TokenBalance, Wallet } from "alchemy-sdk";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const Assets = () => {
    const [ready, setReady] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [balance, setBalance] = useState<TokenBalance[]>([]);
    const [provider, setProvider] = useState<any>();
    const [isEdited, setIsEdited] = useState(false);
    const n = useRef(0);
    const navigate = useNavigate();


    return (

        <div className="relative overflow-x-hidden">
            <div className="pt-36">
                <main className="relative">
                    <section className=" px-4">
                        <div className="relative container mb-24">
                            <div className="md:w-11/12 lg:w-10/12 mx-auto flex items-center md:flex-row flex-col gap-12 justify-center">
                                <div className="flex-1 md:text-left text-center">
                                    <div>
                                        <h2 className="text-4xl md:text-[4rem] font-semibold">Ethereum Wallet</h2>
                                    </div>

                                    <div className="mt-3  leading-loose text-zinc-400 font-light">
                                        Ethereum (ETH) stands as the world's second-largest cryptocurrency by market capitalization, operating on a decentralized blockchain network. Its native token, Ether (ETH), fuels transactions and operations within the ecosystem. Ethereum empowers decentralized applications (Dapps) across various sectors including social networking, payments, investments, and gaming.
                                    </div>
                                    <div className="mt-5">
                                        <button onClick={() => navigate("/swap")} className="py-2 w-full px-24 rounded text-white bg-[#482728]">Swap crypto</button>
                                    </div>
                                </div>
                                <div className="-1">
                                    <img src={process.env.PUBLIC_URL + "ETH_desktop.png"} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" px-4 mt-">
                        <div className="relative container md:w-8/12 mx-auto">
                            <div className="md:py-16">
                                <div className="text-center">
                                    <h2 className="text-4xl font-semibold">What functionalities are available with an Ethereum (ETH) Wallet?</h2>
                                    <div className="mt-6">
                                        <p className="text-zinc-400">
                                            CrabSwap is a unique crypto exchange platform tailored for Ethereum investors who prefer trading on the go. More than just an exchange, CrabSwap allows you to analyze the market, trade cryptocurrencies, and easily buy, send, or receive Ethereum with a few simple taps, all from wherever you are.
                                        </p>
                                        <p className="text-zinc-400 mt-4">
                                            "Here are just a few features available with your CrabSwap Ethereum Wallet:"
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12 text-zinc-400 mt-12">

                                    <div >
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            Explore Your ETH Portfolio

                                        </h4>

                                        <p className="text-zinc-400 mt-8  !leading-loose">
                                            One of the greatest challenges for both seasoned crypto enthusiasts and newcomers alike is keeping track of the dynamic market. Ethereum, despite its popularity, experiences significant fluctuations over time, requiring swift action. With CrabSwap, you can conveniently view historical charts, monitor your existing portfolio, and explore the market value of other cryptocurrencies directly within the platform.
                                        </p>
                                    </div>


                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            Effortless Sending and Receiving of ETH
                                        </h4>
                                        <p className="text-zinc-400 mt-8  !leading-loose">
                                            For serious Ethereum investors, flexibility is key. CrabSwap simplifies the process of sending and receiving Ethereum within your network. With just a few taps, input the recipient's wallet address and initiate the transfer. As a recipient, share your wallet address with the sender, and receive a notification once the transaction is completed.
                                        </p>

                                    </div>

                                    <div>

                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            Buy Ethereum on CrabSwap
                                        </h4>
                                        <p className="text-zinc-400 mt-8  !leading-loose">
                                            New to Ethereum? CrabSwap offers a straightforward and secure method to kickstart your investment journey. Simply select the ETH asset (or any other currency of interest), follow the prompts, choose your preferred payment option, and proceed with ease.
                                        </p>

                                    </div>


                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            Trade Ethereum for Various Coins and Tokens

                                        </h4>
                                        <p className="text-zinc-400 !leading-loose mt-8">
                                            Expand your portfolio beyond ETH with CrabSwap. Exchange Ethereum for any of the supported assets, including DOGE, Tether, Bitcoin, and Shiba Inu, among others.</p>

                                    </div>

                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <button onClick={() => navigate("/swap")} className="py-2 px-24 rounded text-white bg-[#482728]">Swap cryptocurrency</button>
                            </div>
                        </div>
                    </section>
                    <section className=" px-4 mt-24">
                        <div className="relative container md:w-8/12 mx-auto">
                            <div className="py-16">
                                <div className="text-center">
                                    <h2 className="text-5xl font-semibold">Essential Insights into Ethereum</h2>
                                    <div className="mt-6">
                                        <p className="text-zinc-400">
                                            Ethereum, both a blockchain and its native cryptocurrency, ETH, stands as one of the most prominent cryptocurrencies globally. Let's explore its nuances!
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12 text-zinc-400 mt-12">
                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            1. What is Ethereum (ETH)?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum functions as a blockchain platform, with its native coin known as Ethereum or ether (ETH). Ether is utilized for transaction fees and computational services, generated through mining.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            2. Who Created Ethereum?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum was conceptualized by Vitalik Buterin, along with seven co-founders.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            3. Why Was Ethereum Created?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Inspired by experiences with centralized services and cryptocurrency, Vitalik Buterin envisioned Ethereum to revolutionize decentralized technology.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            4. When Was Ethereum Introduced?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum officially launched in July 2015, following an ICO conducted in August 2014.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            5. What Is The Difference Between Ethereum and Ether?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum serves as a platform supporting decentralized applications, while ether functions as its cryptocurrency.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            6. How Does The Ethereum Blockchain Work?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ether facilitates transactions on the Ethereum network, powered by smart contracts and decentralized applications (dApps).
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            7. Who Are the Most Popular Supporters of Ethereum?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Celebrities like Ashton Kutcher and NFL cornerback Richard Sherman have expressed support for Ethereum.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            8. Does Ethereum Have An Online Community?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Yes, Ethereum boasts a vibrant online community, with regular conferences and events held worldwide.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            9. Where Can I Use Ethereum in Real Life?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum finds applications in decentralized finance (DeFi), gaming, digital art (NFTs), supply chain management, and more.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            10. What is Ethereum 2.0?
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            Ethereum 2.0 represents a transition to a proof of stake protocol, enhancing scalability and reducing energy consumption.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            11. Using ETH with wETH
                                        </h4>
                                        <p className="text-zinc-400 mt-8 leading-loose">
                                            wETH, or wrapped Ethereum, facilitates Ethereum trading on other DeFi platforms conforming to the ERC-20 token standard.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#D6DFCD] px-4 mt-">
                        <div className="relative container ">
                            <div className="py-16">
                                <div className="text-center">
                                    <h2 className="text-4xl font-semibold">Crabswap FAQs (Frequently asked questions)</h2>
                                </div>
                                <div className="mt-12 lg:w-8/12 mx-auto">
                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <div className={`md:p-8 p-4 ${open ? "" : ""} text-left border-t border-zinc-100`}>

                                                    <Disclosure.Button onClick={() => {
                                                    }} className="w-full">
                                                        <div className="flex items-center md:text-center text-left justify-between">
                                                            <div className="te">
                                                                What is CrabSwap?
                                                            </div>
                                                            <div>
                                                                <svg fill="black" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="black"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose  font-ligh">
                                                            CrabSwap empowers you to seamlessly switch one cryptoasset for another, maintaining equal value throughout the exchange. For instance, you can effortlessly trade $100 worth of Bitcoin for an equivalent value of Ethereum (minus fees). Although the amounts of crypto may differ, the value remains constant in the chosen local currency—in this case, dollars.
                                                        </p>
                                                    </Disclosure.Panel>
                                                </div>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <div className={`md:p-8 p-4 ${open ? "" : ""} text-left border-t border-zinc-100`}>

                                                    <Disclosure.Button onClick={() => {
                                                    }} className="w-full">
                                                        <div className="flex items-center md:text-center text-left justify-between">
                                                            <div className="te">
                                                                How can I confirm that my swap has been successfully completed?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="black"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose  font-ligh">
                                                            After completing a trade order, you'll notice a "Trade Pending..." activity for the outgoing asset on your History screen. Once your trade arrives, you'll see it reflected in your transaction history.
                                                        </p>
                                                    </Disclosure.Panel>
                                                </div>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <div className={`md:p-8 p-4 ${open ? "" : ""} text-left border-t border-zinc-100`}>

                                                    <Disclosure.Button onClick={() => {
                                                    }} className="w-full">
                                                        <div className="flex items-center md:text-center text-left justify-between">
                                                            <div className="te">
                                                                What cryptocurrencies can i swap?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="black"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose  font-ligh">
                                                            Typically, you can trade most assets available in your Crabswap wallet. However, there might be certain asset pairs unavailable due to liquidity constraints, which can vary over time. The easiest way to check the currently available pairs is by navigating through the app. Can't find a specific asset for trading? Feel free to contact us directly as we continually strive to broaden the range of supported assets.
                                                        </p>
                                                    </Disclosure.Panel>
                                                </div>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <div className={`md:p-8 p-4 ${open ? "" : ""} text-left border-t border-zinc-100`}>

                                                    <Disclosure.Button onClick={() => {
                                                    }} className="w-full">
                                                        <div className="flex items-center md:text-center text-left justify-between">
                                                            <div className="te">
                                                                How will a swap take?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="black"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose  font-ligh">
                                                            A trade may take anywhere from 5 to 30 minutes, depending on the asset pair and prevailing market conditions. Rest assured, you'll receive a notification once your trade or swap is successfully deposited into your Crabswap wallet.
                                                        </p>
                                                    </Disclosure.Panel>
                                                </div>
                                            </>
                                        )}
                                    </Disclosure>

                                </div>
                            </div>
                        </div>
                    </section>
                </main >
            </div >

        </div >
    )
}

export default Assets;