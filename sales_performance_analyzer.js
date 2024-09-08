//  step #1

function calculateAverageSales(sales) {
   let totalSales = 0;
 
    for (let i = 0; i < sales.length; i++) {
     totalSales += sales[i];
    } 
 
    const averageSales = totalSales / sales.length;
 
     return averageSales;
 }
