/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('review').del();
  await knex('favorite').del();
  await knex('record').del();
  await knex('good').del();
  await knex('posted').del();
  await knex('user').del();
  await knex('user').insert([
    {"user-id": 10001, "first-name": '久場', "last-name":"智宏","password": "admin"},
    {"user-id": 10002, "first-name": '宮城', "last-name":"恒太郎","password": "admin"},
    {"user-id": 10003, "first-name": '菊地', "last-name":"慧","password": "admin"},
    {"user-id": 10004, "first-name": '浅井', "last-name":"綾乃","password": "admin"},
    {"user-id": 10005, "first-name": '森﨑', "last-name":"陽平","password": "admin"},
    {"user-id": 10006, "first-name": '皿井', "last-name":"進","password": "admin"},
    {"user-id": 10007, "first-name": '萩', "last-name":"巧実","password": "admin"},
    {"user-id": 10008, "first-name": '坂本', "last-name":"龍征","password": "admin"},
    {"user-id": 10009, "first-name": '田邊', "last-name":"諒人","password": "admin"},
  ]);
};

