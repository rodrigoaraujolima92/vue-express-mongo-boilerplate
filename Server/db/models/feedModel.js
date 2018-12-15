import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
// Setup schema
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
// Define the paginate schema
schema.plugin(mongoosePaginate);
// Define the model
const Feeds = mongoose.model("feeds", schema);

/**
 * Endpoints
 */

// Get the feeds
Feeds.get = (callback, params) => {
  let options = {};
  // Option limit
  if (params.limit) {
    options.limit = parseInt(params.limit);
  }
  options.page = parseInt(params.page) || 1;
  debugger;
  Feeds.paginate({}, options).then(result => {
    debugger;
    callback(result);
  });
  // Feeds.find(callback)
  //   // Limit the request
  //   .limit(parseInt(params.limit))
  //   // Get a specific page or return the first one
  //   .skip(params.page ? parseInt(params.page) : 1);
};

// Handle create Feeds actions
Feeds.new = function(req, res) {
  debugger;
};
// Export Feeds model
export { Feeds };
