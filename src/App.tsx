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
import BrandDevelopment from "./pages/services/BrandDevelopment"
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment"
import Overview from "./pages/hubspot/Overview"
import Metaverse from "./pages/services/Metaverse"
import MarketingConsultant from "./pages/services/MarketingConsultant"

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
          <Route path="/services/brand-development" element={<BrandDevelopment/>}/>
          <Route path="/services/website-development" element={<WebsiteDevelopment/>}/>
          <Route path="/services/metaverse-experience" element={<Metaverse/>}/>
          <Route path="/services/marketing-consultant" element={<MarketingConsultant/>}/>
          <Route path="/hubspot/overview" element={<Overview/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
