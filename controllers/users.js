const { users } = require("../data/index");

module.exports = {
  list: (req, res) => res.json(users),
  show: (req, res) => {
    res.json(users.find((user) => user.id === parseInt(req.params.id)));
  },
  create: (req, res) => {
    const user = {
      id: users.length + 1,
      ...req.body,
    };
    users.push(user);
    res.json(user);
    console.log(users);
  },
  delete: (req, res) => {
    let userId = req.params.id;
    let deletedUser = users.filter((obj) => obj.id !== parseInt(userId));
    console.log(deletedUser);
    res.send("User deleted");
  },
};
