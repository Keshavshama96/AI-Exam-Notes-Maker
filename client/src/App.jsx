import { useState } from "react"
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "./services/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
export const serverUrl ="https://ai-exam-notes-maker-server.onrender.com"
import History from "./pages/History";
import Pricing from "./pages/Pricing";
import Notes from "./pages/Notes";
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentFailed from "./pages/PaymentFailed"

function App() {
  const dispatch=useDispatch()
  // const [count, setCount] = useState(0)
    useEffect(()=>{
    getCurrentUser(dispatch)
    },[dispatch])

   // Get user data from Redux store
   const { userData } = useSelector((state) => state.user);
   
 return (
    <>
    <Routes>
     <Route path="/" element={userData ? <Home /> : <Navigate to="/auth" replace />}
    />
    <Route path="/auth" element={userData ? <Navigate to="/" replace /> : <Auth />}
    />
      <Route path='/history' element={userData ? <History/> : <Navigate to="/auth" replace/>}/>
    <Route path='/notes' element={userData ? <Notes/> : <Navigate to="/auth" replace/>}/>
    <Route path='/pricing' element={userData ? <Pricing/> : <Navigate to="/auth" replace/>}/>
      <Route path='/payment-success' element={<PaymentSuccess/>}/>
     <Route path='/payment-failed' element={<PaymentFailed/>}/>
    </Routes>

     </>
  )
}

export default App
