import { AnimatedHeader } from './components/AnimatedHeader'
import { BlurHover } from './components/BlurHover'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
// import { SlideCarrousel } from './components/SlideCarrousel'
// import { Header } from './components/Header'
// import { Modal } from './components/Modal'
// import { StickyButton } from './components/StickyButton'

function App () {
  return (
    <main>
      <AnimatedHeader />
      <Content />
      <Content />
      <BlurHover />
      <Footer />
    </main>
  )
}

export default App
