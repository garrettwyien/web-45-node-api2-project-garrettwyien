// implement your posts router here
const express = require('express')
const Post = require('./posts-model')
const router = express.Router()

router.get('/posts', async (req, res) => {
    Post.find()
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "The posts information could not be retrieved",
        });
      });
  });

router.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(posts => {
        if (posts.length > 0) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist" });
        }
        })
        .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "The post information could not be retrieved",
        });
        });
  });



module.exports = router;