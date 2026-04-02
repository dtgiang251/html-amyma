import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import Needs from "./components/Needs";
import Contact from "./page/contact"; // Thêm dòng này

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
                <main className="px-4 py-16 sm:px-8 lg:px-16 xl:px-[var(--navX,108px)] max-w-screen-2xl mx-auto">
                  <section className="max-w-4xl"></section>
                </main>
              </>
            }
          />
          <Route path="/page/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
