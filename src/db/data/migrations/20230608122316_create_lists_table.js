/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("lists", (table) => {
    table.string("uniquKey", 64).primary();
    table.string("item", 32).notNullable();
    table.integer("quantity", 8);
    table.string("quantity_unit", 8);
    table.string("corner_name", 32).notNullable();
    table.integer("directions", 8).notNullable();
    table.boolean("isCompleted").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("lists");
};
