module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/games'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
