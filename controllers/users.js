const { users } = require("../data");

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
};
