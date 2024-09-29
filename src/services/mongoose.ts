import { config } from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose'

config()

const uri = process.env.MONGODB_URI || ''

const clientOptions: ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
};

export async function connectToMongoDB(): Promise<void> {
  try {
    // Conectar a MongoDB usando Mongoose
    await mongoose.connect(uri, clientOptions);
    console.log("Conectado exitosamente a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    throw error;
  }
}
