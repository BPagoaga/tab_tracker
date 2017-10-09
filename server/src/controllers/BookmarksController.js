const { Bookmark } = require("../models");
const { Song } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.query;
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
      const userId = req.user.id;
      const { songId } = req.body.params;
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
      const userId = req.user.id;
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      });

      if (!bookmark) {
        return res.status(403).send({
          error: "Oups, this is not your bookmark, how did you get there ?"
        });
      }

      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: `An error has occured while trying to destroy the bookmark : ${err}`
      });
    }
  }
};
