export {};
const supertest = require("supertest")
const request = supertest("http://localhost:3000")

describe("When creating a new dictionary", () => {
  it("should respond with 201 created", () => {
    return request.post("/api/games").expect(201)
  })

  it("should respond with a 4X4 game board", async () => {
    const response = await request.post("/api/games")
    expect(response.body).toHaveProperty("tiles");
    expect(response.body).toHaveProperty("tiles");
    expect(response.body.tiles.length).toBe(4);
    expect(response.body.tiles[0].length).toBe(4);
  })
})
