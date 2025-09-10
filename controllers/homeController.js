import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const currentYear = new Date().getFullYear();

// export const getIndexPage = (request, response) => {
//     response.sendFile(path.join(__dirname, '../public','index.html'));
// };

// using EJS to render a View
export const getIndexPage = (request, response) => {
    response.render('index', {
        pageHeading: 'The Heading Title of the Page',
        pageContent: 'Home Page Content'
    });
};

export const getLoginForm = (request, response) => {
    response.render('login/login');
};

export const createUserLogin = (request, response) => {
    response.render('login/create_login');
};

export const resetLogin = (request, response) => {
    response.render('login/reset_login');
}

export const getContactForm = (request, response) => {
    response.sendFile(path.join(__dirname, '../public','src/contact-us.html'));
};


export const loginUserAccount = (request, response) => {
    console.log(request.ip);
    if(request.ip == "::ffff:192.168.0.24"){
        response.send("<h1>Access denied sorry</h1>")
    }
    else {
        response.send("<h1>welcome</h1>")
    }
    // if(request.body.username == "tayhug" && request.body.password == "12345"){
    //     response.send(`<h1>You have successfully logged in as ${request.body.username}</h1>`);
    // }
    // else{
    //     response.send(`<h1>Accout does not exist</h1>`);
    // }
    
};

export const linkAttributesPage = (request, response) => {
    response.sendFile(path.join(__dirname, '../public','src/attributes.html'));
}

export const pageUnderConstruction = (request, response) => {
    response.sendFile(path.join(__dirname, '../public', 'src/construction.html'));
}