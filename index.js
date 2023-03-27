const functions = require("firebase-functions");
const admin = require("firebase-admin");



var serviceAccount = require("./permision.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");

// const port = 3000;
const app = express();
const db=admin.firestore();
const cors = require("cors");
app.use(cors({origin: true}));

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});
 app.post("/api/create", (req, res) => {
  (
    async () => {
      try{
        await db.collection("products").doc('/' + req.body.id + '/')
        // await db.Collection("products").doc('/' + req.body.id + '/')
        .create({
          name: req.body.name,
          description: req.body.description,
          prise:req.body.prise,
        })
        return res.status(200).send();

      }

    
   

    
    catch(error) {
      console.log(error);
      return res.status(500).send( error);

    }
})();
  
});
app.get("/api/read/:id", (req, res) => {
    (
      async () => {
        try{
          const document= db.collection("products").doc(req.params.id);
          // await db.Collection("products").doc('/' + req.body.id + '/')
        //   .create({
        //     name: req.body.name,
        //     description: req.body.description,
        //     prise:req.body.prise,
        //   })
        let product= await document.get();
        let response=product.data();
          return res.status(200).send(response);
  
        }
  
      
     
  
      
      catch(error) {
        console.log(error);
        return res.status(500).send( error);
  
      }
  })();
    
  });
  app.get("/api/read", (req, res) => {
    (
      async () => {
        try{
            let query = db.collection('products');
            let respons=[];
            await query.get().then(QuerySnapshot => {
               let docs= QuerySnapshot.docs
               for(let doc of docs) {
                const selectedItem={
                    id:doc.id,
                    name:doc.data().name,
                    description:doc.data().description,
                    prise:doc.data().prise,
                }
                respons.push(selectedItem);
               }
               return respons;

            })
            return res.status(200).send(respons);
        //   const document= db.collection("products").doc(req.params.id);
          // await db.Collection("products").doc('/' + req.body.id + '/')
        //   .create({
        //     name: req.body.name,
        //     description: req.body.description,
        //     prise:req.body.prise,
        //   })
        // let product= await document.get();
        // let response=product.data();
        //   return res.status(200).send(response);
  
        }
  
      
     
  
      
      catch(error) {
        console.log(error);
        return res.status(500).send( error);
  
      }
  })();
    
  });
  app.put("/api/update/:id", (req, res) => {
    (
      async () => {
        try{
            const document= db.collection("products").doc(req.params.id);
        //   await db.collection("products").doc('/' + req.body.id + '/')
          // await db.Collection("products").doc('/' + req.body.id + '/')
         await document.update({
            name: req.body.name,
            description: req.body.description,
            prise:req.body.prise,
          })
          return res.status(200).send();
  
        }
  
      
     
  
      
      catch(error) {
        console.log(error);
        return res.status(500).send( error);
  
      }
  })();
    
  });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

exports.app=functions.https.onRequest(app);

