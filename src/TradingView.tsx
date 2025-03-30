// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';
import { useEffectOnce } from "react-use"

function TradingViewWidget() {
    const container = useRef<any>();

    useEffect(
        () => {

            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
        
        "height": "510",
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

            
            container.current.appendChild(script);

            // return (() => container.current.removeChild(script))
        }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}>

            </div>

        </div>
    );
}

export default memo(TradingViewWidget);
