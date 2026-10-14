import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SauceSpices from './pages/SauceSpices'
import BbqSkyView from './pages/BbqSkyView'
import TressesSalon from './pages/TressesSalon'
import LaTresseSpa from './pages/LaTresseSpa'
import AstanaBanquet from './pages/AstanaBanquet'
import AstanaMeeting from './pages/AstanaMeeting'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-rooms" element={<Rooms />} />
        <Route path="/sauce-spices" element={<SauceSpices />} />
        <Route path="/bbq-sky-view-restaurant" element={<BbqSkyView />} />
        <Route path="/tresses-beauty-salon" element={<TressesSalon />} />
        <Route path="/la-tresse-spa" element={<LaTresseSpa />} />
        <Route path="/astana-banquet-hall" element={<AstanaBanquet />} />
        <Route path="/astana-meeting-room" element={<AstanaMeeting />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
    </Routes>
  )
}