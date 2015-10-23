User = new Mongo.Collection("user");
RaiseEvent = new Mongo.Collection("raise_event");
EventAttenders = new Mongo.Collection("event_Attenders");
Activity = new Mongo.Collection("activity");
Comments = new Mongo.Collection("comments");
Chat = new Mongo.Collection("chat");

//Meteor.methods

if (Meteor.isServer) {
  // cosole.log("Server Running");
  // ServiceConfiguration.configurations.upsert(
  //   { service: "google" },
  //   {
  //     $set: {
  //       clientId: "32191719071-ldukbdqg3v5jm25a8po68vo3j3q69n2h.apps.googleusercontent.com",
  //       loginStyle: "popup",
  //       secret: "yMnUxPzeHCKFpjeIJ5tT7q8p"
  //     }
  //   }
  // );

}
