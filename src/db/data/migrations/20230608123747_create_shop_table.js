/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("shop", (table) => {
    table.string("shop_name", 32).notNullable();
    table.string("corner_name", 32).notNullable();
    table.integer("directions", 8).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("shop");
};
