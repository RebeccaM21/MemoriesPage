// test that it extracts the messages from the database in the correct format

import chai, {expect} from "chai"; 
import chaiHttp from "chai-http"; 

import postMessage from "../models/postMessage.js"; 
import app from "../index.js"
import testPosts from "./testPosts.js"; 

chai.use(chaiHttp); 

describe('Server Tests on /posts', () => {

    beforeEach(async () => { 
        try {
            await Posts.deleteMany();
            console.log(`Posts in collection cleared`);
        } catch (err) {
            console.log(`Error clearing posts`);
            throw new Error(`Clearing database error`);
        }
        
        try { 
            await Posts.insertMany(testEntries); 
            console.log(`Posts added to the collection`); 
        } catch (err) { 
            console.log(`Error inserting posts`)
            throw new Error(`Insertion error`)
        }

    })

        it('should return all the documents in test data', async () => {
            // Have server running
            const res = await chai.request(app)
                // Make get request to the server on the right route
                .get(`/posts`)
                .send()
            // Assert that the data returned is correct

            expect(res).to.have.status(200);
            // expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(testPosts.length);
        });
});