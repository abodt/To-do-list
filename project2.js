function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  
  const ToDoApp = {
    tasks: [],
  
    addTask(description, dueDate, priority) {
      const newTask = new Task(description, dueDate, priority);
      this.tasks.push(newTask);
      console.log("Task added successfully!");
    },
  
    listAllTasks() {
      console.log("All tasks:");
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? "X" : " "}] ${task.description}`);
      });
    },
  
    listCompletedTasks() {
      console.log("Completed tasks:");
      const completedTasks = this.tasks.filter(task => task.completed);
      completedTasks.forEach((task, index) => {
        console.log(`${index + 1}. [X] ${task.description}`);
      });
    },
  
    markTaskAsCompleted(taskIndex) {
      if (taskIndex >= 0 && taskIndex < this.tasks.length) {
        const task = this.tasks[taskIndex];
        task.completed = true;
        console.log("Task marked as completed!");
      } else {
        console.log("Invalid task index.");
      }
    },
  
    deleteTask(taskIndex) {
      if (taskIndex >= 0 && taskIndex < this.tasks.length) {
        this.tasks.splice(taskIndex, 1);
        console.log("Task deleted successfully!");
      } else {
        console.log("Invalid task index.");
      }
    },
  
    sortTasksByDueDate() {
      this.tasks.sort((a, b) => a.dueDate - b.dueDate);
      console.log("Tasks sorted by due date!");
    },
  
    sortTasksByPriority() {
      this.tasks.sort((a, b) => a.priority - b.priority);
      console.log("Tasks sorted by priority!");
    },
  
    clearAllTasks() {
      this.tasks = [];
      console.log("All tasks cleared!");
    },
  
    handleUserInput(choice) {
      switch (choice) {
        case '1':
          const description = readlineSync.question("Enter task description: ");
          const dueDate = new Date(readlineSync.question("Enter due date (YYYY-MM-DD): "));
          const priority = parseInt(readlineSync.question("Enter priority (1-5): "));
          this.addTask(description, dueDate, priority);
          break;
  
        case '2':
          this.listAllTasks();
          break;
  
        case '3':
          this.listCompletedTasks();
          break;
  
        case '4':
          const taskIndex = parseInt(readlineSync.question("Enter task index: ")) - 1;
          this.markTaskAsCompleted(taskIndex);
          break;
  
        case '5':
          const deleteIndex = parseInt(readlineSync.question("Enter task index: ")) - 1;
          this.deleteTask(deleteIndex);
          break;
  
        case '6':
          this.sortTasksByDueDate();
          break;
  
        case '7':
          this.sortTasksByPriority();
          break;
  
        case '8':
          this.clearAllTasks();
          break;
  
        default:
          console.log("Invalid choice.");
          break;
      }
    },
  
    startApp() {
      console.log("***************************");
      console.log("Welcome to JS TODO-APP");
      console.log("***************************");
      console.log("Select an action:");
      console.log("1) Add a new task");
      console.log("2) List all tasks");
      console.log("3) List completed tasks");
      console.log("4) Mark a task as done");
      console.log("5) Delete a task");
      console.log("6) Sort tasks by due date");
      console.log("7) Sort tasks by priority");
      console.log("8) Clear all tasks");
      console.log("***************************");
  
      const choice = readlineSync.question("What's your choice? ");
      this.handleUserInput(choice);
    },
  };
  
  const readlineSync = require('readline-sync');

  ToDoApp.startApp();
  
