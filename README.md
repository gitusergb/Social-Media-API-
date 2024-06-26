# Social Media API using NodeJS

## Overview
- This project involves the development of a Social Media API using NodeJS. 
- The focus is on demonstrating proficiency in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP) concepts, ExpressJS, and GraphQL. 
- The API will simulate basic functionalities of a social media platform, such as user registration, posting comment, and like other users comment ,Integrate a GraphQL endpoint for querying user profiles ,posts. Demonstrated design and executed complex queries using GraphQL. 

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository.

   git clone https://github.com/gitusergb/Social-Media-API-

### Backend link : https://social-media-api-diqa.onrender.com/

## Backend
- Server is running at http://localhost:3000
- apollo server link : https://social-media-api-diqa.onrender.com/

```
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://social-media-api-diqa.onrender.com/' \
  --data '{"query":"query { __typename }"}'
```

- I had to build an Express application. 
- used  https://studio.apollographql.com/sandbox/explorer for api endpoints
- Also used MongoDB Atlas for this.
- one can read, update, and delete posts. 
- user can like , subscribe , and comment on the posts.
- [video](https://drive.google.com/file/d/1J0PRUcpi-2B6ZJK6CLGjcZnHvJthVTXu/view?usp=drive_link)


<!-- given: https://docs.google.com/document/d/1RAyfRshU_Yg5UqaXBn69ublBzq2DRd7-S2SvKGwCLLs/edit#heading=h.30j0zll -->