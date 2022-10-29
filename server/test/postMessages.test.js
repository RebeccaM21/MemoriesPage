import chai, {expect} from 'chai'; 
import chaiHttp from 'chai-http'; 

import PostMessage from '../models/postMessage.js';
import server from '../index.js';  
import testPosts from './testPosts.js';

chai.use(chaiHttp); 

describe('Server Tests on /posts', () => {

    beforeEach(async () => { 
        try {
            await PostMessage.deleteMany();
            console.log(`Entries in collection cleared`);
        } catch (err) {
            console.log(`Error clearing entries`);
            throw new Error(`Clearing database error`);
        }
        
        try { 
            await PostMessage.insertMany(testPosts); 
            console.log(`Entries added to the collection`); 
        } catch (err) { 
            console.log(err)
            throw new Error(`Insertion error`)
        }

    })

        it('should return all the documents in test data', async () => {
            // Have server running
            const res = await chai.request(server)
                // Make get request to the server on the right route
                .get(`/posts/`)
                .send()
            // Assert that the data returned is correct

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(testPosts.length);
        });
});