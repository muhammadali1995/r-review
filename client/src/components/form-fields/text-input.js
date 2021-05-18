import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="alert alert-danger">{meta.error}</div>
      ) : null}
    </>
  );
};
