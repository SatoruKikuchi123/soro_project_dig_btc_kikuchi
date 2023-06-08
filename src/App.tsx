import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Login from "./components/Login";
import { Add } from "./components/Add";
import { ShopSort } from "./components/Shop";
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
    popup: boolean,
    setPopup: Function,
    lists: any,
    setLists: Function,
    userData: props["userData"],
    setUserData: Function,
    shop: any,
    setShop: Function
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
]);

export default function App() {
  const [popup, setPopup] = useState(false);
  const [lists, setLists] = useState([]);
  const [userData, setUserData] = useState([]);
  const [shop, setShop] = useState("");

  return (
    <>
      <VariableContext.Provider
        value={[
          popup,
          setPopup,
          lists,
          setLists,
          userData,
          setUserData,
          shop,
          setShop,
        ]}
      >
        <Add />
        <ShopSort />
        <List />
      </VariableContext.Provider>
    </>
  );
}

// return (
//   <>
//     <VariableContext.Provider
//       value={[
//         popup,
//         setPopup,
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
//             {popup && <Modal />}
//             <List />
//           </main>
//         </>
//       )}
//     </VariableContext.Provider>
//   </>
// );
