import {useState, useEffect} from 'react'

const Pagination = ({ pageNumber }) => {

    const [page, setPage] = useState(1)


    const next = () => {
        if(page < 3) {
            setPage(page + 1)
        }
    }

    const back = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        pageNumber(page)
    }, [page])

    return (
        <nav>
            <ul class="flex">
                <li>
                    <button class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" onClick={back} aria-label="Previous">
                        <span class="material-icons text-sm">keyboard_arrow_left</span>
                    </button>
                </li>
                <li>
                    <a class={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${page === 1 ? ' bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out' : 'border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}`} href="#" onClick={() => setPage(1)}>1</a>
                </li>
                <li>
                    <a class={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${page === 2 ? ' bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out' : 'border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}`} href="#" onClick={() => setPage(2)}>2</a>
                </li>
                <li>
                    <a class={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${page === 3 ? ' bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out' : 'border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}`} href="#" onClick={() => setPage(3)}>3</a>
                </li>
                <li>
                    <button class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" onClick={next} aria-label="Next">
                        <span class="material-icons text-sm">keyboard_arrow_right</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
