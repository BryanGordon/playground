import { useState } from 'react'
import '../css/ModalStyles.css'
import { Cross } from '../icons/CloseCross'

export function Modal () {
  const [isHidden, setIsHidden] = useState(true)

  const handleChange = () => {
    setIsHidden(!isHidden)
    console.log(isHidden)
  }

  return (
    <article className='container-modal'>
      <div className='container-info-modal'>
        <button className='close-icon' onClick={() => handleChange()}>
          <Cross />
        </button>
        <h2>Modal title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos temporibus nobis id vero velit quasi accusamus recusandae perferendis aliquid?</p>
      </div>
    </article>
  )
}
