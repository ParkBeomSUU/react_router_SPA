import {Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import MyPage from './pages/Mypages';
import Login from './pages/Login';

const App =() => {
  return(
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
        <Route path='/profiles/:username' element={<Profile/>} />
        </Route>

        <Route path='/articles' element={<Articles/>} /> 
        <Route path='/:id' element={<Article/>} /> 
        
        <Route path='/login' element={<Login/>} /> 
        <Route path='/mypage' element={<mypage/>} /> 


    </Routes>
  );
};

export default App;
