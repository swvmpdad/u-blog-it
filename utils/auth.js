const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
      // If the user is already logged in, redirect to the homepage
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
      next();  
    };
  };

  module.exports = withAuth;