const { Song } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;

      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ["title", "artist", "album", "genre"].map(key => {
              return {
                [key]: {
                  $like: `%${search}%`
                }
              };
            })
          }
        });
      } else {
        songs = await Song.findAll({
          limit: 10
        });
      }

      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to fetch the song : ${err}`
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying create the song`
      });
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying to get the song`
      });
    }
  },
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: `An error has occured while trying to edit the song`
      });
    }
  }
};
