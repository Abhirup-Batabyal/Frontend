
function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    Object.defineProperty(target, propertyKey, {
        get: () => value,
        set: (newEmail: string) => {
            if (!emailRegex.test(newEmail)) {
                throw new Error(`Invalid email format: ${newEmail}`);
            }
            value = newEmail;
        },
        enumerable: true,
        configurable: true
    });
}

class user { 
    @ValidateEmail
    email: string = ""; 

    constructor(email: string) {
        this.email = email; 
    }
}

// ✅ Example Usage
try {
    const validUser = new user("alice@example.com");
    console.log("Valid Email:", validUser.email); 

    const invalidUser = new user("invalid-email"); 
} catch (error) {
    console.error((error as Error).message); 
}
