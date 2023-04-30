import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Likes from './components/Likes/Likes.jsx';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainApp />}>
          <Route path={""} element={<Home />} />
          <Route path={"Likes"} element={<Likes />} />
          <Route path={"Profile"} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function MainApp(){
  return(
    <main className="app-main">
      <Sidebar/>
      <Outlet />
    </main>
  )
}

export default App;
