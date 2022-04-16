const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const controller = require('./controller');

router.get('/getAllPolls',
   controller.getAllPolls
);

router.post('/addNewPoll',
   controller.addNewPoll
)

router.post('/givePoll',
   controller.givePoll
)



module.exports = router;