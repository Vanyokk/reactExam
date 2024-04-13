import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"

import Slider from "../components/Slider/Slider"

import { products } from "../data"
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import { useState } from "react";

export default function HomePage() {

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filteredProducts = products.filter((item) => 

        item.title.toLowerCase().includes(query.toLocaleLowerCase())

    )

    const sortProducts = (sorting, products) => {

        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => parseFloat(a.price)- parseFloat(b.price))
            case 'priceDescending':
                return [...products].sort((a, b) => parseFloat(b.price)- parseFloat(a.price))
            case 'nameA':
                return [...products].sort((a, b) => a.title.localeCompare(b.title))
            case 'nameZ':
                return [...products].sort((a, b) => b.title.localeCompare(a.title))
            default: 
                return products
        }

    }

    const fullSorting = sortProducts(sorting, filteredProducts)

    return (
        <>
        <Banner />
        <div className="container">
        <main>

        

        <h2>Каталог</h2>

        <div className="filtered">

                <Filter sorting={sorting} onSortingChange={onSortingChange} />

                <Search query={query} onChangeQuery={onChangeQuery} />

        </div>

        <div className="cards">

            {
                
                fullSorting.map((product, index) => (
                    <Card key={index} {...product} />
                ))
                
            }

        </div>

        <h2>Популярные товары</h2>

        <div className="favorites">

            <Slider />

        </div>

        

        </main>
        </div>
        
        </>
    )
}