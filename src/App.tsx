import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatedHeader } from './components/AnimatedHeader'
import { BlurHover } from './components/BlurHover'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Transition } from './components/Transition'
import { TransitionDetail } from './components/TransitionDetail'
// import { SlideCarrousel } from './components/SlideCarrousel'
// import { Header } from './components/Header'
// import { Modal } from './components/Modal'
// import { StickyButton } from './components/StickyButton'

function App () {
  return (
    <Router>
        <main>
        <Routes>
          <Route path='/' element={<Transition />} />
          <Route path='/transition-detail' element={<TransitionDetail />} />
        </Routes>
        <Footer />
        </main>
      </Router>
  )
}

export default App
