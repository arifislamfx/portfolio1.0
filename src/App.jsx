import { Navbar, Welcome, Footer, Services } from './components';
function App() {
 

  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Footer />
    </div>
  )
}

export default App
