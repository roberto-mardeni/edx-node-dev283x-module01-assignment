const fs = require('fs');
const path = require('path');
const csvtojsonV2 = require("csvtojson");
const csvFilePath = 'customer-data.csv';

csvtojsonV2()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    const jsonFilePath = path.join(__dirname, 'customer-data.json');
    console.log(`Writing json file ${jsonFilePath}`);
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj));
    console.log(`Completed writing ${jsonObj.length}`);
  });