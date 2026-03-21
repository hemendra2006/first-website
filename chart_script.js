let widget;

function loadChart(symbol) {
    document.getElementById("chart").innerHTML = "";

    widget = new TradingView.widget({
        width: "100%",
        height: "100%",
        symbol: symbol,
        interval: "15",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",

        enable_publishing: true,
        allow_symbol_change: true,
        withdateranges: true,
        hide_side_toolbar: false,
        hide_top_toolbar: false,
        details: true,
        hotlist: true,
        calendar: true,

        studies: [
            "Moving Average@tv-basicstudies",
            "Bollinger Bands@tv-basicstudies"
        ],

        container_id: "chart"
    });
}

// dropdown change
document.getElementById("chartSelect").addEventListener("change", function () {
    loadChart(this.value);
});

// fullscreen button
document.getElementById("fullscreenBtn").addEventListener("click", function () {
    let chart = document.getElementById("chart");

    if (!document.fullscreenElement) {
        chart.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// default load
loadChart("BINANCE:BTCUSDT");