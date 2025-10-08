import expres from "express";

const app = expres();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(expres.json());

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})

const users = [
  {
    id: 1,
    name: "Pravin",
  },
  {
    id: 2,
    name: "Ajay",
  },
];

// get all users
app.get("/users", (req, res) => {
  res.status(200).json({
    users: users,
  });
});

// get users by ID

app.get("/user/:id", (req, res) => {
  const userid = req.params.id;
  console.log(req.params);

  const user = users.find((u) => u.id === parseInt(userid));
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ user: user });
});

// create user
app.post("/addUser", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.status(201).json({
    message: "User added successfully",
  });
});

//update user
app.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === parseInt(userId));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  res.status(200).json(user);
});

// delete user
app.delete("/user/:id", (req, res) => {
  const user = users.filter((u) => u.id !== parseInt(req.params.id));
  // if(!user) return res.status(404).json({message:"User not found"})
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
