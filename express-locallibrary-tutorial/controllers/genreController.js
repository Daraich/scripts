var Genre = require ('../models/genre');
var Book = require ('../models/book');
var async = require('async');
const validator = require('express-validator');

// display list of all Genres
exports.genre_list = function(req, res) {
  Genre.find()
  .populate('genre')
  .sort([['name', 'ascending']])
  .exec(function (err, list_genres) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
  });
}

// display detail page for a specific Genre
exports.genre_detail = function(req, res, next) {
  async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
              .exec(callback);
        },

        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id })
              .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
    });
}

// display Genre create form on GET.
exports.genre_create_get = function(req, res) {
  res.render('genre_form', { title: 'Create Genre' });
}

// handle Genre create on POST
exports.genre_create_post = [
  // validate that the name field is not empty
  validator.body('name', 'Genre name required').trim().isLength({ min: 1}),

  // sanitize (escape) the name field
  validator.sanitizeBody('name').escape(),

  // process request after validation and sanitization
  (req, res, next) => {

    // extract the validation errors from a request
    const errors = validator.validationResult(req);

    // create a genre object with escaped and trimmed data
    var genre = new Genre(
      { name: req.body.name }
    );

    if (!errors.isEmpty()) {
      // there are errors. Render the form again with sanitized values/error messages.
      res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
    }

    else {
      // data from form is valid
      // check if Genre with same name already exists
      Genre.findOne({ 'name': req.body.name })
      .exec( function(err, found_genre) {
        if (err) { return next(err); }

        if (found_genre) {
          // Genre exists, redirect to its detail page
          res.redirect(found_genre.url);
        }
        else {
          genre.save(function (err) {
            if (err) { return next(err); }
            // Genre saved. Redirect to genre detail page.
            res.redirect(genre.url);
          });
        }
      });
    }
  }
];

// display Genre delete form on GET
exports.genre_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
}

// handle Genre delete on POST
exports.genre_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
}

// display Genre update form on GET
exports.genre_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
}

// handle Genre update on POST
exports.genre_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
}
