// import React, { useContext } from "react";
// import "./List.css";
// import { VariableContext } from "../App";
// const fetchURL =
//   process.env.NODE_ENV === "production"
//     ? "https://sataro-zamas.onrender.com"
//     : "http://localhost:3333";

import React, { useState, useContext } from "react";
import "./List.css";
import { VariableContext } from "../App";
const List = () => {
  const [, , lists, setLists, userData, setUserData] =
    useContext(VariableContext);

  const handleRemoveItem = (index: any) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const handleCompletedItem = (index: any) => {
    const newLists = lists.map(
      (list: { isCompleted: boolean }, itemIndex: any) => {
        if (itemIndex === index) {
          list.isCompleted = !list.isCompleted;
        }
        return list;
      }
    );
    setLists(newLists);
  };

  const handleUpdateItem = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: any
  ) => {
    const { name, value } = e.target;
    const newLists = lists.map(
      (list: { [x: string]: string }, itemIndex: any) => {
        if (itemIndex === index) {
          console.log(name, value);
          list[name] = value;
        }
        return list;
      }
    );
    setLists(newLists);
  };

  return (
    <form className="content">
      <ul className="shoppingColum">
        <li>買う物</li>
        <li>量</li>
        <li>売り場</li>
      </ul>
      <ul className="topic">
        {lists.map((list: any, index: number) => (
          <li key={index} className="formData">
            <input
              type="checkbox"
              checked={list.isCompleted}
              onChange={() => handleCompletedItem(index)}
            />
            <input
              name="item"
              type="text"
              disabled={list.isCompleted}
              value={`${list.item}`}
              onChange={(e) => handleUpdateItem(e, index)}
            />
            <input
              name="quantity"
              type="number"
              disabled={list.isCompleted}
              min={0}
              value={`${list.quantity}`}
              onChange={(e) => handleUpdateItem(e, index)}
            />
            <select
              name="quantity_unit"
              onChange={(e) => {
                const food = [...lists];
                food[index]["quantity_unit"] = e.target.value;
                setLists(food);
              }}
            >
              <option value="個/本/玉">個/本/玉</option>
              <option value="パック/袋/缶">パック/袋/缶</option>
              <option value="L">L</option>
              <option value="Kg">Kg</option>
            </select>
            <input
              name="login_id"
              type="number"
              onChange={(e) => {
                const food = [...lists];
                food[index]["login_id"] = e.target.value;
                setLists(food);
              }}
            />
            <button onClick={() => handleRemoveItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default List;
