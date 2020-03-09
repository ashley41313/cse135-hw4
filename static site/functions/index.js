const functions = require('firebase-functions');
const cors = require('cors')({origin: true, credentials: true });
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

console.log("this is index.js");
var i = 0;
var info;

// COLLECT ENDPOINT
// Goes into the allCollections part of the document, and adds 
// a JSON object to the info: field of the document that 
// pertains to this session
exports.collect = functions.https.onRequest((request, response) => {
    //get the cookies from the request, and creating that doc
    let cooki = String(request.get('cookie'));
    db.collection('allCollections').doc(cooki).get()
    .then(doc=> {        
        info = doc.data().info;
        let entries = JSON.parse(info) || [];

        //add input to entries array
        let input = JSON.parse(request.body)
        for(i in input) {
            entries.push(input[i]);
        }

        return db.collection('allCollections').doc(cooki)
            .set( { info: JSON.stringify(entries) });
    })
    .catch(err=> {
        response.json({ error: err});
    })

});
    

// SESSIONIZE ednpoints
// hand out permanent/session cookies
// create a space in the database for this particular user/session 
exports.sessionize = functions.https.onRequest((req, res) => {
    cors(req, res, () => { 

        var maxAge = "; Max-Age=2147483647";
        var permID = "__perm=" + String(req.get('x-appengine-user-ip'));
        var seshID = String(Math.random());

        //if NO cookies, set perm/session cookies
        if(!req.get("cookie")) {
            res.set("set-cookie", permID+maxAge);
        }

        //a cookie exists( either : perm&cookie OR permONLY)
        else {
            var cooks = req.get("cookie");
            //if doesn't contain session cookie BUT has perm cookie
            if(!cooks.includes("session")) {
                res.set("set-cookie", "__session=" + seshID);
                
                //initialize its slot in the database
                let entries = [];
                db.collection('allCollections').doc(permID+"; __session="+seshID)
                .set( { info: JSON.stringify(entries)});
            }
        }

        //there weren't cookies, so set the session cookie
        if(!req.get("cookie")) {
            res.cookie("__session", seshID);

            let entries = [];
            db.collection('allCollections').doc(permID+"; __session="+seshID)
            .set( { info: JSON.stringify(entries)});
        }

        res.set('Access-Control-Allow-Origin', 'https://homework-4-f09d0.firebaseapp.com');
        res.set('Access-Control-Allow-Credentials', true);
        res.send(req.headers);
    });
});