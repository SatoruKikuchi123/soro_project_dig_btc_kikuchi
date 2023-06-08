import React, { useContext, useState } from "react";
import { VariableContext } from "../App";

export const Add = () => {
  const [inputNewItem, setInputNewItem] = useState({
    item: "",
    quantity: 1,
    quantity_unit: "個/本/玉",
    corner_name: "野菜",
  });
  const [, , , setLists, , , shop, setShop] = useContext(VariableContext);

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
        item: inputNewItem.item,
        isCompleted: false,
        quantity: inputNewItem.quantity,
        quantity_unit: inputNewItem["quantity_unit"],
        corner_name: inputNewItem["corner_name"],
        // directions: inputNewItem.directions,
      },
    ]);
    setInputNewItem({
      item: "",
      quantity: 1,
      quantity_unit: "個/本/玉",
      corner_name: "野菜",
    });
  };

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

        <label htmlFor="売り場">売り場：</label>
        <select
          form="add"
          name="corner_name"
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="野菜">野菜</option>
          <option value="肉">肉</option>
          <option value="魚">魚</option>
          <option value="乳製品">乳製品</option>
        </select>
        {/* <label htmlFor="順番">順番</label>
        <input
          name="directions"
          type="number"
          min={0}
          value={inputNewItem["directions"]}
          placeholder="順番"
        /> */}
        <button type="submit">追加!</button>
      </form>
    </>
  );
};
