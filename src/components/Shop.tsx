import React, { useContext, useEffect } from "react";
import { VariableContext } from "../App";

export const ShopSort = () => {
  const [, , lists, setLists, userData, setUserData, shop, setShop] =
    useContext(VariableContext);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setShop(value);
  };

  return (
    <div>
      <label htmlFor="買うお店">買うお店：</label>
      <select name="shopList" id="shopList" onChange={(e) => handleChange(e)}>
        <option value="選択してください">選択してください</option>
        <option value="カネスエ">カネスエ</option>
        <option value="イオン">イオン</option>
      </select>
      <button>お店追加</button>
    </div>
  );
};
