exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "portfolio",
      description: "development portfolio.",
      completed: false
    },
    {
      id: 2,
      name: "bird house",
      description: "build a bird house to reduce homeless bird population.",
      completed: false
    },
    {
      id: 3,
      name: "banana bread",
      description: "bake banana bread",
      completed: true
    }
  ]);
};
