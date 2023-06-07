import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Login from "./components/Login";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://sataro-zamas.onrender.com"
    : "http://localhost:3333";

type props = {
  // list: {
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
    list: any,
    setList: any,
    userData: props["userData"],
    setUserData: Function
  ];
};
export const VariableContext = React.createContext<props["props"]>([
  false,
  () => {},
  [],
  () => {},
  [],
  () => {},
]);

export default function App() {
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState([{ quantity_unit: "個/本/玉" }]);
  const [userData, setUserData] = useState([]);
  const [shop, setShop] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     let postdata = await fetch(fetchURL + "/posted").then((e) => e.json());
  //     setPostedArray(postdata);
  //     let tagArray = postdata
  //       .filter((e: any) => e.tag !== "")
  //       .map((e: any) => e.tag); //;
  //     setTagArrat(
  //       tagArray.filter((e: any, ind: number) => tagArray.indexOf(e) === ind)
  //     );
  //     postdata = null;
  //     tagArray = null;
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <VariableContext.Provider
        value={[popup, setPopup, list, setList, userData, setUserData]}
      >
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
