import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/username", async (req, res) => {
  try {
    const { username } = req.body;
    const responce = await axios.post(
      `https://api.github.com/users/${username}`
    );
    console.log("hello");
    console.log("responce data", responce?.data);
    console.log(responce.data);
  } catch (error) {
    console.log("error fo catch", error);
  }
});

app.listen(3000);
