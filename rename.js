const fs = require("fs")
const currPath = "./build"
const newPath = "./docs"

  fs.rm(newPath, { recursive: true }, (err) => {
    if (err) {
      console.error("no files found for name docs");
      return;
    }
    console.log(`${newPath} is deleted!`);

        fs.rename(currPath, newPath, function(err) {
          if (err) {
            console.log("no files found for name build")
          } else {
            console.log("Successfully renamed the directory.")
          }
        })
        
  });



  

    
