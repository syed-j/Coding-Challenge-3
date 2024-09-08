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
// Step #3 
return [topPerformer,bottomPerformer]


function findTopAndBottomPerformers_withReduce(persons){
    let topPerformer = persons.reduce((top_performer,other_performer) => {
        if (other_performer.total_sales > top_performer.total_sales){
            top_performer = other_performer
        }
        return top_performer 
    }, persons[0] )

    let bottomPerformer = persons.reduce((bottom_performer,other_performer)=>{
        if (other_performer.total_sales < bottom_performer.total_sales){
            bottom_performer = other_performer
        }
        return bottom_performer
    },persons[0])

    return [topPerformer,bottomPerformer];
}
