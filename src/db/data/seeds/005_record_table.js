/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('record').del()
  await knex('record').insert([
    {"rec-id": 1, "r-user-id": 10001, "rr-id":1, flag:1},
    {"rec-id": 2, "r-user-id": 10002, "rr-id":1, flag:1},
    {"rec-id": 3, "r-user-id": 10003, "rr-id":1, flag:1},
    {"rec-id": 4, "r-user-id": 10004, "rr-id":1, flag:1},
    {"rec-id": 5, "r-user-id": 10002, "rr-id":2, flag:1},
    {"rec-id": 6, "r-user-id": 10003, "rr-id":2, flag:1},
    {"rec-id": 7, "r-user-id": 10004, "rr-id":2, flag:1},
    {"rec-id": 8, "r-user-id": 10001, "rr-id":2, flag:1},
    {"rec-id": 9, "r-user-id": 10001, "rr-id":3, flag:1},
    {"rec-id": 10, "r-user-id": 10001, "rr-id":4, flag:1}
  ]);
};
