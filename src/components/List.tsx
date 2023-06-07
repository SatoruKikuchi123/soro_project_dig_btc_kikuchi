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
  const initialArray = [...Array(1)];
  const [shopping, setShopping] = useState(initialArray);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, , list, setList, userData, setUserData] =
    useContext(VariableContext);

  return (
    <form className="content">
      <ul className="shoppingColum">
        <li>買う物</li>
        <li>数量</li>
        <li>売り場</li>
      </ul>
      <ul className="topic">
        {shopping.map((e, ind) => (
          <li key={ind} className="formData">
            <input
              name="item"
              type="text"
              onChange={(e) => {
                const food = [...list];
                food[ind]["item"] = e.target.value;
                setList(food);
              }}
              required
            />
            <input
              name="quantity"
              type="number"
              min={0}
              onChange={(e) => {
                const food = [...list];
                food[ind]["quantity"] = e.target.value;
                setList(food);
              }}
              required
            />
            <select
              name="quantity_unit"
              onChange={(e) => {
                const food = [...list];
                food[ind]["quantity_unit"] = e.target.value;
                setList(food);
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
                const food = [...list];
                food[ind]["login_id"] = e.target.value;
                setList(food);
              }}
            />
          </li>
        ))}
      </ul>
      <div
        className="addRow"
        onClick={() => {
          setShopping([...shopping, ""]);
          // ダミー
          const data = document.querySelectorAll(".formData");
          console.log(data[0]);
        }}
      >
        ➕
      </div>
    </form>
  );
};

export default List;
