const router = require('express').Router();

// const for User routes
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../controllers/user-controller');
// get and create
router.get('/api/users', getAllUsers);
router.post('/api/users', createUser);

// by id
router.get('/api/users/:id', getUserById);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

// userId/friends/:friendId
router.post('api/users/:id/friends/', addFriend);
router.delete('api/users/:d/friends/', deleteFriend);   

// const for Thought routes
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../controllers/thought-controller');

// api/thoughts GET and POST
router.get('/api/thoughts', getAllThoughts);
router.post('/api/thoughts', createThought);

// /api/thoughts/:thoughtId GET,PUT,DELETE
router.get('/api/thoughts/:idd', getThoughtById);
router.put('/api/thoughts/:id', updateThought);
router.delete('/api/thoughts/:id', deleteThought);   

// /api/thoughts/:thoughtId/reactions POST,DELETE
router.post('/api/thoughts/:id/reactions', addReaction);
router.delete('/api/thoughts/:id/reactions', deleteReaction);






router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
})

module.exports = router;