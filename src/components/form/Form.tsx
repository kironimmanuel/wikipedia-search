import { AiOutlineSearch } from "react-icons/ai";
import { IForm } from "../../types/typings";

const Form = ({ handleSubmit, inputRef }: IForm) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form-input" ref={inputRef} />
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        <span>
          <AiOutlineSearch />
        </span>
        search
      </button>
    </form>
  );
};
export default Form;
