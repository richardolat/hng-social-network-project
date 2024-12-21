const request = require("supertest");
const express = require("express");
const postRoutes = require("../routes/posts");

const app = express();
app.use(express.json());
app.use("/api/posts", postRoutes);

describe("Post Routes", () => {
  it("GET /api/posts - should return an empty array", async () => {
    const res = await request(app).get("/api/posts");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]); // Expect the initial list of posts to be empty
  });

  it("POST /api/posts - should create a new post", async () => {
    const newPost = { title: "First Post", content: "This is my first post.", userId: 1 };
    const res = await request(app).post("/api/posts").send(newPost);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "First Post");
    expect(res.body).toHaveProperty("content", "This is my first post.");
    expect(res.body).toHaveProperty("userId", 1);
  });

  it("GET /api/posts - should return an array with the created post", async () => {
    const res = await request(app).get("/api/posts");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1); // Ensure one post exists
    expect(res.body[0]).toHaveProperty("title", "First Post");
    expect(res.body[0]).toHaveProperty("content", "This is my first post.");
    expect(res.body[0]).toHaveProperty("userId", 1);
  });
});