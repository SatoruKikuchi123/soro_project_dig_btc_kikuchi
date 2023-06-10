const { createDbModels } = require("../db");
const { createServer } = require("../../server.js");
const app = createServer(createDbModels());

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

describe("GET /api", () => {
  describe("GET /api/quotes without query params", () => {
    let request;

    beforeEach(() => {
      request = chai
        .request(app)
        .get("/api/quotes")
        .set("Content-Type", "application/json");
    });

    it("should return status 200.", (done) => {
      request.end((_, res) => {
        res.status.should.equal(200);
        done();
      });
    });
    // it("should respond with JSON.", (done) => {
    //   request.end((_, res) => {
    //     res.should.be.json;
    //     done();
    //   });
    // });
  });
});

//     it('should have a "quotes" property containing an array.', (done) => {
//       request.end((_, res) => {
//         const responseObject = JSON.parse(res.text);
//         responseObject.should.have.a.property("quotes").that.is.an("array");
//         done();
//       });
//     });

//     it('should contain only quotes with both "text" and an "author".', (done) => {
//       request.end((_, res) => {
//         const { quotes } = JSON.parse(res.text);
//         console.log("*****************", quotes);
//         for (const quote of quotes) {
//           quote.should.be.an("object");
//           quote.should.have.a.property("quote");
//           quote.should.have.a.property("name");
//           quote.quote.should.not.equal("");
//           quote.name.should.not.equal("");
//         }
//         done();
//       });
//     });
//   });

//   describe("GET /api/quotes with query params", () => {
//     it("should allow an author parameter with empty-value", (done) => {
//       chai
//         .request(app)
//         .get("/api/quotes?author=''")
//         .set("Content-Type", "application/json")
//         .end((_, res) => {
//           const { quotes } = JSON.parse(res.text);
//           quotes.length.should.equal(0);
//           done();
//         });
//     });

//     it("should allow an author parameter with legit value", (done) => {
//       chai
//         .request(app)
//         .get("/api/quotes?author=Anonymous")
//         .set("Content-Type", "application/json")
//         .end((_, res) => {
//           const { quotes } = JSON.parse(res.text);
//           quotes.length.should.equal(18);
//           done();
//         });
//     });
//   });
// });
