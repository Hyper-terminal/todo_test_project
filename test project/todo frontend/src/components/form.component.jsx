import { useState } from "react";

const formInitialState = {
  name: "",
  description: "",
};

const Form = ({ onSetData }) => {
  const [formData, setFormData] = useState(formInitialState);

  const inputHandler = (event) =>
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

  const submitHandler = async () => {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setFormData(formInitialState);
    onSetData(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={inputHandler}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        onChange={inputHandler}
        value={formData.description}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
