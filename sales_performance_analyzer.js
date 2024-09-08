//  step #1

function calculateAverageSales(sales) {
   let totalSales = 0;
 
    for (let i = 0; i < sales.length; i++) {
     totalSales += sales[i];
    } 
 
    const averageSales = totalSales / sales.length;
 
     return averageSales;
 }
//  step #2

function determinePerformanceRating(avgsales){
    if (avgsales > 10000) {
        return "Excellent"
    }
    else if ((avgsales < 10000) && (avgsales > 7000)){
        return "Good"
    }
    else if ((avgsales < 7000) && (avgsales > 4000)){
        return "Satisfactory"
    }
    else if (avgsales < 4000){
        return "Needs Improvement"
    }
    else{
        return "Invalid"
    }
}
