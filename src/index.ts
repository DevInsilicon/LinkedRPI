// Sample TypeScript file

function greet(name: string): string {
    return `Hello, ${name}! Welcome to your TypeScript environment.`;
}

// Display a message when the script runs
console.log(greet("Developer"));

// Example to demonstrate TypeScript features
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "TypeScript User",
    age: 25
};

console.log(`User info: ${user.name}, ${user.age} years old`);