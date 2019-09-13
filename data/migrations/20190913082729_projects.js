exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();

      tbl.string("description", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })

    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("description", 255).notNullable();

      tbl.string("notes", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {};
