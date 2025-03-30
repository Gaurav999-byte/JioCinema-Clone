import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./carousel.module.css";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5371/1740560295371-i",
      title: "Laughter Chefs",
    },
    {
      id: 2,
      imageUrl: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2459/1739443342459-i",
      title: "Fifty Shades of Grey",
    },
    {
      id: 3,
      imageUrl: "https://static.posters.cz/image/hp/60699.jpg",
      title: "One Piece",
    },
    {
      id: 4,
      imageUrl: "https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg",
      title: "Jumanji",
    }
  ];

  return (
    <section className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <img src={slide.imageUrl} alt={slide.title} className={styles.image} />
              <div className={styles.overlay}>
                <h2 className={styles.title}>{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
