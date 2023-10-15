const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.route("/api/users/:Id").get((req, res) => {
  const id = Number(req.params.Id);
  const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ error: 'user not fouund!' });
  return res.json(user);
})
  // .post((req, res) => {
  //   return res.json({ "name": "Abhijit" })
  // })
  // .patch((req, res) => {
  //   return res.json({ "name": "Abhijit" })
  // })
  .delete((req, res) => {
    return res.json({ "name": "Abhijit" })
  });


app.route("/api/users/:id")
  .patch((req, res) => {
    // getId stores the Id from the given Parameters in the URL.
    const getId = Number(req.params.id);

    // body stores the body in which we've to make changes.
    const body = req.body;

    // Finding the user Id from the user array.
    const userIndex = users.findIndex((user) => user.id === getId);

    // If we found a user with its Id then gotUser stores that object.
    const gotUser = users[userIndex];

    // Here gotUser has the user Object and body has the changes we have to made.
    const updatedUser = { ...gotUser, ...body };

    // After Merging them, Update the users Array.
    users[userIndex] = updatedUser;

    // Lastly, write the changes into the json file.
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ status: "Success", updatedUser });
    })
  })

// Middleware
app.use(express.urlencoded({ extended: false }));

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "pending" });
  });

  console.log("Body", body);
  return res.json({ status: "Pending" });
});


app.listen(4000, () => console.log("Server running!"));