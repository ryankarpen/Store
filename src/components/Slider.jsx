import { useEffect, useState } from 'react'
import './Slider.css'
import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/react'



register();

const images = [
    {id: '1', image: '../combo.png'},
    {id: '2', image: '../prom1.png'},
    {id: '3', image: '../prom2.png'},
    {id: '4', image: '../prom3.png'},
]

const Slider = () => {

    const [slidePerView, setSlidePerView] = useState(2)

    useEffect(() => {
        
        const handleResize = () => {
            if(window.innerWidth < 768){
                setSlidePerView(1)
            } else{
                setSlidePerView(2)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)
    }, [])
    
  return (
    <div className="slider"> 
        <Swiper
        slidesPerView={slidePerView}
        pagination={{clickable: true}}
        navigation
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        >
            {images.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="slider" className='slide-item'/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider