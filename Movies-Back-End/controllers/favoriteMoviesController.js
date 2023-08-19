const asyncHandler = require("express-async-handler");
const FavoriteMovies = require("../models/favoriteMoviesModel");
//@desc Get all favoriteMoviess
//@route GET /api/favoriteMoviess
//@access private
const getFavoriteMoviess = asyncHandler(async (req, res) => {
  const favoriteMoviess = await FavoriteMovies.find({ user_id: req.user.id });
  res.status(200).json(favoriteMoviess);
});

//@desc Create New favoriteMovies
//@route POST /api/favoriteMoviess
//@access private
const createFavoriteMovies = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { id_movie, type_movie, image_movie, title_movie, date_movie } = req.body;
  if (!id_movie) {
    res.status(400);
    throw new Error("id movie fields are mandatory !");
  }
  const favoriteMovies = await FavoriteMovies.create({
    id_movie,
    type_movie,
    image_movie,
    title_movie,
    date_movie,
    user_id: req.user.id,
  });

  res.status(201).json(favoriteMovies);
});

//@desc Get favoriteMovies
//@route GET /api/favoriteMoviess/:id
//@access private
const getFavoriteMovies = asyncHandler(async (req, res) => {
  const favoriteMovies = await FavoriteMovies.findById(req.params.id);
  if (!favoriteMovies) {
    res.status(404);
    throw new Error("FavoriteMovies not found");
  }
  res.status(200).json(favoriteMovies);
});

//@desc Update favoriteMovies
//@route PUT /api/favoriteMoviess/:id
//@access private
const updateFavoriteMovies = asyncHandler(async (req, res) => {
  const favoriteMovies = await FavoriteMovies.findById(req.params.id);
  if (!favoriteMovies) {
    res.status(404);
    throw new Error("FavoriteMovies not found");
  }

  if (favoriteMovies.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user favoriteMoviess");
  }

  const updatedFavoriteMovies = await FavoriteMovies.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedFavoriteMovies);
});

//@desc Delete favoriteMovies
//@route DELETE /api/favoriteMoviess/:id
//@access private
const deleteFavoriteMovies = asyncHandler(async (req, res) => {
  const favoriteMovies = await FavoriteMovies.findById(req.params.id);
  if (!favoriteMovies) {
    res.status(404);
    throw new Error("FavoriteMovies not found");
  }
  if (favoriteMovies.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user favoriteMoviess");
  }
  await FavoriteMovies.deleteOne({ _id: req.params.id });
  res.status(200).json(favoriteMovies);
});

module.exports = {
  getFavoriteMoviess,
  createFavoriteMovies,
  getFavoriteMovies,
  updateFavoriteMovies,
  deleteFavoriteMovies,
};
