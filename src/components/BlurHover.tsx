import '../css/BlurHover.css'
import Image from '../assets/gym-material.webp'

export function BlurHover () {
  return (
    <article className='blur-container'>
      <div className='card'>
        <img src={Image} alt='Imagen referencial' />
      </div>

      <div className='card'>
        <img src={Image} alt='Imagen referencial' />
      </div>

      <div className='card'>
        <img src={Image} alt='Imagen referencial' />
      </div>
    </article>
  )
}
