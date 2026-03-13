import swaggerAutogen from 'swagger-autogen';


const doc = {
  info: {
    title: 'My contacts API',
    description: 'Automatic documentation for Week 2 individual assignment for CSE 341'
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./server.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
export default doc;