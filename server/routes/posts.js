// This file is used to display all of the routes and requests being made by the server to the database, and the response that shows on the front end. 

import express from 'express'; 
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router(); 

router.get('/', getPosts); 
router.post('/', createPosts)

export default router; 

