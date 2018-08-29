module.exports = {
    db: {
        database: process.env.DB_NAME || 'node-app-db-new',
        user: process.env.DB_USER || 'ayush',
        password: process.env.DB_PASS || '12345',
        options: {
            dialect : process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './node-app-db-new.sqlite'
        }
    }
}