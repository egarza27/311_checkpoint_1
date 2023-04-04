let { users } = require("../data");

module.exports = {
  list: (req, res) => res.json(users),
  show: (req, res) => {
    if (!users.find((user) => user.id === parseInt(req.params.id))) {
      return res.status(404).send("User not found");
    }
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
  update: (req, res) => {
    console.log(req.body);
    if (!users.find((user) => user.id === parseInt(req.params.id))) {
      return res.status(400).send("User not found");
    }
    users = users.map((user) => {
      if (user.id === parseInt(req.params.id)) {
        return {
          id: parseInt(req.params.id),
          ...req.body,
        };
      }
      return user;
    });
    res.json(req.body);
    console.log(users);
  },
  delete: (req, res) => {
    console.log(req.body);
    if (!users.find((user) => user.id === parseInt(req.params.id))) {
      return res.status(400).send("User not found");
    }
    let deletedUser = users.filter((obj) => obj.id !== parseInt(req.params.id));
    console.log(deletedUser);
    console.log(users);
    res.send("User deleted");
  },
};
