import express from 'express';
import {getIndexPage, getLoginForm, createUserLogin, 
    resetLogin, loginUserAccount, linkAttributesPage,
    pageUnderConstruction} from '../controllers/homeController.js';


const router = express.Router();

router.get('/', getIndexPage);
router.get('/login', getLoginForm);
router.get('/create-user-login', createUserLogin);
router.get('/forgot-login', resetLogin);
router.get('/attributes', linkAttributesPage);
router.get('/PUC', pageUnderConstruction)


router.post('/user-login', loginUserAccount);


export default router;