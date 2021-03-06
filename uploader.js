const admin = require("firebase-admin");
const serviceAccount = require("./service_key.json");
const data = require("./products.json");
const collectionKey = "items"; //Name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && typeof data === "object") {
  console.log(Object.keys(data));

  Object.keys(data).forEach((docKey) => {
    firestore
      .collection(collectionKey)
      .doc(data[docKey].id)
      .set(data[docKey])
      .then((res) => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}
