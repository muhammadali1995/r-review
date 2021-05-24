//check if the user has the required role to access the route
const verify = (...permittedRoles) => {
  return (req, res, next) => {
    const { user } = request;

    if (user && permittedRoles.includes(user.role)) {
      next(); // has the role, can continue
    } else {
      response.status(403).json({ message: "Forbidden" });
    }
  };
};

module.exports = verify;
