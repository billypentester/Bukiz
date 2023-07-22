import React from 'react'
import logo from './../assets/images/logo.png'

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-slate-100 h-screen shadow-xl p-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-1/3" />
        <div className="w-2/3 ms-5">
          <h1 className="text-gray-700 text-3xl font-sans font-medium">Bukiz</h1>
          <h3 className="text-gray-400 font-sans font-medium">Unveiling Worlds</h3>
        </div>
      </div>
      <div className="mt-10">
        <ul className="space-y-5">
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Dashboard
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Books
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Authors
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Favourite
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Publisher
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
          <li className="text-gray-700 font-sans font-medium">
            <a href="#" className="text-gray-700 font-sans font-medium flex items-center justify-between">
              Users
              <svg class="h-5 w-5 bi bi-chevron-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> 
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="blue"></path> 
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
