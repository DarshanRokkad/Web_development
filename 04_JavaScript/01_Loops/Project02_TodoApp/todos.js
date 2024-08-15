console.log("Welcome to TODO APP");

let todos = []

let option = prompt("Enter the operation you want to do : ");
while (option !== 'quit' && option !== 'q') {
    if (option === 'new') {
        let new_todo = prompt("Whoo.. what is the new todo to be added : ");
        todos.push(new_todo);
    }
    else if (option === 'delete') {
        let todo_delete = prompt("Enter the todo to be removed : ");
        let index = todos.indexOf(todo_delete);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        else {
            console.log(`${todo_delete} todo doesn't exhist.....`)
        }
    }
    else if (option === 'list') {
        console.log("xxxxxxx");
        console.log("TODO's are : ");
        for (todo of todos) {
            console.log(todo);
        }
        console.log("xxxxxxx");
    }
    else {
        console.log("Enter the valid option!.....");
    }
    option = prompt("Enter the new operation you want to perform : ");
}

console.log("Thanks for using my TODO APP");