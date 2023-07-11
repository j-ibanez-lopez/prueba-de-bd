"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const pg_1 = require("pg");
exports.database = new pg_1.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'swampert',
    database: 'supermercado',
    port: 5432
    // user: 'postgres',
});
// export default database;
