import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SearchBar = ({getData, page}) => {

  const [search, setSearch] = useState('')
  const [maxResults, setMaxResults] = useState(6)

  const getBooks = async () => {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&startIndex=${(page-1)*maxResults}`)
    getData(result.data.items)
  }

  useEffect(() => {
    if (search.length > 3){
      getBooks()
    }
    else
    {
      getData([])
    }
  }, [search, page])

  return (
    <div class='w-2/5'>
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
            <div class="grid place-items-center h-full w-12 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
              class="peer h-full w-full outline-none text-md text-gray-700 pr-2"
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your favourite book :)" 
            /> 
        </div>
    </div>
  )
}

export default SearchBar
