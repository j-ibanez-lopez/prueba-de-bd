import { Pool } from 'pg'


export const database = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'swampert',
    database: 'supermercado',
    port: 5432
    // user: 'postgres',
})

// También se puede hacer esto en vez de
// ubicar el "export" delante de la variable
// o constante, según corresponda.
// export default database;