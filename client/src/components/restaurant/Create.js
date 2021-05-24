import * as Yup from "yup";
import { MyTextarea } from "../form-fields/Textarea";
import { MyTextInput } from "../form-fields/TextInput";
import { Formik, Form } from "formik";
import { FormButtons } from "../form-buttons/FormButtons";
import React from "react";
import { RestautantAPI } from "./RestaurantAPI";
import { useState } from "react";
import { Error } from "../error/Error";
import { useHistory } from "react-router";

export const CreateRestaurant = () => {
  const [error, setError] = useState("");

  const history = useHistory();

  return (
    <>
      <div className="col col-md-6 offset-md-3 mt-5">
        <h1 className="mb-3">Create a new restaurant</h1>
        {error ? <Error message={error.message} /> : ""}
        <Formik
          initialValues={{
            name: "",
            description: "",
            address: "",
            photoUrl: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(1, "Must be more than a character")
              .required("Name is required"),
            description: Yup.string()
              .min(5, "Must be more than 5 charachters")
              .required("Description is required"),
            photoUrl: Yup.string().url().required("Photo url is required"),
            address: Yup.string()
              .min(5, "Must be more than 5 characters")
              .required("Address is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              await RestautantAPI.create(values);
              history.goBack();
            } catch (error) {
              setError(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {(formik) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                placeholder="La Rose"
                className="form-control"
              />
              <MyTextarea
                label="Description"
                name="description"
                placeholder="French homemades restaurant"
                className="form-control"
              />
              <MyTextarea
                label="Address"
                name="address"
                placeholder="1, Imany str, Paris"
                className="form-control"
              />
              <MyTextInput
                type="text"
                label="Photo url"
                name="photoUrl"
                className="form-control"
                placeholder="https://www.foodbusinessnews.net/ext/resources/2020/4/CoupleAtRestaurant_Lead.jpg?1587991293"
              />
              <FormButtons
                SubmitButtonText="Create"
                Submitting={formik.isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
