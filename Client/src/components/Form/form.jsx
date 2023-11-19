import style from "./form.module.css";
import { useState } from "react";
import validation from "./Validation";

let { form } = style;

const Form = (props) => {
  // eslint-disable-next-line react/prop-types
  const { login } = props;
  const [errors, setErrors] = useState([]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.tituloH3}>
          <h3>Contact Form</h3>
        </div>
        <div className={form}>
          <div className={style.userContainer}>
            <label htmlFor="">Email: </label>
            <input
              name="email"
              type="text"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>
        <div className={form}>
          <div className={style.passwordContainer}>
            <label htmlFor="">Password: </label>
            <input
              name="password"
              type=""
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>
        <div>
          <button className={style.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
