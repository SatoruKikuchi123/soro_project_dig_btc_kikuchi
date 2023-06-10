import React, { useContext, useState } from "react";
import { VariableContext } from "../App";
import "./NewCreateShop.css";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://kjk.onrender.com"
    : "http://localhost:3333";

export const NewCreateShop = () => {
  const [, setNewCreateFlag, , , , , , setShopTable] =
    useContext(VariableContext);

  const [input, setInput] = useState("");
  const [tem, setTem] = useState([
    { shop_name: "", corner_name: "野菜", directions: 1 },
    { shop_name: "", corner_name: "肉", directions: 2 },
    { shop_name: "", corner_name: "魚", directions: 3 },
    { shop_name: "", corner_name: "乳製品", directions: 4 },
    { shop_name: "", corner_name: "冷凍", directions: 5 },
    { shop_name: "", corner_name: "パン", directions: 6 },
    { shop_name: "", corner_name: "惣菜", directions: 7 },
    { shop_name: "", corner_name: "お菓子", directions: 8 },
    { shop_name: "", corner_name: "文房具", directions: 9 },
    { shop_name: "", corner_name: "その他", directions: 10 },
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
  //登録
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const getData = async () => {
      const response = await fetch(fetchURL + "/shops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tem),
      }).then((e) => e.json());
      setShopTable(response);
    };
    getData();
    setNewCreateFlag(false);
  };
  return (
    <>
      <button onClick={() => setNewCreateFlag(false)}>戻る</button>
      <form className="content" onSubmit={handleSubmit}>
        <ul className="shoppingColum">
          <li>お店</li>
          <li>売り場</li>
          <li>順番</li>
          <label id="label" htmlFor="登録するお店">
            登録するお店
          </label>
          <input
            id="input1"
            name="shop_name"
            type="text"
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <button>登録</button>
        </ul>
        <ul className="topic">
          {tem.map((row: any, index: number) => (
            <li key={index} className="formData">
              <input
                id="input2"
                name="shop_name"
                type="text"
                value={`${row.shop_name}`}
                disabled
              />
              <input
                id="input3"
                name="corner_name"
                value={`${row.corner_name}`}
                disabled
              ></input>
              <select
                id="input4"
                name="directions"
                value={`${row.directions}`}
                onChange={(e) => handleUpdateItem(e, index)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};
