import styled from 'styled-components'

const Wrapper = styled.section`
  .wiki {
    padding: 4.5rem 0;
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .container {
    text-align: center;
  }
  .container img {
    width: 200px;
  }
  .container h3 {
    margin-bottom: 2rem;
  }
  .form {
    background: #fff;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem;
    border-radius: var(--borderRadius);
    display: grid;
    grid-template-columns: auto 100px;
  }
  .form-input,
  .submit-btn {
    padding: 0.375rem 0.75rem;
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: 1.2rem;
      margin-bottom: -0.3rem;
    }
  }
  .form-input {
    border-right: transparent;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .submit-btn {
    border: 1px solid var(--primary-500);
    border-left: transparent;
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    text-transform: capitalize;
    background: var(--black);
    color: var(--white);
    transition: var(--transition);
    cursor: pointer;
  }
  .submit-btn:hover {
    /* color: var(--primary-200); */
    background-color: var(--grey-700);
  }
  .results {
    padding: 2rem 0;
  }
  .error {
    text-align: center;
    text-transform: capitalize;
    color: var(--red-dark);
  }
  .articles {
    display: grid;
    gap: 1rem;
  }
  .articles a {
    display: block;
    background: var(--white);
    color: var(--textColor);
    padding: 1.5rem 2rem;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }
  .articles p {
    color: var(--grey-500);
    transition: var(--transition);
  }
  .articles a:hover {
    background: var(--black);
    color: var(--white);
  }
  @media screen and (min-width: 768px) {
    .articles {
      grid-template-columns: 1fr 1fr;
    }
    .form {
      max-width: 600px;
    }
  }
  @media screen and (min-width: 992px) {
    .articles {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default Wrapper
