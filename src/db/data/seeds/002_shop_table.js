/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("shop").del();
  await knex("shop").insert([
    { shop_name: "カネスエ", corner_name: "野菜", directions: 1 },
    { shop_name: "カネスエ", corner_name: "肉", directions: 2 },
    { shop_name: "カネスエ", corner_name: "魚", directions: 3 },
    { shop_name: "カネスエ", corner_name: "乳製品", directions: 4 },
    { shop_name: "カネスエ", corner_name: "冷凍", directions: 5 },
    { shop_name: "カネスエ", corner_name: "パン", directions: 6 },
    { shop_name: "カネスエ", corner_name: "惣菜", directions: 7 },
    { shop_name: "カネスエ", corner_name: "お菓子", directions: 8 },
    { shop_name: "カネスエ", corner_name: "文房具", directions: 9 },
    { shop_name: "カネスエ", corner_name: "その他", directions: 10 },
    { shop_name: "イオン扶桑店", corner_name: "野菜", directions: 10 },
    { shop_name: "イオン扶桑店", corner_name: "肉", directions: 8 },
    { shop_name: "イオン扶桑店", corner_name: "魚", directions: 9 },
    { shop_name: "イオン扶桑店", corner_name: "乳製品", directions: 7 },
    { shop_name: "イオン扶桑店", corner_name: "冷凍", directions: 5 },
    { shop_name: "イオン扶桑店", corner_name: "パン", directions: 6 },
    { shop_name: "イオン扶桑店", corner_name: "惣菜", directions: 2 },
    { shop_name: "イオン扶桑店", corner_name: "お菓子", directions: 1 },
    { shop_name: "イオン扶桑店", corner_name: "文房具", directions: 3 },
    { shop_name: "イオン扶桑店", corner_name: "その他", directions: 4 },
  ]);
};
