import * as mysql from 'promise-mysql';

class ConnectionPool {
    private static instance: mysql.Pool;

    private constructor() { }

    static async getInstance(): Promise<mysql.Pool> {
        if (!ConnectionPool.instance) {
            ConnectionPool.instance = await mysql.createPool({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
        }
        return ConnectionPool.instance;
    }
}

export const getDBConnection = async () => {
    const connection = await ConnectionPool.getInstance();
    return await connection.getConnection();
};
