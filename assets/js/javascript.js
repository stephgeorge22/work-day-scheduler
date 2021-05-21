var nowDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(nowDate);


// each time block is color coded to indicate if time if past(gray), present(red), and future(green)

// 1. assign time to container 
// 2. use moment to get current time 
var nowTime = moment().format('HH');
console.log(nowTime);

// 3. use four loop to loop through time and assign colors based on hour 

//     // if hour < present hour then gray 
//     // if hour = present hour then red
//     // if hour > present then green 
