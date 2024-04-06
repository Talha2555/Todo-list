import { log } from "console";
import inquirer from "inquirer";

let todos: string[] = ['haider','talha','muneeb'];

async function makeTodo(todos: string[]) {
    do{let todoAns = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["Add", "Update", "View", "Delete"],
      });
      if (todoAns.select == "Add") {
        let addTodo = await inquirer.prompt({
          type: "input",
          message: "Add item in the list",
          name: "todo",
        });
        todos.push(addTodo.todo);
        // todos.forEach(todo => console.log(todo)
        // )
        console.log(todos);
      }
    
      if (todoAns.select == "Update") {
        let updateTodo = await inquirer.prompt({
          name: "todo",
          message: "Update items in the list",
          type: "list",
          choices: todos.map((item) => item),
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add item in the list",
            name: "todo",
          });
          let newTodo =todos.filter(val => val !== updateTodo.todo)
          todos =[...newTodo,addTodo.todo]
          console.log(todos);
          
      }
      if(todoAns.select =='View'){
        console.log("*** TO DO LIST ***");
        console.log(todos);
        console.log("***")
        
        
        
      }
      if(todoAns.select =='Delete'){
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            message: "Update items in the list",
            type: "list",
            choices: todos.map((item) => item),
          }); 
          let newTodo =todos.filter(val => val !== deleteTodo.todo)
          todos =[...newTodo]
          console.log(todos);
        }
    
    
    } while(true)
    }
        makeTodo(todos)
//   let todoAns = await inquirer.prompt({
//     name: "select",
//     type: "list",
//     message: "Select an operation",
//     choices: ["Add", "Update", "View", "Delete"],
//   });
//   if (todoAns.select == "Add") {
//     let addTodo = await inquirer.prompt({
//       type: "input",
//       message: "Add item in the list",
//       name: "todo",
//     });
//     todos.push(addTodo.todo);
//     console.log(todos);
//   }

//   if (todoAns.select == "Update") {
//     let updateTodo = await inquirer.prompt({
//       name: "todo",
//       message: "Update items in the list",
//       type: "list",
//       choices: todos.map((item) => item),
//     });
//     let addTodo = await inquirer.prompt({
//         type: "input",
//         message: "Add item in the list",
//         name: "todo",
//       });
//       let newTodo =todos.filter(val => val !== updateTodo.todo)
//       todos =[...newTodo,addTodo.todo]
//       console.log(todos);
      
//   }
//   if(todoAns.select =='View'){
//     console.log("*** TO DO LIST ***");
//     console.log(todos);
//     console.log("***")
    
    
    
//   }
//   if(todoAns.select =='Delete'){
//     let deleteTodo = await inquirer.prompt({
//         name: "todo",
//         message: "Update items in the list",
//         type: "list",
//         choices: todos.map((item) => item),
//       }); 
//       let newTodo =todos.filter(val => val !== deleteTodo.todo)
//       todos =[...newTodo]
//       console.log(todos);
//     }

// }
// makeTodo(todos);
