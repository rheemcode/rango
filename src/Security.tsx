import { Disclosure } from "@headlessui/react";
import { TokenBalance, Wallet } from "alchemy-sdk";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const Security = () => {
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
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-5xl md:text-[4rem] font-semibold">Your Web3 Firewall</h2>
                                    </div>

                                    <div className="mt-3  leading-loose text-zinc-400 font-light">
                                        Crabswap’s Web3 Firewall protects, alerts, and defends your Web3 assets against hacks, scams, and wallet drainers. No additional software required. The Web3 Firewall is built into every Crabswap Pro account.

                                    </div>
                                    <div className="mt-5">
                                        <button onClick={() => navigate("/swap")} className="py-2 px-24 rounded text-black bg-[#482728]">Swap crypto</button>
                                    </div>
                                </div>
                                <div className="-1">
                                    <img src={process.env.PUBLIC_URL + "firewall.png"} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" px-4 mt-">
                        <div className="relative container md:w-8/12 mx-auto">
                            <div className="py-16">
                                <div className="text-center">
                                    <h2 className="text-5xl font-semibold">Transaction Insights: Advanced Web3 Firewall features</h2>
                                    <div className="mt-6">
                                        <p className="text-zinc-400">
                                            Crabswap  customers also benefit from Transaction Insights, which includes the ability to review transactions before granting final approval. This level of detail is thanks to Transaction Simulations, which help show a best estimation of what you’re approving before you sign an on-chain transaction.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center mt-24">
                                    <h2 className="text-5xl font-semibold">A new paradigm in Web3 security: Web3 Firewall</h2>
                                    <div className="mt-6">
                                        <p className="text-zinc-400">
                                            Crabswap’s Web3 Firewall classifies sensitive on-chain transactions into 3 risk levels, based on transaction sensitivity, levels of permission granted to external systems, and known scams. Just like a stoplight, with 3 levels of safety.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <div className="grid md:grid-cols-3">
                                        <div>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><g id="System Icons / Check in circle"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.9792 25C11.9792 17.8088 17.8088 11.9792 25 11.9792C32.1913 11.9792 38.0208 17.8088 38.0208 25C38.0208 32.1913 32.1913 38.0208 25 38.0208C17.8088 38.0208 11.9792 32.1913 11.9792 25ZM25 7.8125C15.5076 7.8125 7.8125 15.5076 7.8125 25C7.8125 34.4925 15.5076 42.1875 25 42.1875C34.4925 42.1875 42.1875 34.4925 42.1875 25C42.1875 15.5076 34.4925 7.8125 25 7.8125ZM31.4945 21.3493C32.0671 20.3514 31.7223 19.0781 30.7243 18.5055C29.7264 17.9329 28.4531 18.2777 27.8805 19.2757L23.1022 27.6033L23.102 27.6033L22.1986 25.6776C21.7099 24.636 20.4693 24.1877 19.4276 24.6764C18.386 25.1651 17.9377 26.4057 18.4264 27.4474L19.33 29.3732L19.3301 29.3734C20.7625 32.4257 25.0379 32.6015 26.7161 29.6772L26.7162 29.677L31.4945 21.3493Z" fill="#66E2E0"></path></g></svg>
                                                </div>
                                                <span className="text-white text-xl">
                                                    Green
                                                </span>
                                            </div>
                                            <div className="mt-8">
                                                <p className="text-zinc-400">
                                                    You are interacting with a verified Dapp and/or known smart contract.
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><g id="System Icons / About"><g id="Vector"><path d="M22.9167 18.75C22.9167 17.5994 23.8495 16.6667 25 16.6667C26.1504 16.6667 27.0833 17.5994 27.0833 18.75C27.0833 19.9006 26.1504 20.8333 25 20.8333C23.8495 20.8333 22.9167 19.9006 22.9167 18.75Z" fill="#FFC31A"></path><path d="M25 25C26.1506 25 27.0833 25.9327 27.0833 27.0833V31.25C27.0833 32.4006 26.1506 33.3333 25 33.3333C23.8494 33.3333 22.9167 32.4006 22.9167 31.25V27.0833C22.9167 25.9327 23.8494 25 25 25Z" fill="#FFC31A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25 7.8125C15.5076 7.8125 7.8125 15.5076 7.8125 25C7.8125 34.4925 15.5076 42.1875 25 42.1875C34.4925 42.1875 42.1875 34.4925 42.1875 25C42.1875 15.5076 34.4925 7.8125 25 7.8125ZM11.9792 25C11.9792 17.8088 17.8088 11.9792 25 11.9792C32.1913 11.9792 38.0208 17.8088 38.0208 25C38.0208 32.1913 32.1913 38.0208 25 38.0208C17.8088 38.0208 11.9792 32.1913 11.9792 25Z" fill="#FFC31A"></path></g></g></svg>
                                                <span className="text-white text-xl">
                                                    Yellow
                                                </span>
                                            </div>
                                            <div className="mt-8">
                                                <p className="text-zinc-400">
                                                    This interaction is context-dependent but generally reflects uncommon behavior: Stay alert and confirm that intent is aligned with expected results.
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><g id="System Icons / Warning"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M30.3409 11.027C27.9067 7.0216 22.0931 7.02159 19.6589 11.027L9.0247 28.525C6.49343 32.6901 9.49179 38.0209 14.3657 38.0209H35.6341C40.508 38.0209 43.5063 32.6901 40.9751 28.525L30.3409 11.027ZM23.2195 13.191C24.031 11.8558 25.9688 11.8558 26.7802 13.191L37.4144 30.6889C38.2582 32.0773 37.2587 33.8543 35.6341 33.8543H14.3657C12.7411 33.8543 11.7416 32.0773 12.5854 30.6889L23.2195 13.191ZM24.9999 16.6668C26.1505 16.6668 27.0832 17.5995 27.0832 18.7501V22.9168C27.0832 24.0674 26.1505 25.0001 24.9999 25.0001C23.8493 25.0001 22.9166 24.0674 22.9166 22.9168V18.7501C22.9166 17.5995 23.8493 16.6668 24.9999 16.6668ZM27.0833 29.1667C27.0833 30.3173 26.1504 31.25 25 31.25C23.8496 31.25 22.9166 30.3173 22.9166 29.1667C22.9166 28.0161 23.8496 27.0834 25 27.0834C26.1504 27.0834 27.0833 28.0161 27.0833 29.1667Z" fill="#FF5E5B"></path></g></svg>
                                                <span className="text-white text-xl">
                                                    Red
                                                </span>
                                            </div>
                                            <div className="mt-8">
                                                <p className="text-zinc-400">
                                                    The Web3 Firewall has detected highly unusual behavior and immediate attention is required. Most of the most sensitive red transactions require a double-confirmation.
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#272C2F] px-4 mt-">
                        <div className="relative container ">
                            <div className="py-16">
                                <div className="text-center">
                                    <h2 className="text-5xl font-semibold">FAQ Crabswap</h2>
                                </div>
                                <div className="mt-12 lg:w-8/12 mx-auto">
                                    <Disclosure >
                                        {({ open }) => (
                                            <>
                                                <div className={`md:p-8 p-4 ${open ? "" : ""} text-left border-t border-zinc-100`}>

                                                    <Disclosure.Button onClick={() => {
                                                    }} className="w-full">
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                What is Crabswap?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            Crabswap allows you to trade (or swap) one cryptoasset for another cryptoasset of the same value. For example, you can trade $100 worth of Bitcoin for $100 worth of Ethereum (minus fees). The amounts of crypto are different for each asset, but the local currency value — dollars in this example — is the same.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                How do I swap?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-light">
                                                            Trading in Crabswap is easy. Just follow these steps:
                                                        </p>

                                                        <ul className="lis list-decimal my-4 text-zinc-400 font-light ml-8 space-y-2">
                                                            <li> Open your Crabswap account here</li>
                                                            <li> Go to the Actions tab on the home screen</li>
                                                            <li> Select the asset to trade (i.e. the “From” asset)</li>
                                                            <li> Select the asset to receive in return (i.e. the “To” asset)</li>
                                                            <li> Enter the amount to trade</li>
                                                            <li> Press “Continue” and review your trade</li>
                                                            <li> Press “Confirm”</li>
                                                        </ul>
                                                        <p className="leading-loose text-zinc-400 font-light">
                                                            That’s it! Your trade order is submitted and you’ll be notified when it arrives.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                How do I know my swap has completed
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            When you complete a trade order, you will see a “Trade Pending…” activity for the outgoing asset on your History screen. When your trade arrives, you will see a “Trade Received” activity for the incoming asset and receive a notification.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                Are there any fees associated with swapping?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            There are two types of fees related to trading:
                                                        </p>
                                                        <ul className="lis list-decimal my-4 text-zinc-400 font-light ml-8 space-y-2">
                                                            <li> Processing fee & spread: Every transaction includes a 0.5% processing fee and a fee included in the asset spread: The spread is the difference in price between sellers and buyers. Other liquidity fees may apply depending on the asset. To ensure maximum transparency, fees you pay are deducted from the final amount on the confirmation screen and clearly displayed, so what you see when you approve the transaction is the actual amount you’ll receive in your Crabswap wallet.</li>
                                                            <li> Network fee: This is the standard blockchain mining fee for processing transactions, the same as for sending regular transactions. It can vary depending on the asset, network congestion, and market conditions. Network fees are dynamic and change all the time. The network fee is in addition to the processing fee and you’ll see it clearly on the confirmation screen before completing the trade. For supported Ethereum tokens (ERC-20) you will need Ethereum to pay for the network fees.</li>

                                                        </ul>
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                Which assests can i swap?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            In general you can trade most assets supported in your Crabswap wallet. There may be certain asset pairs that are not supported for lack of liquidity, but this can change from time to time. The best way to check which pairs are currently available is by selecting them in the app. Want to trade an asset but can’t find it as an option? Reach out to us directly as we’re always looking to expand supported assets.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                How long does a swap take?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            A trade can take anywhere from 5 to 30 minutes, depending on the asset pair and market conditions. You’ll receive a notification when your trade or swap arrives in your Crabswap wallet.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                Where is swapping available?
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            Trade from almost everywhere the Crabswap wallet is available.
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
                                                        <div className="flex items-center justify-between">
                                                            <div className="te">
                                                                Are there minimum and maximum amounts for swapping
                                                            </div>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 1C8.25 0.447715 7.80228 0 7.25 0C6.69772 0 6.25 0.447715 6.25 1V6.25H1C0.447715 6.25 0 6.69772 0 7.25C0 7.80228 0.447715 8.25 1 8.25H6.25V13.5C6.25 14.0523 6.69772 14.5 7.25 14.5C7.80228 14.5 8.25 14.0523 8.25 13.5V8.25H13.5C14.0523 8.25 14.5 7.80228 14.5 7.25C14.5 6.69772 14.0523 6.25 13.5 6.25H8.25V1Z" fill="#DADDDE"></path></svg>
                                                            </div>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-8">
                                                        <p className="leading-loose text-zinc-400 font-ligh">
                                                            There are minimum and maximum trade amounts for each asset pair which can vary based on market conditions. We try to optimize the minimum amounts so that the network fees paid to miners to process the transaction are never a significant portion of the total trade. You can see the current minimum and maximum amounts on the trade screen in the app.

                                                            If you’d like to trade more than the maximum amount, you can simply split your trade into multiple parts.
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

export default Security;