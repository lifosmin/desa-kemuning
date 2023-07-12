import { Animate, Section } from '@/components'
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fadeInLeft } from '@/components/animation/variants';
import { Autoplay, Pagination, Navigation } from "swiper";
import { DynamicImage } from '@/components/DynamicImage';

const logos = [
    {
        url: "/logos/corps/1.png"
    },
    {
        url: "/logos/corps/2.png"
    },
    {
        url: "/logos/corps/3.png"
    },
    {
        url: "/logos/corps/4.png"
    },
    {
        url: "/logos/corps/5.png"
    },
    {
        url: "/logos/corps/6.png"
    }
]


export const Banner = () => {
  return (
    <Animate variants={fadeInLeft} triggerOnce={true}>
        
        <Flex mt={8} px={0} position="relative" height={"100%"}>
            <DynamicImage alt="" src="/banner/idul.png" mb={10} width={"100%"} />
            
        </Flex>
        <Flex mb={12}>
        <Swiper
            speed={6000}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 0, // 2 seconds
            }}
            modules={[Autoplay]}
            >
                <Box transitionTimingFunction="linear">
                    {logos.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image alt="" width={"80px"} src={item.url} />
                        </SwiperSlide>
                    ))}
                </Box>
                
            </Swiper>
        </Flex>
        
    </Animate>
  )
}
