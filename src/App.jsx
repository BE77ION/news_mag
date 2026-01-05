import { useState } from "react"
import NavBar from "./components/navBar"
import NewsBoard from "./components/NewsBoard"


export const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App