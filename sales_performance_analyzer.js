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

//Step #4

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] }
  ];
  
function generatePerformanceReport(salesdata){
    for (let i=0; i < salesdata.length; i++){
        salesdata[i].avg  = calculateAverageSales(salesdata[i].sales)
        salesdata[i].performaceRating = determinePerformanceRating(salesdata[i].avg)
        salesdata[i].total_sales =  salesdata[i].sales.reduce((sum,currentValue) => sum+currentValue,0)
    };
    let [topPerformer, bottomPerformer] = findTopAndBottomPerformers_withReduce(salesdata);

    console.log(salesdata)
    console.log(topPerformer)
    console.log(bottomPerformer)
    
}

// console.log(generatePerformanceReport(salesData))
generatePerformanceReport(salesData)