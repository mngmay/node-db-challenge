exports.seed = function(knex) {
  return knex("resources").insert([
    { id: 1, name: "computer", description: "magic box" },
    { id: 2, name: "banana", description: "monkeys like them" },
    { id: 3, name: "wood", description: "how many can a wood chuck chuck?" }
  ]);
};
