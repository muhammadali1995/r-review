//check if the user has the required role to access the route
const verify = (...permittedRoles) => {
  return (req, res, next) => {
    const { user } = req;
    console.log(user);
    console.log(permittedRoles);
    if (user && permittedRoles.includes(user.role)) {
      next(); // has the role, can continue
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

module.exports = verify;
