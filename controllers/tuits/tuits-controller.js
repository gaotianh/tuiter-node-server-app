import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "images/nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // const newTuit = {
    //     ...templateTuit,
    //     ...req.body
    // };
    // newTuit.likes = 0;
    // newTuit.liked = false;
    // newTuit.dislikes = 0;
    // newTuit.disliked = false;
    // newTuit.retuits = 0;
    // newTuit.replies = 0;
    const insertedTuit = await tuitsDao // actual tuit inserted in database
                        .createTuit(newTuit);   // with DAO's createTuit
    res.json(insertedTuit);                          // respond with new tuit
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()    // retrieve tuits from database
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;     // get ID of tuit to update from path
    const updates = req.body;                   // get updates from HTTP body
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);                        // respond with success
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;  // retrieve the ID of the tuit we want to remove
    const status = await tuitsDao           // status reports success or failure
        .deleteTuit(tuitdIdToDelete);       // to delete record from database
    res.json(status);                       // respond with status object
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
