export class DB {
  #todos: string[];

  constructor() {
    this.#todos = ["Learn Next.js", "Build a project", "Deploy to production"];
  }

  // Function to get all todos
  async getTodos(): Promise<string[]> {
    // Simulating asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 500));
    return this.#todos;
  }

  // Function to add a new todo
  async addTodo(newTodo: string): Promise<string> {
    // Simulating asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.#todos.push(newTodo);
    return newTodo;
  }

  // Function to delete a todo
  async deleteTodo(todoToDelete: string): Promise<string> {
    // Simulating asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = this.#todos.indexOf(todoToDelete);
    if (index !== -1) {
      this.#todos.splice(index, 1);
    }
    return todoToDelete;
  }
}
