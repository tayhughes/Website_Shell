// This will be used for the connection to PostgreSQL
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    port: 5432,
});

// Gracefully handle shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down server...');
    
    // Close the pool and release all client connections
    await pool.end();
    console.log('Database connections closed from SIGINT...');
  
    process.exit(0); // Exit the process with a successful status code
});
  
process.on('SIGTERM', async () => {
    console.log('Shutting down server...');
    
    // Close the pool and release all client connections
    await pool.end();
    console.log('Database connections closed from SIGTERM...');
  
    process.exit(0); // Exit the process with a successful status code
});



export default pool;