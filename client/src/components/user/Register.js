import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Roles } from "../../utils/constants/roles";
import axios from "axios";
import { ENV } from "../../utils/constants/env";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Error } from "../error/Error";
import { MyTextInput } from "../form-fields/text-input";

const ApiUrl = `${ENV.api}/users`;

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

export const RegisterUserForm = (props) => {
  const history = useHistory();

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const roles = Roles.map((role, index) => (
    <option key={index} value={role.value}>
      {role.name}
    </option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    axios.post(ApiUrl, formData).then(
      (res) => {
        setSubmitting(false);
        history.push("/login");
      },
      (error) => {
        setSubmitting(false);
      }
    );
  };

  const handleInputChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <h1>Sign up</h1>
      {error ? <Error message={error} /> : ""}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          role: "",
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
        onSubmit={async (values, { setSubmitting }) => {
          delete values.passwordConfirmation;
          axios.post(ApiUrl, values).then(
            (res) => {
              setSubmitting(false);
              history.push("/login");
            },
            (error) => setError(error)
          );
        }}
      >
        <Form>
          <MyTextInput name="name" type="text" placeholder="Ali" label="Name" />
        </Form>
      </Formik>
    </>
  );
};
