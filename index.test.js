const supertest = require("supertest");

describe("Routes test", () => {
  it("Main route", async () => {
    const res = await supertest("http://localhost:5000").get("/");
    expect(200);
    expect(res.text).toEqual("Backend Challenge 2021 🏅 - Covid Daily Cases");
  });
  it("Cumulative route", async () => {
    const res = await supertest("http://localhost:5000").get(
      "/cases/2020-07-06/cumulative"
    );
    expect(200);
    expect(typeof res).toEqual("object");
  });
  it("Count route", async () => {
    const res = await supertest("http://localhost:5000").get(
      "/cases/2020-07-06/count"
    );
    expect(200);
    expect(typeof res).toEqual("object");
  });
  it("Bad date format", async () => {
    const res = await supertest("http://localhost:5000").get(
      "/cases/15-03-88/count"
    );
    expect(200);
    expect(typeof res).toEqual("object");
  });
  it("Random route", async () => {
    const res = await supertest("http://localhost:5000").get("/abc");
    expect(200);
    expect(typeof res).toEqual("object");
  });
});
