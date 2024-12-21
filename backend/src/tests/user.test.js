const request = require("supertest");
const express = require("express");
const userRoutes = require("../routes/users");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("User Routes", () => {
  it("GET /api/users - should return an empty array", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("POST /api/users - should create a new user", async () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    const res = await request(app).post("/api/users").send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "John Doe");
  });
});