import pool from '../db.js';

export const lookUpUserByEmail = async (email) => {
    const response = await pool.query(
        'SELECT * FROM users_credentials WHERE email = $1', [email]
    );
    return response.rows[0];
}