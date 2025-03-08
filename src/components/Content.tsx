import '../css/ContentStyles.css'
import Image from '../assets/gym-material.webp'
import useStore from '../lib/store'

export function Content () {
  const changeActive = useStore((state) => state.changeActive)

  return (
    <section>
      <article>
        <div className='img-content-container'>
          <img src={Image} alt='image' />
        </div>

        <div className='info-content-container'>
          <h3>Product Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, voluptas aut eum error eligendi dolorem itaque tempore mollitia expedita quasi!</p>
          <a onClick={changeActive}>Ver mas</a>
        </div>
      </article>
    </section>
  )
}
