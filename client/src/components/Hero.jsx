import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Summer Collection",
    subtitle: "Discover the new aesthetic of luxury."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Urban Streetwear",
    subtitle: "Redefining comfort and style."
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-slate-900/30" /> {/* Blue-ish dark overlay */}

              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-200 text-lg md:text-xl font-medium tracking-widest uppercase mb-4"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center mx-auto gap-2 shadow-xl shadow-white/10">
                      Shop Collection <ArrowRight size={20} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;