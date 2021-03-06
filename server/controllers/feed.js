import model from '../models';

export default {
  postfeed: async (req, res) => {
    try {
      const feeds = await model.Feeds.create({
        post: req.body.post,
        ClientId: req.user.client.id,
      });
      res.send({
        feeds,
        message: 'your feed post was successful',
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  // eslint-disable-next-line consistent-return
  getAllfeed: async (req, res) => {
    try {
      const getAllFeed = await model.Feeds.findAll({
        include: [model.Clients],
      });
      return res.send({
        getAllFeed,
        message: 'List of all feeds',
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
