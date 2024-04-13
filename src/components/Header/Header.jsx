
import basket from '../../../public/icons/basket.svg'

import './Header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalContent from '../ModalContent/ModalContent'
import Modal from 'react-modal'


export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setModalIsOpen(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            <div className="container">
            <header className="header">

                <NavLink to="/">
                    <div className="logo">

                    
                    <a href="#">SAFQ</a>

                    </div>
                </NavLink>

                <ul className="nav">

                    <NavLink to="/"><a href="">Главная</a></NavLink>
                    <a href="#popular">Популярные товары</a>
                    


                </ul>

                <div className="icons">


                    <img onClick={openModal} className='basket' src={basket} alt="basket" />
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <ModalContent closeModal={closeModal} />
                    </Modal>
                    
                </div>

            </header>
            </div>
        </>
    )
}