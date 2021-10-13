import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

import * as cors from "cors";


admin.initializeApp(functions.config().firebase);

// initialize express server
const app = express();
const main = express();

main.use("/api/v1", app);
main.use(cors);

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// initialize the database and the collection
const db = admin.firestore();
const bookCollection = "books";


// get all books
app.get("/books", async (req, res) => {
  try {
    const bookQuerySnapshot = await db.collection(bookCollection).get();
    const books: any[] = [];
    bookQuerySnapshot.forEach((doc) => {
      books.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send(error);
  }
});


export const webApi = functions.https.onRequest(main);
