import '../css/TransitionStyles.css'
import Image from '../assets/gym-material.webp'
import { Link } from 'react-router-dom'

export function TransitionDetail () {
  return (
    <section>
      <Link to='/' viewTransition>
        Volver a la página principal
      </Link>
      <article>
        <div>
          <img className='img-main' src={Image} alt='Imagen de muestra' />
        </div>

        <h2>Imagen de muestra</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione maiores temporibus quas deleniti iure exercitationem soluta qui natus dicta quis, quae eius autem inventore asperiores aliquam odio, recusandae minus?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, obcaecati quasi? Aliquam quam quisquam, facilis veritatis doloribus distinctio iure sed optio maxime recusandae accusamus voluptas.</p>
      </article>
    </section>
  )
}
