import './App.css'
import AppToolBar from "./components/AppTooBar/AppToolBar";
import {Route, Routes} from "react-router-dom";
import Posts from "./components/posts/Posts";
import NewNews from "./components/news/NewNews";
import FullPost from "./components/posts/FullPost";

function App() {
  return (
    <>
        <header>
            <AppToolBar/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Posts/>}/>
                <Route path='send' element={<NewNews/>}/>
                <Route path='/news/:id' element={<FullPost/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App
