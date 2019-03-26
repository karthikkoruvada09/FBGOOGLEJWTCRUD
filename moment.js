const moment=require('moment');
let time=moment().minute()

setInterval(() => {
    time++;
console.log(time)
},1000)