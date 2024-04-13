import Button from "../Button/Button";
import './Card.css'

import favorites from '/public/products/favorites.svg'
import { NavLink } from "react-router-dom";

export default function Card({ id, title,subtitle, price,preview }) {
    return (
        <>  
        
            <NavLink to={`/product/${id}`}><div className="card">

                <div className="card-image">
                    <img src={preview} alt="product" />
                </div>

                <div className="card-title">{title}</div>
                <div className="card-title">{subtitle}</div>
                <div className="card-price">{price} ₽</div>

                <Button backgroundColor="#333" color="#f3f3f3">Купить</Button>

                

            </div></NavLink>

        </>
    )
}