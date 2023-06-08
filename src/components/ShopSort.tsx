import React, { useContext, useEffect } from "react";
import { VariableContext } from "../App";

export const ShopSort = () => {
  const [, , lists, setLists, userData, setUserData, shop, setShop] =
    useContext(VariableContext);
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
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setShop(value);
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
    }, []);
  };

  return (
    <div>
      <label htmlFor="買うお店">買うお店：</label>
      <select name="shopList" id="shopList" onChange={(e) => handleChange(e)}>
        <option value="選択してください">選択してください</option>
        <option value="カネスエ">カネスエ</option>
        <option value="イオン">イオン</option>
      </select>
    </div>
  );
};
