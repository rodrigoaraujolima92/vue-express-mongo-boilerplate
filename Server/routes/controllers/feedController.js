import { Feeds } from "./../../db/models/feedModel";

// Handle index actions
export const index = (req, res) => {
  Feeds.get(feeds => {
    res.json(feeds);
  }, req.query);
};

export const add = function(req, res) {
  var feed = new Feeds();
  feed.name = req.body.name ? req.body.name : feed.name;
  // save the feed and check for errors
  feed.save(function(err) {
    if (err) {
      res.json(err);
    }
    res.json({
      message: "New feed was created!"
    });
  });
};
