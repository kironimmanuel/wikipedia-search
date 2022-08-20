import { useState } from 'react'
import { toast } from 'react-toastify'
const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch='

export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async searchValue => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${searchValue}`)
      const data = await response.json()
      const results = data.query.search
      if (results.length < 1) {
        toast.warn('No matching results found')
        setLoading(false)
        setData([])
      } else {
        setData(results)
        setLoading(false)
      }
    } catch (error) {
      toast.error('An error occurred')
      setLoading(false)
    }
  }

  return [{ loading, data }, fetchData, setLoading]
}
