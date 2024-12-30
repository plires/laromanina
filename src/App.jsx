import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function App() {
  return (
    <>
      <Header />
      <Router basename='/landing/'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  )
}

export default App
