import {useState} from "react";
function TodoForm({addItem}) {
    const [val, setVal] = useState("");
    return (
        <form className="task-input" onSubmit={(e) => {
          e.preventDefault();
          if(val === "") alert('Error: Type Name!');
          else {
          addItem(val);
          setVal(""); }
        }}>
          <ion-icon name="create-outline"></ion-icon>
          <input type="text" placeholder="Add a New Task + Enter" value={val} onChange={(e) => {
            setVal(e.target.value);
          }} />
        </form>
    );
}
export default TodoForm;