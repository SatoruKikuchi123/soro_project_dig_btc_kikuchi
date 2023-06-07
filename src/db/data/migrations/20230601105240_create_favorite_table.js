/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("favorite", (table) => {
        table.increments("fav-id",32).primary();
        table.integer("f-user-id",32);
        table.integer("f-id",32);

        table.foreign("f-user-id").references("user.user-id");
        table.foreign("f-id").references("posted.id");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("favorite");  
};
