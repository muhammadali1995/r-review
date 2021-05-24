import { useHistory } from "react-router";

export const FormButtons = ({ SubmitButtonText, Submitting}) => {
  const history = useHistory();
  const onCancel = () => {
    history.goBack();
  };
  return (
    <div className="my-4">
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-secondary flex-grow-1"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          disabled={Submitting}
          className="btn btn-outline-primary ms-5 flex-grow-1"
          type="submit"
        >
          {SubmitButtonText}
        </button>
      </div>
    </div>
  );
};
