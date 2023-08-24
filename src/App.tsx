import { Routes, Route, redirect, Navigate, useNavigate } from "react-router-dom";
import DesktopView from "./pages/desktop/DesktopView";
import MobileView from "./pages/mobile/MobileView";
import { useEffect, useState } from "react";

function App() {

  const navigate = useNavigate()

  const [windoWidth,setWindowWidth]  = useState(window.innerWidth)


  useEffect(()=>{

    const handleWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize',handleWidth)

    return ()=> {
      window.removeEventListener('resize',handleWidth);
    }

  },[])

  useEffect(()=>{

    if(windoWidth < 650){
      navigate('/mobile-view')
    }
    else{
      navigate('/')
    }

  },[windoWidth])


  return (
    <Routes>
      <Route path="/" element={<DesktopView />} />
      <Route path="/mobile-view" element={<MobileView />} />
    </Routes>
  );
}
export default App;
