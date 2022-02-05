import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

function TodoList() {
  const [task, setTask] = useState("");

  const [listItem, setListItem] = useState([]);

  const itemAdd = (e) => {
    setTask(e.target.value);
  };

  const itemList = () => {
    setListItem((oldItems) => {
      return [...oldItems, task];
    });
    setTask("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setListItem((oldItems) => {
      return (oldItems.filter = (arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="list">
        <br />
        <h2>To Do List</h2>
        <br />
        <input type="text" placeholder="Add a item" onChange={itemAdd} />
        <button type="button" className="btn btn-primary" onClick={itemList}>
          Add Item
        </button>

        <ol>
          {listItem.map((s, index) => {
            return (
              <ListedItems
                key={index}
                id={index}
                text={s}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function ListedItems(props) {
  return (
    <div className="todo-style">
      <li> {props.text} </li>
      <i
        id="icon"
        class="fas fa-trash-alt fa-lg"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
    </div>
  );
}
