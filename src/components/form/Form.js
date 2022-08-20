const Form = ({ handleSubmit, inputRef }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form-input" ref={inputRef} />
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        search
      </button>
    </form>
  )
}
export default Form
