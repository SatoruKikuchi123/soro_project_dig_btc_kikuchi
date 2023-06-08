import React, { useContext, useState } from "react";
import { VariableContext } from "../App";

export const Add = () => {
  const [inputNewItem, setInputNewItem] = useState({ item: "", quantity: 1 });
  const [, , , setLists, userData, setUserData] = useContext(VariableContext);

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
        // quantity_unit: inputNewItem["quantity_unit"],
      },
    ]);
    setInputNewItem({ item: "", quantity: 1 });
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
        <input
          name="quantity"
          type="number"
          min={0}
          value={inputNewItem["quantity"]}
          placeholder="量"
          onChange={(e) => handleChange(e)}
          required
        />
        <select
          form="add"
          name="quantity_unit"
          //   value={inputNewItem["quantity_unit"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="個/本/玉">個/本/玉</option>
          <option value="パック/袋/缶">パック/袋/缶</option>
          <option value="L">L</option>
          <option value="Kg">Kg</option>
        </select>
        <button type="submit">追加!</button>
      </form>
    </>
  );
};
