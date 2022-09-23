//Index routes
import { Router } from 'express';
import helloWorld from '../controllers/index.controller.server.js' //make sure to add extension (.js)

//instatntiating router
const router = Router();

//add middleware to connect application
router.get('/', helloworld);
router.get('/hello', helloworld);

export default router;