import { useState } from "react";
import { Roles } from "../../utils/constants/roles";
import axios from "axios";
import { ENV } from "../../utils/constants/env";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Error } from "../error/Error";
import { MyTextInput } from "../form-fields/TextInput";
import { MySelect } from "../form-fields/Select";

const ApiUrl = `${ENV.apiUrl}/users`;

export const RegisterUserForm = (props) => {
  const history = useHistory();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const roles = Roles.map((role, index) => (
    <option key={index} value={role.value}>
      {role.name}
    </option>
  ));

  const cancel = () => {
    history.push("/");
  };

  return (
    <div className="col col-md-6 offset-md-3 mt-5">
      <h1>Sign up</h1>
      {error ? <Error message={error} /> : ""}
      <Formik
        initialValues={{
          name: "",
          email: "",
          role: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 character or more")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email addresses")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Must be more than 6 characters")
            .required("Passwrod is required"),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Password Cofirmation is required"),
          role: Yup.string()
            .oneOf(["user", "owner"], null)
            .required("Roles is required"),
        })}
        onSubmit={async (values) => {
          setSubmitting(true);
          axios.post(ApiUrl, values).then(
            (res) => {
              setSubmitting(false);
              history.push("/login");
            },
            (error) => {
              setError(error);
            }
          );
        }}
      >
        <Form>
          <MyTextInput
            className="form-control"
            name="name"
            type="text"
            placeholder="John Doe"
            label="Name"
          />
          <MyTextInput
            className="form-control"
            name="email"
            type="email"
            placeholder="example@mail.ru"
            label="Email"
          />
          <MySelect className="form-control" label="Role" name="role">
            <option value="">Select a role</option>
            {roles}
          </MySelect>
          <MyTextInput
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <MyTextInput
            className="form-control"
            name="passwordConfirmation"
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
          />
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-secondary flex-grow-1"
              onClick={cancel}
            >
              Cancel
            </button>
            <button
              disabled={submitting}
              className="btn btn-outline-primary ms-5 flex-grow-1"
              type="submit"
            >
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
