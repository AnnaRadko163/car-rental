import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import {lazy, Suspense} from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

import "./App.sass"

const About = lazy(() => import("./pages/about/About"))
const Models = lazy(() => import("./pages/models/Models"))
const Testimonials = lazy(() => import("./pages/testimonials/Testimonials"))
const OurTeam = lazy(() => import("./pages/ourTeam/OurTeam"))
const Contact = lazy(() => import("./pages/contact/Contact"))

function App() {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<div className='loading'>Загрузка…</div>}>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About title="О компании"/>}/>
          <Route path="/models" element={<Models title="Модели автомобилей"/>}/>
          <Route path="/testimonials" element={<Testimonials title="Отзывы"/>}/>
          <Route path="/ourTeam" element={<OurTeam title="Наша команда"/>}/>
          <Route path="/contact" element={<Contact title="Контакты"/>}/>
          <Route path="*" element={<div className='loading'>Ошибка в адресе ссылки</div>}/>
        </Routes>
      </Suspense>
      <div className='abc'>
        <div className='abc1'></div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
