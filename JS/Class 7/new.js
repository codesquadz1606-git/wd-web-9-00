const load = require("lodash");
let arr = [10, 20, 30, 40, 50, [100, 200, 300]];
let copyarr = load.cloneDeep(arr)

copyarr[3] = 400
copyarr[5][1] = 2000

console.log("Copy Array : ", copyarr)
console.log("Orignal Array : ", arr)