const mongoose = require("mongoose");

const favoriteMoviesSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id_movie: {
      type: String,
      required: [false, "Please add the favoriteMovies id movie"],
    },
    type_movie: {
      type: String,
      required: [false, "Please add the favoriteMovies type"],
    },
    image_movie: {
      type: String,
      required: [false, "Please add the favoriteMovies phone number"],
    },
    title_movie: {
      type: String,
      required: [false, "Please add the favoriteMovies title"],
    },
    date_movie: {
      type: String,
      required: [false, "Please add the favoriteMovies date"],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FavoriteMovies", favoriteMoviesSchema);
