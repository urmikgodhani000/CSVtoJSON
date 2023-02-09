const csvFilePath = "./output1.json";
const fs = require("fs");
const csv = require("csvtojson");
csv()
  .fromFile(csvFilePath)
  .then((json) => {
    console.log(json);

    fs.writeFileSync("output111.csv", JSON.stringify(json), "utf-8", (err) => {
      if (err) console.log(err);
    });
  });
