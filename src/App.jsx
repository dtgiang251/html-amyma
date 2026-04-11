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
import Services from "./page/services";
import Footer from "./components/Footer";

import Blog from "./page/blog"; // Thêm dòng này
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
                <Footer />
              </>
            }
          />
          <Route path="/page/about" element={<About />} />
          <Route path="/page/funding-overview" element={<FundingOverview />} />
          <Route path="/page/our-work" element={<OurWork />} />   
          <Route path="/page/our-work-project" element={<OurWorkProject />} />   
          <Route path="/page/contact" element={<Contact />} />
          <Route path="/page/blog" element={<Blog />} />
          <Route path="/page/word" element={<Word />} />
=======
          <Route path="/page/services" element={<Services />} />
          <Route path="/page/single" element={<Single />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;