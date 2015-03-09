// Initialize the client with your api key, no secret and your site id
client = stream.connect('h6cxryxhf4k8', null, '2723');
// Get the feed object with a valid feed token
ericFeed = client.feed('user', 'eric', '-IiVKLyTcWdFlkX3uRSBa6zEjEQ');
// Add the activity to the feed
ericFeed.addActivity(
{actor: 'eric', tweet: 'Hello world', verb: 'tweet', object: 1}
);


// NOTES:
// THE ACTIVITY YOU ADDED HAS 4 FIELDS: ACTOR, TWEET, VERB AND OBJECT.
//
// ACTOR IS THE USER ID OF THE PERSON PERFORMING THE ACTIVITY.
// TWEET IS A CUSTOM FIELD CONTAINING THE MESSAGE.
// VERB IS THE TYPE OF ACTIVITY THE ACTOR IS ENGAGING IN.
// OBJECT IS THE ID OF THE TWEET OBJECT IN YOUR DATABASE.
