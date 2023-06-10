import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import { Add } from "./components/Add";
import { ShopSort } from "./components/ShopSort";
import { NewCreateShop } from "./components/NewCreateShop";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://kjk.onrender.com"
    : "http://localhost:3333";

type props = {
  shop: {
    shop_name: string;
    corner_name: string;
    directions: number;
    added_user_id: number;
  }[];
  props: [
    newCreateFlag: boolean,
    setNewCreateFlag: Function,
    lists: any,
    setLists: Function,
    shop: any,
    setShop: Function,
    shopTable: any,
    setShopTable: Function,
    items: any,
    setItems: Function
  ];
};
export const VariableContext = React.createContext<props["props"]>([
  false,
  () => {},
  [],
  () => {},
  [],
  () => {},
  [],
  () => {},
  [],
  () => {},
]);

export default function App() {
  const [newCreateFlag, setNewCreateFlag] = useState(false);
  const [lists, setLists] = useState([]);
  const [shop, setShop] = useState([]);
  const [shopTable, setShopTable] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const ListsTable = await fetch(fetchURL + "/lists").then((e) => e.json());
      setLists(ListsTable);
    };
    const getShop = async () => {
      const shopTb = await fetch(fetchURL + "/shops").then((e) => e.json());
      setShopTable(shopTb);
    };
    const getItems = async () => {
      const itemsTable = await fetch(fetchURL + "/items").then((e) => e.json());
      setItems(itemsTable);
    };
    getLists();
    getShop();
    getItems();
  }, []);

  return (
    <>
      <VariableContext.Provider
        value={[
          newCreateFlag,
          setNewCreateFlag,
          lists,
          setLists,
          shop,
          setShop,
          shopTable,
          setShopTable,
          items,
          setItems,
        ]}
      >
        {!newCreateFlag ? (
          <>
            <Add />
            <ShopSort />
            <List />
          </>
        ) : (
          <NewCreateShop />
        )}
      </VariableContext.Provider>
    </>
  );
}
