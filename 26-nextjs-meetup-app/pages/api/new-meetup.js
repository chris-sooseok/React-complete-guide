import { MongoClient } from 'mongodb';

// ! server-side function that has access to database
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            process.env.MONGODB_URL
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;