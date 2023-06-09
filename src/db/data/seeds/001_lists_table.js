/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("lists").del();
  await knex("lists").insert([
    {
      uniquKey: "a",
      item: "かぼちゃ",
      quantity: 2,
      quantity_unit: "個/本/玉",
      corner_name: "野菜",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "aa",
      item: "牛肉",
      quantity: 3,
      quantity_unit: "Kg",
      corner_name: "肉",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "aaa",
      item: "サンマ",
      quantity: 1,
      quantity_unit: "個/本/玉",
      corner_name: "魚",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "aaaa",
      item: "チーズ",
      quantity: 5,
      quantity_unit: "個/本/玉",
      corner_name: "乳製品",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "aaaaa",
      item: "にんじん",
      quantity: 8,
      quantity_unit: "個/本/玉",
      corner_name: "野菜",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "aaaaaa",
      item: "鶏肉",
      quantity: 898,
      quantity_unit: "Kg",
      corner_name: "肉",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "bb",
      item: "マグロ",
      quantity: 23423,
      quantity_unit: "個/本/玉",
      corner_name: "魚",
      directions: 1,
      isCompleted: false,
    },
    {
      uniquKey: "b",
      item: "バター",
      quantity: 9,
      quantity_unit: "パック/袋/缶",
      corner_name: "乳製品",
      directions: 1,
      isCompleted: false,
    },
  ]);
};
