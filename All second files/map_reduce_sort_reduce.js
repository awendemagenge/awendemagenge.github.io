
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]; 
  //forEach :-----companies.forEach((item)=>console.log(item))
  //filter:-------console.log(ages.filter(item=>item>=21)),         
        //:-------------console.log(companies.filter(item=>item.category==="Retail"))
        //:-------------console.log(companies.filter(item=>item.start<1990&&item.end>1979))
        //:-------------console.log(companies.filter(item=>(item.end-item.start)>=10))
  //map:---------- console.log(ages.map(item=>item*0))
      //:--------- console.log(companies.map(item=>item.name+" ["+item.start+" "+item.end+ "]"))
      //:-----------console.log(ages.map(item=>Math.sqrt(item)))
  //sort:---------------console.log(companies.sort((a,b)=>a.start-b.start))........the same as.......------------console.log(companies.sort((a,b)=>a.start>b.start? 1:-1))
  //                    console.log(ages.sort((a,b)=>a>b? 1:-1)).............................the same as...............................console.log(ages.sort((a,b)=>a-b))
  //reduce--------console.log(ages.reduce((accumulator,item)=>accumulator+item))
  
  //              console.log(companies.reduce((accumulator,item)=>accumulator+(item.end-item.start),0))
   