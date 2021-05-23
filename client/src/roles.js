const isOwner = (user) => user && user.role.includes("owner");
const isCustomer = (user) => user && user.role.includes("user");
const isAdmin = (user) =>  user && user.role.includes("admin");

export { isAdmin, isOwner, isCustomer };
