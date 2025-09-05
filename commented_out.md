
// import pg from 'pg';

// const {Pool} = pg;

// const pool = new Pool({
//     user: 'jobhuntweb',
//     password: 'Jbhntwb1999!',
//     host: 'localhost',
//     port: 5432,
//     database: 'jobhunt'
// });




// app.post('/submit-user-form',async (request,response) => {
//     try{
//         const client = await pool.connect();
//         const receivedFrom = request.body;
//         const INSERT_QUERY = `
//             INSERT INTO individual (uname,fname,lname) 
//             VALUES ($1,$2,$3);
//         `;
//         console.log(request.body);
//         const values = [`${receivedFrom.uname}`, `${receivedFrom.fname}`, `${receivedFrom.lname}`];
//         await client.query(INSERT_QUERY, values);
//         client.release();
//         //serial_value++;
//         response.json({message: "Successfully Recieved... Refresh Screen"});
//     } catch(err){
//         console.error(err);
//         response.status(500).send("Error connecting to DB");
//     }
// });

// app.get('/employee-info', async(request,response) => {
//     try{
//         const GET_EMP_DATA = 'SELECT * FROM Individual;';
//         const arrayWithJSON = [];
//         const client = await pool.connect();
//         const query_result = await client.query(GET_EMP_DATA);
//         console.log(query_result);
//         client.release();
//     } catch(error){
//         console.error(error);
//         response.status(500).send("Error Connecting to DB");
//     }
// });

// Gracefully handle shutdown
// process.on('SIGINT', async () => {
//     console.log('Shutting down server...');
    
//     // Close the pool and release all client connections
//     await pool.end();
//     console.log('Database connections closed from SIGINT...');
  
//     process.exit(0); // Exit the process with a successful status code
// });
  
// process.on('SIGTERM', async () => {
//     console.log('Shutting down server...');
    
//     // Close the pool and release all client connections
//     await pool.end();
//     console.log('Database connections closed from SIGTERM...');
  
//     process.exit(0); // Exit the process with a successful status code
// });

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
