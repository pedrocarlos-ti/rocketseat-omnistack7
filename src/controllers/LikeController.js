const Post = require('../models/Posts');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    post.likes += 1;

    await post.save();

    req.io.emit('like', like);

    return res.send({ post });
  }
};
