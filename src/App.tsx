import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import DigitalMarketing from "./pages/services/DigitalMarketing"
import SocialMedia from "./pages/services/SocialMedia"
import Seo from "./pages/services/Seo"
import DigitalMarketingStrategy from "./pages/services/DigitalMarketingStrategy"
import LeadGeneration from "./pages/services/LeadGeneration"
import VideoMarketing from "./pages/services/VideoMarketing"

function App() {
  return (
    <div>
      <div className="">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/digital-marketing-strategy" element={<DigitalMarketingStrategy/>}/>
          <Route path="/services/lead-generation-agency" element={<LeadGeneration/>}/>
          <Route path="/services/video-marketing" element={<VideoMarketing/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
