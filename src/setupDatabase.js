const { Client } = require("pg");
const { DB } = require("./config");

(async () => {

    // sample db setup statement
    const sampleTableStatement = `
        CREATE TABLE IF NOT EXISTS sample (
            id              SERIAL            PRIMARY KEY,
            email           VARCHAR(50)       NOT NULL,
            password        TEXT              NOT NULL,
            firstname       VARCHAR(50),
            lastname        VARCHAR(50),
            isactive        BOOLEAN,
            UNIQUE(email)
        );
    `

    try {
        const db = new Client({
        user: DB.PGUSER,
        host: DB.PGHOST,
        database: DB.PGDATABASE,
        password: DB.PGPASSWORD,
        port: DB.PGPORT
        });

        await db.connect();

        // create tables on db
        await db.query(sampleTableStatement);

        await db.end();

    } catch (err) {
        console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
    }
    
})();