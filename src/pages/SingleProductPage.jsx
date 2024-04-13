import { useParams } from "react-router-dom"
import { products } from "../data"
import Slider from "../components/sliderForProduct/SliderForProduct"
import Button from "../components/Button/Button"

export default function SingleProductPage() {

    const { id } = useParams()
    const product = products.find(product => product.id === id)
    if(!product) {
        return <h2>Данные товар не был найден!</h2>
    }
    return (
        <>  
            <div className="singleProductPage">

            
            <Slider photo1={product.photo} photo2={product.photo2} photo3={product.photo3}></Slider>
            <div>
            <h2>{product.title}</h2>
            <h3>{product.subtitle}</h3>
            <h4>Описание:<br/>{product.description}</h4>
            <h5>Цена:<br/>{product.price}</h5>
            <Button backgroundColor="#000" color="white">В корзину</Button>
            </div>
            </div>
        </>
    )
}