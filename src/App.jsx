import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
    
     <Routes>
       <Route path='/' element={<TopBar/>}>
        <Route index element={<HomePage />} />
      </Route>     
        </Routes>
  
</>
)
}

export default App;

