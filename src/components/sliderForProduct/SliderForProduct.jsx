import { products } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider({photo1,photo2,photo3}) {

    return (
        <>
        
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper SingleProduct"
        >
            <SwiperSlide>
                <img src={photo1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={photo2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={photo3} alt="" />
            </SwiperSlide>
        </Swiper>
        
        </>
    )
}