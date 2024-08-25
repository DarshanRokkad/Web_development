// Q. Create the folder and basic files required for project inside it 

const fs = require('fs')
const folderName = process.argv[2] || "project_folder"
try {
    console.log(process.argv)
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
}
catch (e) {
    console.log("Error Occured");
    console.log(e);
}


// to execute open cmd in currect folder -> "node FileName.js"