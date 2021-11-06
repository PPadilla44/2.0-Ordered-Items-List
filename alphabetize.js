import  List  from "./v2_list.js";
import fs from "fs";


const newList = List
.map(item => item = {"name": item.name, "color": item.color})
.sort(function(a, b){
    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;
})


const jsonList = JSON.stringify(newList)

fs.writeFile("./alphabet.json", jsonList, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 