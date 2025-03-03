"use strict";
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}
// ✅ Example Usage
console.log(parseJson('{"name": "Abhirup", "age": 22}'));
console.log(parseJson('Invalid JSON'));
