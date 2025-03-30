import { Disclosure } from "@headlessui/react";
import { TokenBalance, Wallet } from "alchemy-sdk";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const Misson = () => {
    const [ready, setReady] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [balance, setBalance] = useState<TokenBalance[]>([]);
    const [provider, setProvider] = useState<any>();
    const [isEdited, setIsEdited] = useState(false);
    const n = useRef(0);
    const navigate = useNavigate();


    return (

        <div className="relative  overflow-x-hidden">
            <div className="">
                <main className="relative">
                    <section className="main px-4 pt-36 pb-12 md:px-1 ">
                        <div className="relative container mb-24">
                            <div className="md:w-11/12 lg:w-10/12 mx-auto flex items-center md:flex-row flex-col gap-12 justify-center">
                                <div className="flex-1 md:text-left text-center">
                                    <div>
                                        <h2 className="text-5xl md:text-[4rem] font-semibold">
                                            CrabSwap's Mission: Finance for Everyone, Everywhere</h2>
                                    </div>
                                    <div className="text-center md:hidden block my-4">
                                        <img className="inline w-36" src={process.env.PUBLIC_URL + "crab.svg"} alt="" />
                                    </div>
                                    <div className="mt-3  leading-loose text-zinc-400 font-light">
                                        At CrabSwap, our mission is to make finance accessible to all, regardless of location or background. We envision a world where managing money is straightforward and investing is as easy as sending an email. Our aim is to eradicate financial exclusion and simplify the complexities of finance by developing the most user-friendly and secure wallet service available. We are dedicated to empowering individuals to thrive in the digital economy. Welcome to CrabSwap.
                                    </div>
                                    <div className="mt-5">
                                        <button onClick={() => navigate("/swap")} className="py-2 px-24 rounded text-white bg-[#482728]">Swap crypto</button>
                                    </div>
                                </div>
                                <div className="-1 md:block hidden">
                                    <img src={process.env.PUBLIC_URL + "crab.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" px-4 mt-">
                        <div className="relative container md:w-8/12 mx-auto">
                            <div className="py-16">
                                <div className="text-center">


                                    <h2 className="text-5xl font-semibold">
                                        CrabSwap: Welcome to the Era of True Simplicity

                                    </h2>
                                    <div className="mt-6">
                                        <p className="text-zinc-400">
                                            At CrabSwap, our mission is to empower individuals worldwide to effortlessly engage in the borderless economy in a safe and secure manner. We're committed to building a borderless financial service that embraces all relevant native crypto protocols, digital assets, and financial services. Our approach involves integrating seamlessly with existing legacy systems while respecting their rules, facilitating the transition from a bordered economy to a borderless one.

                                            <br />
                                            However, we recognize that this is a challenging task, and we are dedicated to addressing it appropriately. It all begins with our firm commitment to operating on-chain.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12 text-zinc-400 mt-12">



                                    <div >
                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            "Crypto, it's time to acknowledge, has lost its essence."
                                        </h4>

                                        <p className="text-zinc-400 mt-8  !leading-loose">
                                            Say goodbye to centralized custodial services that merely replicate the outdated finance 1.0 model. These services, although convenient, are complex, costly, and often restrict your access to funds – the antithesis of what crypto was meant to achieve.
                                            <br />
                                            Why duplicate what the legacy financial world has already established? How can you truly feel in control when your funds are held by others, effectively disconnecting you from the digital economy? And why have alternative, non-custodial wallets struggled to offer the safety and simplicity promised by custodial services?
                                        </p>
                                    </div>
                                    <div>


                                        <h4 className="font-semibold md:text-xl text-zinc-600">
                                            But times are changing.

                                        </h4>
                                        <p className="text-zinc-400 mt-8  !leading-loose">
                                            Thanks to Multi-party Computation (MPC), we can now create on-chain wallet services that put users in control, offering comparable, if not superior, quality, user experience, and security to custodial counterparts.


                                        </p>
                                        <p className="text-zinc-400 !leading-loose">
                                            Being "on-chain" isn't just the best way to serve the industry's broader objectives; it's the inevitable future. It brings significant economic benefits, true transparency, openness, and universal access. We believe this shift is already underway, evident in the movement of funds away from exchanges.

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

export default Misson;