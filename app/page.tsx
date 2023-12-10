import { DB } from "./db";

export default async function Home() {
  let data = await new DB().getTodos();

  console.log(data);
  return (
    <main
      className="flex min-h-screen flex-col 
      items-center justify-between p-24"
    >
      <h1
        className=" font-extrabold text-2xl
        border-b-4 border-purple-500 pb-2 px-5"
      >
        Todo List
      </h1>
      <ul>
        {data.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between 
            items-center font-extrabold"
          >
            <p>{todo}</p>
            <button className=" ml-4 text-purple-700 hover:text-purple-300">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button>Add Todo</button>
    </main>
  );
}
