import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import Needs from "./components/Needs";
import Contact from "./page/contact";
import About from "./page/about";
import FundingOverview from "./page/funding-overview";
import OurWork from "./page/our-work";
import OurWorkProject from "./page/our-work-project";
import OurWorkAppPage from "./page/our-work-app-page";

import Services from "./page/services";
import Services2 from "./page/services2";
import Services3 from "./page/services3";
import Services4 from "./page/services4";
import Blog from "./page/blog";
import Footer from "./components/Footer";
 
import Word from "./page/word"; // Thêm dòng này
import Single from "./page/single"; // Thêm dòng này

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-charcoal">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Logos />
                <Problem />
                <Needs />
                
              </>
            }
          />
          <Route path="/page/about" element={<About />} />
          <Route path="/page/funding-overview" element={<FundingOverview />} />
          <Route path="/page/our-work" element={<OurWork />} />   
          <Route path="/page/our-work-project" element={<OurWorkProject />} />   
          <Route path="/page/our-work-app-page" element={<OurWorkAppPage />} />   
          <Route path="/page/contact" element={<Contact />} />
          <Route path="/page/blog" element={<Blog />} />
          <Route path="/page/word" element={<Word />} /> 
          <Route path="/page/services" element={<Services />} />
          <Route path="/page/services2" element={<Services2 />} />
          <Route path="/page/services3" element={<Services3 />} />
          <Route path="/page/services4" element={<Services4 />} />
          <Route path="/page/single" element={<Single />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;