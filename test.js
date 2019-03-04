var state = { chartData: { data: [{acc: "Cash", balance: 1000},
    {acc: "Client Loan", balance: 200},
    {acc: "Tokens", balance: 500}] , chartType: "vBarChart" }} ;

var data= {
    chartData: {
        chartType: 'vBarChart',
        selector: 'lineGraph',
        title: this.title,
        width: this.width,
        height: this.height,
        dim: "acc",
        metric: "balance",
    }
};
console.log(state.chartType);
console.log( ({data, ...state.chartType}));
console.log(JSON.stringify({data, ...state.chartType}));
