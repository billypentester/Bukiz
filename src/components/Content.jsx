import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import BookCard from './BookCard'
import Pagination from './Pagination'

const Content = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    return (
        <div className="w-4/5 bg-slate-200 px-10 py-5 h-screen overflow-y-scroll">
            <header className="flex flex-1 items-center justify-between">
                <h1 className="w-2/5 text-2xl font-sans font-medium">Explore</h1>
                <SearchBar getData={(data) => setData(data)} page={page} />
            </header>
            <div className="flex flex-wrap mt-10">
                {
                    data && data.map((book, index) => (
                        book.volumeInfo.authors && book.volumeInfo.imageLinks && book.volumeInfo.title && book.volumeInfo.description ?
                        <BookCard key={index} title={book.volumeInfo.title} author={book.volumeInfo.authors[0]} image={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} />
                        : null
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                {
                    data && <Pagination pageNumber = {(page) => setPage(page)} />
                }
            </div>
        </div>
  )
}

export default Content
