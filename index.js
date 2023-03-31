const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://jahidulislam3879:VDxh7dujNEGGVk8S@cluster0.xxse8aw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
      await client.connect();
      console.log('database connected finally hayre hay ');
      const getCollection = client.db('practice').collection('get');


      // getting the data from this 
      app.get('/helloData',async(req,res)=>{
        const query = {};
        const cursor = getCollection.find(query);
        const getC = await cursor.toArray();
        res.send(getC);
      })

      app.post('/helloData',async(req,res)=>{
        const take =req.body;
        const result = await getCollection.insertOne(take);
        res.send(result);

      })



    }finally{

    }
    
}
run().catch(console.dir);
//ses


app.get('/', (req, res) => {
  res.send('Hello World! this is jahidul islam ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




