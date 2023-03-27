// const express = require('express');
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// // var admin = require("firebase-admin");

// var serviceAccount = require("./permisions.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
  
// });


// const app = express();
// const db=admin.firestore
// const cores = require('cores');
// const { databaseURL } = require('firebase-functions/params');
// app.use(cores({origin: true}));
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.post('/api/create', (req, res) => {
//   (
//     async ()=> {
//       try{
//         await db.Collection("products").doc('/'+req.body.id  + '/')
//         .create({
//           name: req.body.name,
//           discrioption: req.body.discrimoption,
//           prise:req.body.prise,
//         })
//         return res.status(200).send();

//       }

    
   

    
//     catch(error) {
//       console.log(error);
//       return res.status(500).send( error);

//     }
// })();
  
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
// exports.app=functions.https.onRequest(app)