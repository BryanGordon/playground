import Image from '../assets/gym-material.webp'
import '../css/TransitionStyles.css'
import { Link } from 'react-router-dom'

export function Transition () {
  return (
    <article>
      <div>
        <Link to='/transition-detail' viewTransition>
          <img src={Image} alt='Imagen de muestra' />
        </Link>
      </div>
    </article>
  )
}
