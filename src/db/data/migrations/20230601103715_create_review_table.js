/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("review", (table) => {
        table.increments("rev-id",32).primary();
        table.integer("r-id",32);
        table.string("comment",256).notNullable();

        table.foreign("r-id").references("posted.id");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("review");  
};
