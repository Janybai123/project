
import './App.css';
import Header from ".///components/Header/"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import NowPlaying from './pages/Now_playing';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import MovieDetail from './pages/MovieDetail';

function App() {
  return <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/now_playin' element={<NowPlaying/>}/>
      <Route path='/top_rated' element={<TopRated/>}/>
      <Route path='/upcoming' element={<Upcoming/>}/>
      <Route path='/movie-datail/:id' element={<MovieDetail/>}/>
    </Routes>
  </div>
  

}

export default App;
