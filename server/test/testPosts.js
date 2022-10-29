 const testPosts = [
    {
        "title": "Test 1",
        "message": "This is a test", 
        "creator": "Becky",
         "tags": ["test", "firstPost", "hello"], 
         "selectedFile": "file.mp4",
         "likeCount": { 
             "type": 50,
             "default" : 0, 
         }, 
         "createdAt": { 
             "type": 01 / 01 / 2001, 
             "default" : new Date(), 
        }, 
    },
    {
        "title": "Test 2",
        "message": "This is another test", 
        "creator": "Louise",
         "tags": ["test", "secondPost", "welcome"], 
         "selectedFile": "file.mp4",
         "likeCount": { 
             "type": 10,
             "default" : 0, 
         }, 
         "createdAt": { 
             "type": 02 / 02 / 2002, 
             "default" : new Date(), 
        }, 
    },
    {
        "title": "Test 3",
        "message": "This is the third test", 
        "creator": "William",
         "tags": ["test", "thirdPost", "goodbye"], 
         "selectedFile": "file.mp4",
         "likeCount": { 
             "type": 1000,
             "default" : 0, 
         }, 
         "createdAt": { 
             "type": 05 / 05 / 2005, 
             "default" : new Date(), 
        }, 
    }
 ];

export default testPosts; 