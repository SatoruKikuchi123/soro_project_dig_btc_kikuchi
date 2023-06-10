import React, { useContext } from "react";
import "./List.css";
import { VariableContext } from "../App";

const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://kjk.onrender.com"
    : "http://localhost:3333";
const List = () => {
  const [, , lists, setLists, shop, , shopTable, , items, ,] =
    useContext(VariableContext);

  const handleRemoveItem = (uniquKey: any) => {
    const getData = async () => {
      await fetch(`${fetchURL}/lists/del/${uniquKey}`).then((e) => e.json());
    };
    getData();
    const newLists = lists.filter(
      (list: { uniquKey: any }) => list.uniquKey !== uniquKey
    );
    setLists(newLists);
  };

  const handleCompletedItem = (uniquKey: any) => {
    const newLists = [...lists];
    const list = newLists.find((list) => list.uniquKey === uniquKey);
    list.isCompleted = !list.isCompleted;
    setLists(newLists);
  };

  const handleUpdateItem = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    uniquKey: any
  ) => {
    const { name, value } = e.target;
    const newLists = lists.map(
      (list: { [x: string]: string }, itemIndex: any) => {
        if (list.uniquKey === uniquKey) {
          console.log(name, value);
          list[name] = value;
        }
        return list;
      }
    );
    setLists(newLists);
  };

  //売り場付与
  const cornerAdd = () => {
    lists.map((list: any) => {
      for (const e of items) {
        if (e["item_name"] === list["item"]) {
          list["corner_name"] = e["corner_name"];
        }
      }
      return list;
    });
    console.log("lists:", lists);
  };
  cornerAdd();

  //順番付与
  const directionAdd = () => {
    console.log("shopTable", shopTable);

    console.log(shop);
    lists.map((list: any) => {
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
    console.log("lists:", lists);
  };
  directionAdd();
  //ソート
  const sortedList = lists.sort(function (
    a: { directions: number },
    b: { directions: number }
  ) {
    if (a.directions > b.directions) return 1;
    if (b.directions > a.directions) return -1;
    return 0;
  });
  console.log("sortedList:", sortedList);

  //更新
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const getData = async () => {
      await fetch(fetchURL + "/lists/put", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lists),
      }).then((e) => e.json());
    };
    getData();
  };

  return (
    <form className="content" onSubmit={handleSubmit}>
      <ul className="shoppingColum">
        <li>買う物</li>
        <li>量</li>
        <li>売り場</li>
        <li>順番</li>
        <button>保存</button>
      </ul>
      <ul className="topic">
        {lists.map((list: any) => (
          <li key={list.uniquKey} className="formData">
            <input
              type="checkbox"
              checked={list.isCompleted}
              onChange={() => handleCompletedItem(list.uniquKey)}
            />
            <input
              name="item"
              type="text"
              disabled={list.isCompleted}
              value={`${list.item}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <input
              name="quantity"
              type="number"
              disabled={list.isCompleted}
              min={0}
              value={`${list.quantity}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <select
              className="select1"
              name="quantity_unit"
              disabled={list.isCompleted}
              value={`${list.quantity_unit}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            >
              <option value="個/本/玉">個/本/玉</option>
              <option value="パック/袋/缶">パック/袋/缶</option>
              <option value="L">L</option>
              <option value="Kg">Kg</option>
            </select>
            <select
              className="select2"
              name="corner_name"
              disabled={list.isCompleted}
              value={`${list.corner_name}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            >
              <option value="選択してください">選択してください</option>
              <option value="野菜">野菜</option>
              <option value="肉">肉</option>
              <option value="魚">魚</option>
              <option value="乳製品">乳製品</option>
              <option value="冷凍">冷凍</option>
              <option value="パン">パン</option>
              <option value="惣菜">惣菜</option>
              <option value="お菓子">お菓子</option>
              <option value="文房具">文房具</option>
              <option value="その他">その他</option>
            </select>
            <input
              className="directions"
              name="directions"
              type="number"
              disabled={list.isCompleted}
              min={0}
              value={`${list.directions}`}
              onChange={(e) => handleUpdateItem(e, list.uniquKey)}
            />
            <button onClick={(e) => handleRemoveItem(list.uniquKey)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default List;
