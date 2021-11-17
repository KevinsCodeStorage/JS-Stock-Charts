function getColor(stock){
            if(stock === "GME"){
                return 'rgba(61, 161, 61, 0.7)'
            }
            if(stock === "MSFT"){
                return 'rgba(209, 4, 25, 0.7)'
            }
            if(stock === "DIS"){
                return 'rgba(18, 4, 209, 0.7)'
            }
            if(stock === "BNTX"){
                return 'rgba(166, 43, 158, 0.7)'
            }
        }



async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    

    //let response = await fetch('https://api.twelvedata.com/time_series?symbol=BNTX,DIX,GME,MSFT=1min&apikey=2a038e85775142ef9bd2b207aa99bec7')

    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];



    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
                data: stock.values.map(value => parseFloat(value.high))
            }))
        }
    });

    


}

main()