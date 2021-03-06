const admin = require("firebase-admin");

var db = admin.firestore();

function addUserDocument(user) {
  var uid = user.uid;
  var displayName = user.displayName;
  var data = {
    displayName: displayName,
    userId: uid,
    profile: {
      email: user.email,
      photoUrl: user.photoURL,
      provider: user.providerData[0].providerId,
      coverPhotoUrl: user.photoURL
    },
    active: true,
    noOfPosts: 0,
    noOfQuestions: 0,
    tokens: []
  };

  return db.doc(`users/${uid}`).set(data);
}

module.exports = addUserDocument;
