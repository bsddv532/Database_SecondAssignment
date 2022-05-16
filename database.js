const { MongoClient } = require("mongodb");

const dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, (err, db) => {
    if(err) {
        console.error("Error connecting to database: ", err);
        return;
    }
    const database = db.db("Human_Resource2");
    console.log("Connected to database");


    // database.createCollection('employee', (err, success) => {
    //     if(err) {
    //         console.error("Error while creating collection: ", err);
    //         return;
    //     }
    //     console.log("Collection created");
    // })

    
    // const employeeArr = [
    //     {
    //     "firstName": "John",
    //     "lastName": "Doe",
    //     "salary": "25000",
    //     "department": "HR",
    //     "lastCompany": "X",
    //     "lastSalary": "10000",
    //     "overallExp": "2",
    //     "contactInfo": "1234567890",
    //     "yearGrad": "2016",
    //     "gradStream": "CSE"
    //     },

    //     {
    //     "firstName": "Rohan",
    //     "lastName": "Jame",
    //     "salary": "30000",
    //     "department": "Technical",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "1",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },

    //     {
    //     "firstName": "Jame",
    //     "lastName": "Doe",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "20000",
    //     "overallExp": "1",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "ECE"
    //     },

    //     {
    //     "firstName": "Sao",
    //     "lastName": "Avika",
    //     "salary": "30000",
    //     "department": "Sales",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },
        
    //     {
    //     "firstName": "Jame",
    //     "lastName": "roh",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "EEE"
    //     },

    //     {
    //     "firstName": "Rohan",
    //     "lastName": "Jame",
    //     "salary": "30000",
    //     "department": "Technical",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "1",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },
        
    //     {
    //     "firstName": "Jame",
    //     "lastName": "Doe",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "20000",
    //     "overallExp": "1",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "ECE"
    //     },
        
    //     {
    //     "firstName": "Sao",
    //     "lastName": "Avika",
    //     "salary": "30000",
    //     "department": "Sales",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },
        
    //     {
    //     "firstName": "Jame",
    //     "lastName": "Doe",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "EEE"
    //     },
        
    //     {
    //     "firstName": "Rohan",
    //     "lastName": "Jame",
    //     "salary": "30000",
    //     "department": "Technical",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "1",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },

    //     {
    //     "firstName": "Jame",
    //     "lastName": "Doe",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "20000",
    //     "overallExp": "1",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "ECE"
    //     },

    //     {
    //     "firstName": "Sao",
    //     "lastName": "Avika",
    //     "salary": "30000",
    //     "department": "Sales",
    //     "lastCompany": "Y",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "1234567860",
    //     "yearGrad": "2015",
    //     "gradStream": "CSE"
    //     },

    //     {
    //     "firstName": "Jame",
    //     "lastName": "Doe",
    //     "salary": "35000",
    //     "department": "Accounts",
    //     "lastCompany": "Z",
    //     "lastSalary": "15000",
    //     "overallExp": "2",
    //     "contactInfo": "123567890",
    //     "yearGrad": "2019",
    //     "gradStream": "EEE"
    //     }
    //     ]

    //     database.collection("employee").insertMany(employeeArr, (err, success) =>{
    //         if(err){
    //             console.log("Error while inserting data: ", err);
    //             return;
    //         }
    //         console.log("=======================Data inserted=================");
    //     })    
        

    // database.collection("employee").find({}).toArray((err, result)=> {
    //     if(err){
    //         console.log("Error while fetching data: ", err);
    //         return;
    //     }
    //     console.log(result);
    // })


    database.collection("employee").find({salary:{$gt:'30000'}}).toArray((err, result)=> {
        if(err){
            console.log("Error while fetching data: ", err);
            return;
        }
        console.log(result);
    })


})