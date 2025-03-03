function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", (error as Error).message);
        return null;
    }
}

// ✅ Example Usage
console.log(parseJson('{"name": "Abhirup", "age": 22}'));
console.log(parseJson('Invalid JSON'));
