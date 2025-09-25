import bcrypt from 'bcrypt';
import {lookUpUserByEmail} from '../models/user_login.js';

export const showLoginPage = async(request,response) =>{
    response.render('login/login');
}

export const login = async (request,response) => {
    const {email,password} = request.body;
    const user = await lookUpUserByEmail(email);

    if(!user){
        return response.send('User not found');
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if(!match){
        return response.send('Invalid password')
    }

    request.session.userId = user.id;
    response.redirect('/user_dashboard');
}
