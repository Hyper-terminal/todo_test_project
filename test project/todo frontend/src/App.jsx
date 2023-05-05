import { useState } from "react";
import Form from "./components/form.component";
import RemainingTodo from "./components/remaining-todo.component";

export default function App() {
  const [data, setData] = useState("data");

  const dataHandler = (todo) => setData((prev) => [...prev, todo]);

  return (
    <div>
      <Form onSetData={dataHandler} />
      <RemainingTodo todo={data} />
    </div>
  );
}
