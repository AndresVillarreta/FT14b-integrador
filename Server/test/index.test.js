const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  it("GET /character/:id", async () => {
    await agent.get("/rickandmorty/character/1").expect(201);
    await agent.get("/rickandmorty/character/10").expect(201);
    await agent.get("/rickandmorty/character/300").expect(201);
  });
  it("Responde un objeto con las propiedes 'id', 'name', 'status', 'species', 'gender', 'origin' y 'image'", async () => {
    const res = await agent.get("/rickandmorty/character/1");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("species");
    expect(res.body).toHaveProperty("gender");
    expect(res.body).toHaveProperty("origin");
    expect(res.body).toHaveProperty("image");
  });
  it("Si hay un error responde con status: 404", async () => {
    await agent.get("/rickandmorty/character/1000").expect(404);
  });
});

describe("GET /rickandmorty/login", () => {
  it("Validar Login", async () => {
    const res = await agent.get(
      "/rickandmorty/login?email=admin@admin.com&password=123456789"
    );
    expect(res.body).toEqual({
      access: true,
    });
  });
});

describe("POST /rickandmorty/fav", () => {
  it("Validar Favoritos", async () => {
    const res2 = await agent.post("/rickandmorty/fav/").send({
      status: "Alive",
      name: "Morty Smith",
      species: "Human",
      origin: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      gender: "Male",
    });
    expect(res2.body).toEqual({
      id: 1,
      status: "Alive",
      name: "Morty Smith",
      species: "Human",
      origin: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      gender: "Male",
    });
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  it("Eliminar Favoritos", async () => {
    const res1 = await agent.delete("/rickandmorty/fav/1");
    expect(res1.body).toEqual([
      {
        id: "1",
        status: "Alive",
        name: "Morty Smith",
        species: "Human",
        origin: "unknown",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        gender: "Male",
      },
    ]);
  });
});
