import React, { useRef } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from './assets/images/logo.png'
import Wrapper from './assets/wrappers/App.js'
import Form from './components/form/Form'
import Article from './components/ui/Article'
import Loading from './components/ui/Loading'
import { useFetch } from './hooks/useFetch'

function App() {
  const [{ data, loading }, fetchData] = useFetch()
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (inputRef.current.value) {
      fetchData(inputRef.current.value)
    } else if (!inputRef.current.value) {
      toast.info('Please fill out the search field')
    }
  }

  return (
    <Wrapper>
      <section className="wiki">
        <div className="container">
          <img src={logo} alt="" />
          <h3>Wiki search</h3>
          <Form handleSubmit={handleSubmit} inputRef={inputRef} />
        </div>
        <div className="results">
          {!loading ? (
            <div className="articles">
              <Article {...data} />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggablePercent={80}
        pauseOnHover={false}
        transition={Slide}
        hideProgressBar
        closeOnClick
      />
    </Wrapper>
  )
}

export default App
