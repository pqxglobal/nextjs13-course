'use client'

import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const fetchDataFromApi = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users', {
        headers: {
          Accept: 'application/json',
          method: 'GET',
        },
      })
      if (response) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 cursor-pointer"
        onClick={() => fetchDataFromApi()}
      >
        {loading ? 'Loading...' : 'Call my API'}
      </button>
    </div>
  )
}
