import React, { useContext, useEffect, useState } from "react";
import { VariableContext } from "../App";
import { v4 as uuidv4 } from "uuid";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://sataro-zamas.onrender.com"
    : "http://localhost:3333";

export const Add = () => {
  const [inputNewItem, setInputNewItem] = useState({
    item: "",
    quantity: 1,
    quantity_unit: "個/本/玉",
  });
  const [, , lists, setLists, , , shop, setShop] = useContext(VariableContext);
  const [submitFlag, setSubmitFlag] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputNewItem({ ...inputNewItem, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    //ページのリロード処理を無効化
    e.preventDefault();
    if (!inputNewItem) return;
    setLists((lists: any) => [
      ...lists,
      {
        uniquKey: uuidv4(),
        item: inputNewItem.item,
        isCompleted: false,
        corner_name: "選択してください",
        directions: 1,
        quantity: inputNewItem.quantity,
        quantity_unit: inputNewItem["quantity_unit"],
      },
    ]);
    setInputNewItem({
      item: "",
      quantity: 1,
      quantity_unit: "個/本/玉",
    });
  };
  //登録
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(fetchURL + "/lists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lists.slice(-1)[0]),
      }).then((e) => e.json());
    };
    if (submitFlag) {
      getData();
      setSubmitFlag(false);
    }
  }, [lists]);

  return (
    <>
      <form onSubmit={handleSubmit} id="add">
        <input
          type="text"
          name="item"
          value={inputNewItem["item"]}
          placeholder="新しく買う物"
          onChange={(e) => handleChange(e)}
          required
        />
        <label>量：</label>
        <input
          name="quantity"
          type="number"
          min={0}
          value={inputNewItem["quantity"]}
          placeholder="量"
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="単位">単位：</label>
        <select
          form="add"
          name="quantity_unit"
          onChange={(e) => handleChange(e)}
        >
          <option value="個/本/玉">個/本/玉</option>
          <option value="パック/袋/缶">パック/袋/缶</option>
          <option value="L">L</option>
          <option value="Kg">Kg</option>
        </select>
        <button type="submit" onClick={() => setSubmitFlag(true)}>
          追加!
        </button>
      </form>
    </>
  );
};
