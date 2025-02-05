import express from 'express';
import sequelize from '../models/index'

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada con éxito');
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch((error: any) => {
  console.error('Error al sincronizar la base de datos:', error);
});

