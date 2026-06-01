let lastPrices = {};

let socket = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker/xrpusdt@ticker/dogeusdt@ticker/bnbusdt@ticker/shibusdt@ticker/trxusdt@ticker/bchusdt@ticker/wbtcusdt@ticker/linkusdt@ticker"
);

socket.onmessage = function(event) {
    let data = JSON.parse(event.data);
    let d = data.data;

    let symbol = d.s;

    let price = parseFloat(d.c); 
    let change = parseFloat(d.P);
    let high = parseFloat(d.h);
    let low = parseFloat(d.l);
    let volume = parseFloat(d.q);

    let map = {
        BTCUSDT: "btc",
        ETHUSDT: "eth",
        SOLUSDT: "sol",
        XRPUSDT: "xrp",
        DOGEUSDT: "doge",
        BNBUSDT: "bnb",
        SHIBUSDT: "shib",
        TRXUSDT: "trx",
        BCHUSDT: "bch",
        WBTCUSDT: "wbtc",
        LINKUSDT: "link",
    };


    let prefix =map[symbol];
    if (!prefix) return;

    let priceEl = document.getElementById(prefix + "Price");
    let changeEl = document.getElementById(prefix + "Change");
    let highEl = document.getElementById(prefix + "High");
    let lowEl = document.getElementById(prefix + "Low");
    let volumeEl = document.getElementById(prefix + "Volume");

    if (!priceEl || !changeEl || !highEl || !lowEl || !volumeEl) return;


    if (lastPrices[symbol]) {
        if (price > lastPrices[symbol]) {
            priceEl.style.color = "lime";
            priceEl.style.transition = "0.3s";
        } else if (price < lastPrices[symbol]) {
            priceEl.style.color = "red";
        } else {
            priceEl.style.color = "white";
        }
    }

    
    priceEl.innerText = "$" + price.toLocaleString();
    changeEl.innerText =  change.toFixed(2) + "%";
    highEl.innerText = "$" + high.toFixed(2);
    lowEl.innerText = "$" + low.toFixed(2);
    volumeEl.innerText = "$" + (volume / 1e6).toFixed(2) + "M";

    if (change  > lastPrices[symbol]) {
        changeEl.style.color = "lime";
    } else if (change < lastPrices[symbol]) {
        changeEl.style.color = "red";
    } else {
        changeEl.style.color = "white";
    }

    lastPrices[symbol] = price;
};


let buttons = document.querySelectorAll("#a1");
let pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {

        e.preventDefault();

        // active button
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // hide pages
        pages.forEach(p => p.classList.remove("active"));

        // show selected
        let target = btn.getAttribute("data-page");
        document.getElementById(target).classList.add("active");

    });
});


let widgetLoaded = false;

function loadChart(symbol) {

    // container clear (important)
    document.getElementById("chart").innerHTML = "";

    new TradingView.widget({
        width: "100%",
        height: "100%",
        symbol: symbol,
        interval: "15",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",

        enable_publishing: false,
        allow_symbol_change: true,

        container_id: "chart",

         disabled_features: [],
         enabled_features: ["move_logo_to_main_pane"],

        // 🔥 YAHI ADD KARNA THA (important)
        overrides: {
            "paneProperties.dragging": true,
            "scalesProperties.zoomEnabled": true
        }
    });

    widgetLoaded = true;
}



// NAV CLICK
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function () {

        
        

        // active button
        document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active-btn"));
        this.classList.add("active-btn");

        // page switch
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById(this.dataset.page).classList.add("active");

        let pageId = this.getAttribute("data-page");
        document.getElementById(pageId).classList.add("active");

        // load chart when opening
        if (this.dataset.page === "chartPage") {
            setTimeout(() => {
                loadChart("BINANCE:BTCUSDT");
            }, 100);
        }
    });
});

// FIRST LOAD
window.onload = function () {
    loadChart("BINANCE:BTCUSDT");
};




