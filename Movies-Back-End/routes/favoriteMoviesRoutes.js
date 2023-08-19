const express = require("express");
const router = express.Router();
const {
  getFavoriteMoviess,
  createFavoriteMovies,
  getFavoriteMovies,
  updateFavoriteMovies,
  deleteFavoriteMovies,
} = require("../controllers/favoriteMoviesController");
const validateToken = require("../middleware/validateTokenHandler");

/**
 * @swagger
 * tags:
 *   name: Favorite Movies
 *   description: API endpoints for managing favorite movies.
 */

/**
 * @swagger
 * /api/favoriteMoviess:
 *   get:
 *     summary: Get a list of favorite movies
 *     tags: [Favorite Movies]
 *     responses:
 *       200:
 *         description: Successful response with a list of favorite movies
 *       500:
 *         description: Internal server error
 */
router.get("/api/favoriteMoviess", validateToken, getFavoriteMoviess);

/**
 * @swagger
 * /api/favoriteMoviess:
 *   post:
 *     summary: Create a new favorite movie
 *     tags: [Favorite Movies]
 *     parameters:
 *       - in: body
 *         name: favoriteMovie
 *         description: The favorite movie to create
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: string
 *               description: The user ID for the favorite movie
 *             id_movie:
 *               type: string
 *               description: The favorite movie ID
 *             type_movie:
 *               type: string
 *               description: The type of the favorite movie
 *             image_movie:
 *               type: string
 *               description: The image URL of the favorite movie
 *             title_movie:
 *               type: string
 *               description: The title of the favorite movie
 *             date_movie:
 *               type: string
 *               description: The date of the favorite movie
 *     responses:
 *       201:
 *         description: Favorite movie created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/api/favoriteMoviess", validateToken, createFavoriteMovies);

/**
 * @swagger
 * /api/favoriteMoviess/{id}:
 *   get:
 *     summary: Get a favorite movie by ID
 *     tags: [Favorite Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the favorite movie
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with the favorite movie
 *       404:
 *         description: Favorite movie not found
 *       500:
 *         description: Internal server error
 */
router.get("/api/favoriteMoviess/:id", validateToken, getFavoriteMovies);

/**
 * @swagger
 * /api/favoriteMoviess/{id}:
 *   put:
 *     summary: Update a favorite movie by ID
 *     tags: [Favorite Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the favorite movie
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: updatedFavoriteMovie
 *         description: The updated favorite movie data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: string
 *               description: The updated user ID for the favorite movie
 *             id_movie:
 *               type: string
 *               description: The updated favorite movie ID
 *             type_movie:
 *               type: string
 *               description: The updated type of the favorite movie
 *             image_movie:
 *               type: string
 *               description: The updated image URL of the favorite movie
 *             title_movie:
 *               type: string
 *               description: The updated title of the favorite movie
 *             date_movie:
 *               type: string
 *               description: The updated date of the favorite movie
 *     responses:
 *       200:
 *         description: Favorite movie updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Favorite movie not found
 *       500:
 *         description: Internal server error
 */
router.put("/api/favoriteMoviess/:id", validateToken, updateFavoriteMovies);

/**
 * @swagger
 * /api/favoriteMoviess/{id}:
 *   delete:
 *     summary: Delete a favorite movie by ID
 *     tags: [Favorite Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the favorite movie
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Favorite movie deleted successfully
 *       404:
 *         description: Favorite movie not found
 *       500:
 *         description: Internal server error
 */
router.delete("/api/favoriteMoviess/:id", validateToken, deleteFavoriteMovies);

module.exports = router;
