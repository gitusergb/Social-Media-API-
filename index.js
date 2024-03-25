const { ApolloServer} = require('apollo-server');
const PubSub = require('PubSub');

require('dotenv').config();
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {connection} = require("./db")
const pubsub = new PubSub();

const PORT = process.env.port||4000;

// const typeDefs = gql`
// type post{
//     id:ID!
//     body: String!
//     username: String!
//     createdAt: String!
// }
// type Query{
//     getPosts:[post]
// }
// `;
// const resolvers ={
//   Query:{
//         // sayHi:()=>`Hello World!!!!!!!`
//         async getPosts(){
//             try{
//                 const posts=await post.find();
//                 return posts;
//             }catch(err){
//                 throw new Error(err);
//             }
//         }
//     }
// };

const server= new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
  // context: ({ req }) => ({ req })
});

async function startServer() {
  try {
    await connection;
    console.log("Database connection Established");
  } catch {
    console.log("Database connection Failed");
  }

  server.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Server Started");
  });
}

startServer();