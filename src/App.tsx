import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Modal } from './components/Modal'

function App () {
  return (
    <main>
      <Header />
      <Content />
      <Modal />
      <Content />
      <Content />
      <Footer />
    </main>
  )
}

export default App
