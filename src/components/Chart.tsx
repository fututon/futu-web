import {useEffect, useRef, memo, useState} from 'react';

function Chart() {
    console.log('asdasdasd')

  const container = useRef();
    const [inited, setInited] = useState(false)

  useEffect(
      () => {
          if (inited) return

          setInited(true)

          console.log('123')

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BYBIT:TONUSDT",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

        if (container.current !== undefined) {
            // @ts-ignore
            container.current.innerHTML = "";
            // @ts-ignore
            container.current.appendChild(script);
        }
      },
      [1]
  );

  return (
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      </div>
  );
}

export default memo(Chart);
