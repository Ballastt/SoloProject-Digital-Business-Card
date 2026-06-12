import About from './components/about'
import Atf from './components/atf'
import Footer from './components/footer'
import Info from './components/info'
import Interests from './components/interests'


function App() {
  return (
    <>
      <div className="card-container">
        <Atf />
        <section className="card-content">
          <Info />
          <About />
          <Interests />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
