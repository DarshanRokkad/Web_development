// hard to remember syntax 
// so we have "fetch"

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("It's loaded!..."); 
    const data = JSON.parse(this.responseText);           // converting string to json format
    console.log(data);
    console.log(data.name, data['gender']);               // accessing value present in json through keys
}

req.onerror = function () {
    console.log("Error occured..");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();