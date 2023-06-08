// import React, { useContext } from "react";
// import "./List.css";
// import { VariableContext } from "../App";
// const fetchURL =
//   process.env.NODE_ENV === "production"
//     ? "https://sataro-zamas.onrender.com"
//     : "http://localhost:3333";

import React, { useState, useContext, useEffect } from "react";
import "./List.css";
import { VariableContext } from "../App";
const List = () => {
  const [, , lists, setLists, userData, setUserData, shop, setShop] =
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
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
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
  const shopTable = [
    { shop_name: "カネスエ", corner_name: "野菜", directions: 1 },
    { shop_name: "カネスエ", corner_name: "肉", directions: 2 },
    { shop_name: "カネスエ", corner_name: "魚", directions: 3 },
    { shop_name: "カネスエ", corner_name: "乳製品", directions: 4 },
    { shop_name: "イオン", corner_name: "野菜", directions: 2 },
    { shop_name: "イオン", corner_name: "肉", directions: 1 },
    { shop_name: "イオン", corner_name: "魚", directions: 4 },
    { shop_name: "イオン", corner_name: "乳製品", directions: 3 },
  ];
  //順番付与
  useEffect(() => {
    const directionAdd = () => {
      console.log(shop);
      const newLists = lists.map((list: any) => {
        for (const e of shopTable) {
          if (
            e["shop_name"] === shop &&
            e["corner_name"] === list["corner_name"]
          ) {
            list["directions"] = e["directions"];
          }
        }
        return list;
      });
      console.log("newLists:", newLists);
      setLists(newLists);
    };
    directionAdd();
  }, [setShop]);

  //ソート
  const sortedList = lists.sort(function (
    a: { directions: number },
    b: { directions: number }
  ) {
    if (a.directions > b.directions) return 1;
    if (b.directions > a.directions) return -1;
    return 0;
  });
  // console.log("sortedList:", sortedList);

  return (
    <form className="content">
      <ul className="shoppingColum">
        <li>買う物</li>
        <li>量</li>
        <li>売り場</li>
        <li>順番</li>
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
              disabled={list.isCompleted}
              value={`${list.quantity_unit}`}
              onChange={(e) => handleUpdateItem(e, index)}
            >
              <option value="個/本/玉">個/本/玉</option>
              <option value="パック/袋/缶">パック/袋/缶</option>
              <option value="L">L</option>
              <option value="Kg">Kg</option>
            </select>
            <select
              name="corner_name"
              disabled={list.isCompleted}
              value={`${list.corner_name}`}
              onChange={(e) => handleUpdateItem(e, index)}
            >
              <option value="野菜">野菜</option>
              <option value="肉">肉</option>
              <option value="魚">魚</option>
              <option value="乳製品">乳製品</option>
            </select>
            <input
              name="directions"
              type="number"
              disabled={list.isCompleted}
              min={0}
              value={`${list.directions}`}
              onChange={(e) => handleUpdateItem(e, index)}
            />
            <button onClick={() => handleRemoveItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default List;
