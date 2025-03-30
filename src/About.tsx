const About = () => {
    return (
        <div className="container mx-auto text-white px-4 text-white">
            <div>
                <h3 className=" font-semibold text-4xl"> Introduction</h3>
                <div>
                    <h5 className="text-xl font-medium mt-6">
                        Welcome to Birdswap Space!
                    </h5>

                    <p className="mt-2 md:text-base text-sm !leading-loose">
                        Birdswap Space is a decentralized exchange or DEX created for swapping BEP20 tokens on BNB Chain. Birdswap Space uses an Automated Market Maker (AMM) model where users can trade against a liquidity pool. Those pools are filled with users’ funds. They deposit them into the pool, receiving liquidity provider (or LP) tokens in exchange. Now, they can use those tokens to reclaim their share, plus a portion of the trading fees.
                        Birdswap Space’s vision is to create a strong foundation for the community by giving them incentives in exchange for their support of the AMM model. Creating an advanced ecosystem for automated liquidity provisioned on BNB Chain.
                    </p>
                </div>
            </div>
            <div className="mt-24">
                <h3 className=" font-semibold text-4xl"> Vision-Value-Target</h3>
                <div>
                    <h5 className="text-xl font-medium mt-12">
                        Vision
                    </h5>

                    <p className="mt-2 md:text-base text-sm !leading-loose">
                        To create a strong foundation for the community by giving them incentives in exchange for their support of the AMM model. Creating an advanced ecosystem for automated liquidity provisioned on BNB Chain
                    </p>
                </div>
                <div>
                    <h5 className="text-xl font-medium mt-12">
                        Value
                    </h5>

                    <p className="mt-2 md:text-base text-sm !leading-loose">
                        Creating tokens such as $CSS that the community can use in exchange for products and services that are being offered on the CSS Platform. These tokens can also be used as an investment, that can provide value to the community and supporters.
                    </p>
                </div>
                <div>
                    <h5 className="text-xl font-medium mt-12">
                        Target
                    </h5>

                    <p className="mt-2 md:text-base text-sm !leading-loose">
                        Our main target is consumers that are avoiding the high gas fees of Ethereum Blockchain. We are also aiming to become the best platform that you can use that operates in the AMM model of the BNB Chain.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About