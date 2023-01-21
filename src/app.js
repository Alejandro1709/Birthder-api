import app from './server.js';
import { PrismaClient } from '@prisma/client';
import config from './config.js';

const prisma = new PrismaClient();

const { PORT, ENV } = config;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/contacts', async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/v1/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await prisma.contact.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} on ${ENV} mode`);
});
