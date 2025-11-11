import swaggerJSDoc from "swagger-jsdoc";
// import { info } from "winston";

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
          title:"Backend API Documentation",
          version:"1.0.0",
          description:"API docs for backend learning And development"
        },
        servers:[
            {
                url:"http://localhost:5000"
            }
        ]
    },
    apis:["./routes/*.js"]
}


const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec;