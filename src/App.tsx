import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
// import { Modal } from './components/Modal'
import { StickyButton } from './components/StickyButton'

function App () {
  return (
    <main>
      <Header />
      <div className='blank-space' />
      <Content />
      <Content />
      <Content />
      <StickyButton />
      <Footer />
    </main>
  )
}

export default App
