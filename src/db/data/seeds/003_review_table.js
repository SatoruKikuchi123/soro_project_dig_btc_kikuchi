/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').del()
  await knex('review').insert([
    {"rev-id": 1, "r-id": 1, comment:"さいこーザマス"},
    {"rev-id": 2, "r-id": 1, comment:"これ以上ないザマス"},
    {"rev-id": 3, "r-id": 2, comment:"笑顔が一番！ざます。"},
    {"rev-id": 4, "r-id": 1, comment:"菊地さんは真面目ザマス"},
    {"rev-id": 5, "r-id": 3, comment:"ちょーさいこー"},
    {"rev-id": 6, "r-id": 4, comment:"こーちょー"},
    {"rev-id": 7, "r-id": 5, comment:"Digital innovation Garage"},
    {"rev-id": 8, "r-id": 6, comment:"ザザザマス"},
    {"rev-id": 9, "r-id": 7, comment:"良いザマス"},
    {"rev-id": 10, "r-id": 2, comment:"ザ〜マス"},
  ]);
};
