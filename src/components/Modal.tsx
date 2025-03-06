import { useState } from 'react'
import '../css/ModalStyles.css'
import { Cross } from '../icons/CloseCross'
import useStore from '../lib/store'

export function Modal () {
  const isHidden = useStore((state) => state.active)
  const handleChange = useStore((state) => state.changeActive)
  const activeStyle = 'container-modal'
  const disableStyle = 'non-display'

  return (
    <article className={isHidden ? disableStyle : activeStyle}>
      <div className='container-info-modal'>
        <button className='close-icon' onClick={handleChange}>
          <Cross />
        </button>
        <h2>Modal title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos temporibus nobis id vero velit quasi accusamus recusandae perferendis aliquid?</p>
      </div>
    </article>
  )
}
