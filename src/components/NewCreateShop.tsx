import React, { useContext, useEffect, useState } from "react";
import { VariableContext } from "../App";
import "./NewCreateShop.css";

export const NewCreateShop = () => {
  const [
    newCreateFlag,
    setNewCreateFlag,
    ,
    ,
    userData,
    setUserData,
    shop,
    setShop,
    shopTable,
  ] = useContext(VariableContext);

  const [input, setInput] = useState("");
  const [tem, setTem] = useState([
    { shop_name: "", corner_name: "野菜", directions: 1 },
    { shop_name: "", corner_name: "肉", directions: 1 },
    { shop_name: "", corner_name: "魚", directions: 1 },
    { shop_name: "", corner_name: "乳製品", directions: 1 },
  ]);

  const handleUpdateItem = (e: any, index: any) => {
    const { name, value } = e.target;
    const newLists = tem.map((row: any, itemIndex) => {
      if (itemIndex === index) {
        console.log(name, value);
        row[name] = value;
      }
      return row;
    });
    setTem(newLists);
  };
  //登録
  const handleSubmit = () => {
    setNewCreateFlag(false);
  };
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  //入力
  tem.map((row) => {
    row["shop_name"] = input;
    return row;
  });
  //ソート
  tem.sort(function (a: { directions: number }, b: { directions: number }) {
    if (a.directions > b.directions) return 1;
    if (b.directions > a.directions) return -1;
    return 0;
  });
  return (
    <form className="content">
      <ul className="shoppingColum">
        <li>お店</li>
        <li>売り場</li>
        <li>順番</li>
        <label htmlFor="登録するお店">登録するお店</label>
        <input
          name="shop_name"
          type="text"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          登録
        </button>
        <button onClick={() => setNewCreateFlag(false)}>戻る</button>
      </ul>
      <ul className="topic">
        {tem.map((row: any, index: number) => (
          <li key={index} className="formData">
            <input
              name="shop_name"
              type="text"
              value={`${row.shop_name}`}
              disabled
            />
            <input
              name="corner_name"
              value={`${row.corner_name}`}
              disabled
            ></input>
            <select
              name="directions"
              value={`${row.directions}`}
              onChange={(e) => handleUpdateItem(e, index)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </li>
        ))}
      </ul>
    </form>
  );
};
