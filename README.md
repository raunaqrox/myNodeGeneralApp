## What is being done
 - mongoose on top of mongo is the database
 - jade is used as simple templates, and react components are attached to jade
 - authorization is being done on server side and different jade views are shown
 - authentication will be done by passport
 - also websockets will be connected for notifications and live feed
 - webpack is used to compile es6 and jsx
 - to see if redis could be used for something here

## MongoDb Collections
 - users
 - content
 - settings(separate from users maybe)

## Feature List
 - navigation
 - login
 - registration
 - profiles
 - adding content
 - rate content
 - filter content
 - search content
 - comment( disqus / muut / discourse )
 - follow people
 - notifications
 - uploading content like images (s3 buckets)
 - email account activation (easy to add/disable)
 - live feed( what people you follow are doing )
 - responsive
 - client side caching
 - some basic testing

## Future Todo(what will not be done initially)
 - Make it isomorphic
 - use react router
 - level(sql and nosql)
 - generalmobile app conversion(maybe hybrid) react-native for ios and mld for look in android

## Other cool features(may add in future)
 - markdown for any text with preview or for comments/content description atleast.
 - lots of graphs of the content, a **Dashboard**
 - chrome extensions to intereact
 - use just grid from bootstrap and use mld for material design

## Interesting ideas
 - Navbar being made from object
 - routing is from server and react is being used clientside(may not be good but different)
 - Not using flux, each react component will have its own js if it needs
