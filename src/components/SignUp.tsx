import React, { useState } from "react";
import "./SignUp.css";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://sataro-zamas.onrender.com"
    : "http://localhost:3333";

const SignUp = ({
  setSignUpFlag,
}: {
  setSignUpFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [inputData, setInputData] = useState({
    "user-id": "",
    "first-name": "",
    "last-name": "",
    password: "",
  });

  const submitInputData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    (async () => {
      const response = await fetch(fetchURL + "/singnup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      })
        .then((e) => e.json())
        .catch(() => false);
      switch (response) {
        case 1:
          alert("入力したIDはすでに使用されています...");
          break;
        case 2:
          alert("あなたのアカウントは作成されました！！！！！");
          setSignUpFlag(false);
          break;
      }
    })();
  };

  return (
    <div className="popUpBack2">
      <div className="formContainer2">
        <div className="formBox2">
          <form onSubmit={submitInputData}>
            <h1>SIGN UP</h1>
            <hr />
            <div className="uiForm2">
              <div className="formField2">
                <label>USER ID</label>
                <input
                  type="text"
                  pattern="^[0-9]+$"
                  minLength={4}
                  maxLength={15}
                  name="user-id"
                  placeholder="User Id (Only Numbers)"
                  value={inputData["user-id"]}
                  required
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="formField2">
                <label>FIRST NAME</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  value={inputData["first-name"]}
                  required
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="formField2">
                <label>LAST NAME</label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  value={inputData["last-name"]}
                  required
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="formField2">
                <label>PASSWORD</label>
                <input
                  type="password"
                  pattern="^[a-zA-Z0-9]+$"
                  minLength={4}
                  maxLength={15}
                  name="password"
                  placeholder="Password"
                  value={inputData.password}
                  required
                  autoComplete="on"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              {/* ボタン */}
              <button className="submitButton2">SUBMIT</button>
            </div>
          </form>
          <button
            className="closeButton"
            onClick={() => {
              setSignUpFlag(false);
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

//   return (
//     <>
//       <section className="signupFormContainer">
//         <article>
//           <nav>
//             <h1>SingUp Form</h1>
//           </nav>
//           <section>
//             <p>
//               USER ID<span></span>
//             </p>
//             <input
//               type="text"
//               pattern="^[0-9]+$"
//               minLength={4}
//               maxLength={15}
//               name="user-id"
//               placeholder="user id  (※number only)"
//               value={inputData["user-id"]}
//               required
//               onChange={(e) =>
//                 setInputData({ ...inputData, [e.target.name]: e.target.value })
//               }
//             />
//             <p>FIRST NAME</p>
//             <input
//               type="text"
//               name="first-name"
//               placeholder="lirst name"
//               value={inputData["first-name"]}
//               onChange={(e) =>
//                 setInputData({ ...inputData, [e.target.name]: e.target.value })
//               }
//             />
//             <p>LAST NAME</p>
//             <input
//               type="text"
//               name="last-name"
//               placeholder="last name"
//               value={inputData["last-name"]}
//               onChange={(e) =>
//                 setInputData({ ...inputData, [e.target.name]: e.target.value })
//               }
//             />
//             <p>PASSWORD</p>
//             <input
//               type="password"
//               pattern="^[a-zA-Z0-9]+$"
//               minLength={4}
//               maxLength={15}
//               name="password"
//               placeholder="password"
//               value={inputData.password}
//               autoComplete="on"
//               onChange={(e) =>
//                 setInputData({ ...inputData, [e.target.name]: e.target.value })
//               }
//             />
//             <div className="sinupButton">
//               <button onClick={submit}>SUBMIT</button>
//               <button
//                 onClick={() => {
//                   setSignUpFlag(false);
//                 }}
//               >
//                 CLOSE
//               </button>
//             </div>
//           </section>
//         </article>
//       </section>
//     </>
//   );
// };
