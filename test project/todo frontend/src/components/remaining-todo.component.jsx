export default function RemainingTodo({ todo }) {
  const deleteHandler = () => {};
  const doneHandler = () => {};

  return (
    <>
      {todo?.length ? (
        <ul>
          {todo.map((item) => (
            <li>
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
              <button onClick={doneHandler}>Done</button>
              <button onClick={deleteHandler}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No remaining todo's</div>
      )}
    </>
  );
}
