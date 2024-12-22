let groceryStack = [];

function peek() {
    if (groceryStack.length === 0) {
        alert("The stack is empty.");
    } else {
        alert("Top item in the stack: " + groceryStack[groceryStack.length - 1]);
    }
}

function push() {
    let item = prompt("Enter a grocery item to add:");
    if (item) {
        groceryStack.push(item);
        alert("Item added: " + item + "\nUpdated Stack: " + groceryStack.join(", "));
    } else {
        alert("No item entered. Please try again.");
    }
}

function pop() {
    if (groceryStack.length === 0) {
        alert("The stack is empty. No item to remove.");
    } else {
        const removedItem = groceryStack.pop();
        alert("Item removed: " + removedItem + "\nUpdated Stack: " + groceryStack.join(", "));
    }
}

function main() {
    groceryStack = []; 
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter grocery item: ");
        if (item) {
            groceryStack.push(item);
            alert("Item added: " + item);
        } else {
            alert("No item entered. Please try again.");
            i--; 
        }
    }
    alert("Initial Stack: " + groceryStack.join(", "));
}