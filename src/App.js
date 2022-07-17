import { useReducer } from 'react';
import './App.css';
import TodoForm from './context/TodoForm';
import TodoList from './context/TodoList';

function reducer(state, action) {
  if(action.type === 'add') {
    return [
      ...state,
      {
        id: state.length + 1,
        name: action.payload.name
      }
    ];
  } else if(action.type === 'remove') {
    return state.filter((t) => t.id !== action.payload.id);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'tester',
    },
    {
      id: 3,
      name: 'test1',
    },
    {
      id: 4,
      name: 'test2',
    }
  ])
  return (
    <div className="App wrapper">
      <TodoForm addItem={(newitem) => {
        dispatch({
          type: "add",
          payload: {
            name: newitem
          }
        });
      }} />
      <TodoList todos={todos} 
      RemoveItem={(todo) => {
        dispatch({
          type: "remove",
          payload: {
            id: todo.id
          }
        })
      }}
      />
    </div>
  );
}

export default App;
