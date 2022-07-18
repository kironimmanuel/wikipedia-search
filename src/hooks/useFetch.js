import { useState } from 'react'
const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch='

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const fetchData = async searchValue => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${searchValue}`)
      const data = await response.json()
      const results = data.query.search
      if (results.length < 1) {
        setError('no matching result, please try again')
        setLoading(false)
        setData([])
      } else {
        setError('')
        setData(results)
        setLoading(false)
      }
    } catch (error) {
      setError('an error occurred')
      setLoading(false)
    }
  }

  return [{ loading, data, error }, fetchData, setLoading, setError]
}
