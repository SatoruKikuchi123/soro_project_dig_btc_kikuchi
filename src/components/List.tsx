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
  const [
    ,
    ,
    lists,
    setLists,
    userData,
    setUserData,
    shop,
    setShop,
    shopTable,
    setShopTable,
    itemReCornerTable,
    setItemReCornerTable,
  ] = useContext(VariableContext);

  const handleRemoveItem = (uniquKey: any) => {
    const newLists = lists.filter(
      (list: { uniquKey: any }) => list.uniquKey !== uniquKey
    );
    setLists(newLists);
  };

  const handleCompletedItem = (uniquKey: any) => {
    const newLists = [...lists];
    const list = newLists.find((list) => list.uniquKey === uniquKey);
    list.isCompleted = !list.isCompleted;
    setLists(newLists);
  };

  const handleUpdateItem = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    uniquKey: any
  ) => {
    const { name, value } = e.target;
    const newLists = lists.map(
      (list: { [x: string]: string }, itemIndex: any) => {
        if (list.uniquKey === uniquKey) {
          console.log(name, value);
          list[name] = value;
        }
        return list;
      }
    );
    setLists(newLists);
  };

  //売り場付与
  const cornerAdd = () => {
    lists.map((list: any) => {
      for (const e of itemReCornerTable) {
        if (e["item_name"] === list["item"]) {
          list["corner_name"] = e["corner_name"];
        }
      }
      return list;
    });
    console.log("lists:", lists);
  };
  cornerAdd();

  //順番付与
  const directionAdd = () => {
    console.log(shop);
    lists.map((list: any) => {
      for (const e of shopTable) {
        if (
          e["shop_name"] === shop &&
          e["corner_name"] === list["corner_name"]
        ) {
          list["directions"] = e["directions"];
        }
        // if (e["corner_name"] === "選択してください") {
        //   list["directions"] = 1;
        // }
      }
      return list;
    });
    console.log("lists:", lists);
  };
  directionAdd();
  //ソート
  const sortedList = lists.sort(function (
    a: { directions: number },
    b: { directions: number }
  ) {
    if (a.directions > b.directions) return 1;
    if (b.directions > a.directions) return -1;
    return 0;
  });
  console.log("sortedList:", sortedList);

  //登録
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <form className="content" onSubmit={handleSubmit}>
      <ul className="shoppingColum">
        <li>買う物</li>
        <li>量</li>
        <li>売り場</li>
        <li>順番</li>
        <button>保存</button>
      </ul>
      <ul className="topic">
        {lists.map((list: any) => (
          <li key={list.uniquKey} className="formData">
            <input
              type="checkbox"
              checked={list.isCompleted}
              onChange={() => handleCompletedItem(list.uniquKey)}
            />
            <input
              name="item"
              type="text"
              disabled={list.isCompleted}
              value={`${list.item}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <input
              name="quantity"
              type="number"
              disabled={list.isCompleted}
              min={0}
              value={`${list.quantity}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <select
              name="quantity_unit"
              disabled={list.isCompleted}
              value={`${list.quantity_unit}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
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
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            >
              <option value="選択してください">選択してください</option>
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
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <button onClick={(e) => handleRemoveItem(list.uniquKey)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default List;
