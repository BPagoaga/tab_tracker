const { Bookmark } = require("../models");
const { Song } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      const where = {
        UserId: userId
      };

      if (songId) {
        where.SongId = songId;
      }

      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => Object.assign({}, bookmark.Song, bookmark));

      res.send(bookmarks);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to get the bookmark : ${err}`
      });
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body.params;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      });

      if (bookmark) {
        return res.status(400).send({
          error: "You already bookmarked this song"
        });
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      });

      res.send(newBookmark);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to create the bookmark : ${err}`
      });
    }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findById(bookmarkId);

      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to destroy the bookmark : ${err}`
      });
    }
  }
};
