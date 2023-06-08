import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Login from "./components/Login";
import { Add } from "./components/Add";
import { ShopSort } from "./components/Shop";
import { NewCreateShop } from "./components/NewCreateShop";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://sataro-zamas.onrender.com"
    : "http://localhost:3333";

type props = {
  // lists: {
  //   id: number;
  //   item: string;
  //   quantity: string;
  //   quantity_unit: string;
  //   login_id: string;
  // }[];
  userData: {
    user_id: number;
    first_name: string;
    last_name: string;
  }[];
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
    userData: props["userData"],
    setUserData: Function,
    shop: any,
    setShop: Function,
    shopTable: any
    // setShopTable: Function
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
  // () => {},
]);

export default function App() {
  const [newCreateFlag, setNewCreateFlag] = useState(false);
  const [lists, setLists] = useState([]);
  const [userData, setUserData] = useState([]);
  const [shop, setShop] = useState("");
  const [shopTable, setShopTable] = useState([
    { shop_name: "カネスエ", corner_name: "野菜", directions: 1 },
    { shop_name: "カネスエ", corner_name: "肉", directions: 2 },
    { shop_name: "カネスエ", corner_name: "魚", directions: 3 },
    { shop_name: "カネスエ", corner_name: "乳製品", directions: 4 },
    { shop_name: "イオン", corner_name: "野菜", directions: 2 },
    { shop_name: "イオン", corner_name: "肉", directions: 1 },
    { shop_name: "イオン", corner_name: "魚", directions: 4 },
    { shop_name: "イオン", corner_name: "乳製品", directions: 3 },
  ]);

  return (
    <>
      <VariableContext.Provider
        value={[
          newCreateFlag,
          setNewCreateFlag,
          lists,
          setLists,
          userData,
          setUserData,
          shop,
          setShop,
          shopTable,
          // setShopTable,
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

// return (
//   <>
//     <VariableContext.Provider
//       value={[
//         newCreateFlag,
//         setNewCreateFlag,
//         postedArray,
//         setPostedArray,
//         tagArray,
//         userData,
//         setUserData,
//       ]}
//     >
//       {userData[0]["user-id"] === 0 ? (
//         <Login />
//       ) : (
//         <>
//           <Header />
//           <main>
//             {newCreateFlag && <Modal />}
//             <List />
//           </main>
//         </>
//       )}
//     </VariableContext.Provider>
//   </>
// );
