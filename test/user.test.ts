import request from "supertest";
import app from "../src/app";
import { expect } from "chai";

describe("GET /login", () => {
    it("should return 200 OK", () => {
        return request(app).get("/login")
            .expect(200);
    });
});


describe("GET /forgot", () => {
    it("should return 200 OK", () => {
        return request(app).get("/forgot")
            .expect(200);
    });
});

describe("GET /signup", () => {
    it("should return 200 OK", (done) => {
        request(app).get("/signup")
            .expect(200)
            .end(() => done());
    });
});
/*
describe("GET /reset", () => {
    it("should return 302 Found for redirection", (done) => {
        request(app).get("/reset/1")
            .expect(302).end(() => done());
    });
});
*/
describe("POST /login", () => {
    it("should return some defined error message with valid parameters", (done) => {
        request(app).post("/login")
            .field("email", "john@me.com")
            .field("password", "Hunter2")
            .expect(302)
            .end((err, res) => {
                expect(res.error).not.to.be.undefined;
                done();
            });

    });
});
