const Todo = ({ todo, onCompleate, onRemove, onEdit }) => {
  return (
    <div className="todo">
      <div
        onClick={onCompleate}
        className={todo.isComplated ? "completed" : ""}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit} className="btn">
          Edit
        </button>
        <button onClick={onRemove} className="btn remove">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;