// db.ts with connection pool
import * as mysql from 'promise-mysql';

const DATABASE_HOST = 'localhost';

class ConnectionPool {
    private static instance: mysql.Pool;

    private constructor() { }

    static async getInstance(): Promise<mysql.Pool> {
        if (!ConnectionPool.instance) {
            ConnectionPool.instance = await mysql.createPool({
                host: DATABASE_HOST,
                port: 3306,
                database: 'test',
                user: 'test',
                password: 'test',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
        }
        return ConnectionPool.instance;
    }
}

let pool: mysql.Pool | null = null;
async function getConectionPool() {
    return await mysql.createPool({
        host: DATABASE_HOST,
        port: 3306,
        database: 'test',
        user: 'test',
        password: 'test',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

export const getDBConnection = async () => {
    // if (pool == null) {
    //     pool = await getConectionPool();
    // }
    const connection = await ConnectionPool.getInstance();
    return await connection.getConnection();

};
