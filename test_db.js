import db from "./config/db.js";

try {
    const connection = await db.getConnection();
    console.log("databases connected sucessfully");
    connection.release();
}catch(error){
    console.log("database connection failed:",error.message);
}