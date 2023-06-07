import React, { ChangeEvent, useContext, useState } from "react";
import "./Login.css";
import { VariableContext } from "../App";
import SignUp from "./SignUp";
const fetchURL =
  process.env.NODE_ENV === "production"
    ? "https://sataro-zamas.onrender.com"
    : "http://localhost:3333";

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

export default function Login() {
  const [, , , , , setUserData] = useContext(VariableContext);
  const [formValues, setFormValues] = useState({ "user-id": "", password: "" });
  const [signUpFlag, setSignUpFlag] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    (async () => {
      let fetchData = await fetch(fetchURL + "/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })
        .then((e) => e.json())
        .catch((error) => {
          return false;
        });
      fetchData
        ? setUserData(fetchData)
        : alert("サインインに失敗しました...IDとパスワードを確認してください");
      fetchData = null;
    })();
  };

  return (
    <>
      {!signUpFlag ? (
        <>
          <div className="formContainer">
            <div className="formBox">
              <form onSubmit={handleLogin}>
                <h1>K J K</h1>
                <hr />
                <div className="uiForm">
                  <div className="formField">
                    <label>USER ID</label>
                    <input
                      type="text"
                      pattern="^[0-9]+$"
                      minLength={4}
                      maxLength={15}
                      name="user-id"
                      placeholder="UserId (Only Numbers)"
                      value={formValues["user-id"]}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label>PASSWORD</label>
                    <input
                      type="password"
                      pattern="^[a-zA-Z0-9]+$"
                      minLength={4}
                      maxLength={15}
                      name="password"
                      placeholder="Password"
                      value={formValues.password}
                      required
                      autoComplete="on"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <button className="submitButton">LOGIN</button>
                </div>
              </form>
              <button
                onClick={() => {
                  setSignUpFlag(true);
                }}
                className="signUpButton"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </>
      ) : (
        <SignUp setSignUpFlag={setSignUpFlag} />
      )}
    </>
  );
}

//   return (
//     <>
//       {!signUpFlag ? (
//         <>
//           <section className="formContainer">
//             <article>
//               <nav>
//                 <h1>KSK ZAMAS</h1>
//               </nav>
//               <section>
//                 <p>USER ID：</p>
//                 <input
//                   type="text"
//                   pattern="^[0-9]+$"
//                   name="user-id"
//                   placeholder="user id  (※number only)"
//                   value={formValues["user-id"]}
//                   minLength={4}
//                   onChange={(e) =>
//                     setFormValues({
//                       ...formValues,
//                       [e.target.name]: e.target.value,
//                     })
//                   }
//                 />
//                 <p>PASSWORD：</p>
//                 <input
//                   type="password"
//                   pattern="^[a-zA-Z0-9]+$"
//                   name="password"
//                   placeholder="password"
//                   value={formValues.password}
//                   minLength={4}
//                   onChange={(e) =>
//                     setFormValues({
//                       ...formValues,
//                       [e.target.name]: e.target.value,
//                     })
//                   }
//                 />
//                 <button onClick={signIn}>LOGIN</button>
//                 <p className="textLink" onClick={() => setSignupFlag(true)}>
//                   ~ create new accoount ~
//                 </p>
//               </section>
//             </article>
//           </section>
//         </>
//       ) : (
//         <SignUp setSignupFlag={setSignupFlag} />
//       )}
//     </>
//   );
// }
