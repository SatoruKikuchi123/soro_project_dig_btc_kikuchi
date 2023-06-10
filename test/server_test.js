const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://kjk.onrender.com"
    : "http://localhost:3333";

//  https://www.chaijs.com/plugins/chai-http/

describe("買物時短君 API Server", () => {
  //endメソッドは各expectが非同期で実行される.doneがないと
  //各ecpectが実行される前にテストをパスしてしまう。(各expectがパスしていなくても)
  //done()をendメソッドのコールバック関数の最後に書くことで各expectが実行されるまでテストがパスしているかの判定を待ってくれる。
  it("GET /lists 全リストが返ってくる必要があります", (done) => {
    (async () => {
      const res = await fetch(fetchURL + "/lists").then((e) => e.json());
      //リストがすべて返ってくるかのテスト
      expect(res.length).to.equal(8);
      //リストの一つ目のitemがあっているかのテスト
      expect(res[0].item).to.equal("かぼちゃ");
      done();
    })();
  });
});
