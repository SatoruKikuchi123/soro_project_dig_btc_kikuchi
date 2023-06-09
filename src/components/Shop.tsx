import React, { useContext, useEffect } from "react";
import { VariableContext } from "../App";

export const ShopSort = () => {
  const [
    ,
    setNewCreateFlag,
    lists,
    setLists,
    userData,
    setUserData,
    shop,
    setShop,
    shopTable,
    setShopTable,
    items,
    setItems,
  ] = useContext(VariableContext);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setShop(value);
  };
  const shopName = Array.from(
    new Set(shopTable.map((e: { shop_name: any }) => e.shop_name))
  );

  return (
    <div>
      <label htmlFor="買うお店">買うお店：</label>
      <select name="shopList" id="shopList" onChange={(e) => handleChange(e)}>
        <option value="選択してください">選択してください</option>
        {shopName.map((e, index) => (
          <option key={index} value={`${e}`}>{`${e}`}</option>
        ))}
      </select>
      <button onClick={() => setNewCreateFlag(true)}>お店追加</button>
    </div>
  );
};
