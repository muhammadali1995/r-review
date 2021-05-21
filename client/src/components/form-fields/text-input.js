import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="mt-2" htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="mt-1 alert alert-danger">{meta.error}</div>
      ) : null}
    </>
  );
};
