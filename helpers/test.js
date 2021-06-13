import dbConn from "./dBConn.js";

const connectionL = new dbConn()

const newVal = connectionL.dbConnect().then(result => console.log("result" + result)).catch(err => console.log("error" + err))
console.log("newValue" + newVal)




