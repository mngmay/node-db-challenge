exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "create GitHub repo",
      notes: null,
      completed: true,
      project_id: 1
    },
    {
      id: 2,
      description: "create file structure",
      notes: "organize your plan",
      completed: true,
      project_id: 1
    },
    {
      id: 3,
      description: "styling",
      notes: "make it pretty",
      completed: false,
      project_id: 1
    },
    {
      id: 4,
      description: "buy supplies",
      notes: null,
      completed: false,
      project_id: 2
    },
    {
      id: 5,
      description: "make blueprints",
      notes: "plan the look",
      completed: false,
      project_id: 2
    },
    {
      id: 6,
      description: "secure ripe bananas",
      notes: "brown spots are good",
      completed: true,
      project_id: 3
    },
    {
      id: 7,
      description: "bake bread",
      notes: "you should cook it or you'll get a tummy ache",
      completed: true,
      project_id: 3
    }
  ]);
};
