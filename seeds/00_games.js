exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, name: 'Breath of the Wild', developer: "Nintendo", rating: 8.5},
        {id: 2, name: 'Fez', developer: "Polytron", rating: 7.4},
        {id: 3, name: 'Anti-Chamber', developer: "Demruth", rating: 8.1}
      ]);
    })
    .then(function() {
      // Moves id column (PK) auto-incrementer to correct value after inserts
      return knex.raw("SELECT setval('games_id_seq', (SELECT MAX(id) FROM games))")
    })
};
