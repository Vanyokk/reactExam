import "./ModalContent.css"

export default function ModalContent({ closeModal }) {
    return (
        <>
        
        <div className="ReactModal__Content">

            <h2>Корзина</h2>
            <p>Текст модального окна</p>
            <button onClick={closeModal}>Закрыть</button>

        </div>
        
        </>
    )
}