const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const msg = process.argv.slice(2).map(String).join(" ") || "Alle mennesker er fodt frie og";

const langCode = franc(msg);

if (langCode === 'und') {           // undetermined 
    console.log("Language is undetermined!...".red);
}
else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is : ${language.name}`.green);
}