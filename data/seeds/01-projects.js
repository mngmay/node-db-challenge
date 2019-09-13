exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "portfolio",
      description: "development portfolio.",
      complete: false
    },
    {
      id: 2,
      name: "bird house",
      description: "build a bird house to reduce homeless bird population.",
      complete: false
    },
    {
      id: 3,
      name: "banana bread",
      description: "bake banana bread",
      complete: true
    }
  ]);
};
