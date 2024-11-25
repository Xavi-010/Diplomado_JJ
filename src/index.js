import app from './app.js';
import sequelize from './database/database.js'
import 'dotenv/config';
import logger from './logs/logger.js'

async function main() {
    // {force:true} eliminar de manera forzada o que inicie
    await sequelize.sync({ force: false }); // espera que se conecte a mi base de datos
    const port = process.env.PORT;
    app.listen(port);
    logger.info(`Server started on port ${port}`);

}

main();


//Otros tambien que se puede usar
// logger.error(`Server started on port ${port}`);
// logger.warn(`Server started on port ${port}`);
// logger.fatal(`Server started on port ${port}`);s