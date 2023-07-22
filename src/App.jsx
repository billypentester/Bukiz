import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

function App() {

  return (
    <>
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
