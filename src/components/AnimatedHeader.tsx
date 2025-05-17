import '../css/AnimaHeaderStyles.css'
import { Navbar } from './Navbar'

export function AnimatedHeader () {
  return (
    <header className='animated-header'>
      <h1 className='animated-header_title'>Animated Header</h1>
      <Navbar />
    </header>
  )
}
