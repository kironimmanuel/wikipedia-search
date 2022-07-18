import React, { useEffect, useRef } from 'react'
import { useFetch } from './hooks/useFetch'
import Article from './components/Article'
import logo from './assets/images/logo.png'

function App() {
  const [{ data, loading, error }, fetchData, setLoading, setError] = useFetch()
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (inputRef.current.value) {
      fetchData(inputRef.current.value)
    } else if (!inputRef.current.value) {
      setError('please type in a value')
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <section className="wiki">
      <div className="container">
        <img src={logo} alt="" />
        <h3>Wiki search</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="form-input" ref={inputRef} />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            search
          </button>
        </form>
      </div>
      <div className="results">
        {error ? <div className="error">{error}</div> : ''}
        {!loading ? (
          <div className="articles">
            <Article {...data} />
          </div>
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </section>
  )
}

export default App
