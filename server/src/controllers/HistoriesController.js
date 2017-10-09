const { History } = require("../models");
const { Song } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const where = {
        UserId: userId
      };

      const histories = await History.findAll({
        where: where,
        group: "SongId",
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => Object.assign({}, history.Song, history));

      res.send(histories);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to get the history : ${err}`
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.body.params;
      const history = await History.create({
        SongId: songId,
        UserId: userId
      });

      res.send(history);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to create the history : ${err}`
      });
    }
  }
};
