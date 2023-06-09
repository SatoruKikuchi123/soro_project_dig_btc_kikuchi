/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    { item_name: "かぼちゃ", corner_name: "野菜" },
    { item_name: "じゃがいも", corner_name: "野菜" },
    { item_name: "なす", corner_name: "野菜" },
    { item_name: "オクラ", corner_name: "野菜" },
    { item_name: "玉ねぎ", corner_name: "野菜" },
    { item_name: "ピーマン", corner_name: "野菜" },
    { item_name: "パプリカ", corner_name: "野菜" },
    { item_name: "さつまいも", corner_name: "野菜" },
    { item_name: "にんじん", corner_name: "野菜" },
    { item_name: "れんこん", corner_name: "野菜" },
    { item_name: "トマト", corner_name: "野菜" },
    { item_name: "ゴーヤ", corner_name: "野菜" },
    { item_name: "ズッキーニ", corner_name: "野菜" },
    { item_name: "豚肉", corner_name: "肉" },
    { item_name: "鶏肉", corner_name: "肉" },
    { item_name: "牛肉", corner_name: "肉" },
    { item_name: "サンマ", corner_name: "魚" },
    { item_name: "アジ", corner_name: "魚" },
    { item_name: "イワシ", corner_name: "魚" },
    { item_name: "サバ", corner_name: "魚" },
    { item_name: "マグロ", corner_name: "魚" },
    { item_name: "チーズ", corner_name: "乳製品" },
    { item_name: "バター", corner_name: "乳製品" },
    { item_name: "牛乳", corner_name: "乳製品" },
    { item_name: "冷凍チャーハン", corner_name: "冷凍" },
    { item_name: "アイス", corner_name: "冷凍" },
    { item_name: "冷凍シーフード", corner_name: "冷凍" },
    { item_name: "食パン", corner_name: "パン" },
    { item_name: "メロンパン", corner_name: "パン" },
    { item_name: "スティックパン", corner_name: "パン" },
    { item_name: "からあげ", corner_name: "惣菜" },
    { item_name: "コロッケ", corner_name: "惣菜" },
    { item_name: "ピザ", corner_name: "惣菜" },
    { item_name: "ポテトサラダ", corner_name: "惣菜" },
    { item_name: "ポテチ", corner_name: "お菓子" },
    { item_name: "チョコ", corner_name: "お菓子" },
    { item_name: "せんべい", corner_name: "お菓子" },
    { item_name: "シャー芯", corner_name: "文房具" },
    { item_name: "ノート", corner_name: "文房具" },
    { item_name: "マジック", corner_name: "文房具" },
    { item_name: "薬", corner_name: "その他" },
  ]);
};
