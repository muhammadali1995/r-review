import axios from "axios";
import { useHistory } from "react-router";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { MyTextInput } from "../form-fields/TextInput";
import { ENV } from "../../utils/constants/env";
import { Formik, Form } from "formik";
import { Error } from "../error/Error";
import { userContext } from "../../context/UserContext";

export const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const {setCurrentUser} = useContext(userContext);
  const [error, setError] = useState("");
  const history = useHistory();

  const apiUrl = `${ENV.apiUrl}/users/login`;

  const onCancel = () => {
    history.push("/");
  };
  return (
    <div className="col col-md-6 offset-md-3 mt-5">
      <h1>Login</h1>
      {error ? <Error message={error} /> : ""}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={async (values) => {
          console.log(apiUrl);
          setSubmitting(true);
          axios.post(apiUrl, values).then(
            (res) => {
              setSubmitting(false);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setCurrentUser(res.data.user);
              history.push("/");
            },
            (error) => {
              setSubmitting(false);
              setError(error);
            }
          );
        }}
      >
        <Form>
          <MyTextInput
            className="form-control"
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
          />
          <MyTextInput
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-secondary flex-grow-1"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              disabled={submitting}
              className="btn btn-outline-primary ms-5 flex-grow-1"
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
