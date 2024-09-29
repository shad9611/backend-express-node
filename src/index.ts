import cors from 'cors'
import express from 'express'
import UserModel from './models/user'
import { connectToMongoDB } from './services/mongoose'

const app = express();
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("Conexión a MongoDB establecida.")

    app.get('/', async (req, res):Promise<void> => {
      res.send('<h1>hi</h1>')
    })
    
    app.post('/users', async (req, res) => {
      const { username, email, password } = req.body;
      try {
        const newUser = await UserModel.create({ username, email, password });
        res.status(201).json(newUser);
      } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'Unknown error' });
        }
      }
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

startServer();
