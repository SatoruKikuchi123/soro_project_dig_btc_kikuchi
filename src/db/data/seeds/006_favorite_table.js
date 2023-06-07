/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorite').del()
  await knex('favorite').insert([
    {"fav-id": 1, "f-user-id": 10001,"f-id":1},
    {"fav-id": 2, "f-user-id": 10001,"f-id":2},
    {"fav-id": 3, "f-user-id": 10001,"f-id":3},
    {"fav-id": 4, "f-user-id": 10001,"f-id":4},
    {"fav-id": 5, "f-user-id": 10001,"f-id":6},
    {"fav-id": 6, "f-user-id": 10001,"f-id":7},
    {"fav-id": 7, "f-user-id": 10002,"f-id":1},
    {"fav-id": 8, "f-user-id": 10003,"f-id":1},
    {"fav-id": 9, "f-user-id": 10004,"f-id":1},
    {"fav-id": 10, "f-user-id": 10005,"f-id":1},
    {"fav-id": 11, "f-user-id": 10009,"f-id":1},
  ]);
};
