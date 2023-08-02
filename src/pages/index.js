import React from "react";
import style from "../styles/test.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  // データ配列を作成します。
  const originalData = [
    { img: "https://eiga.k-img.com/images/anime/news/118585/photo/3bc587e7c6e3b9f1/320.jpg?1682576192", description: "Image 1 description" },
    { img: "https://eiga.k-img.com/images/anime/news/118585/photo/cd9169c8b3cdeb00/320.jpg?1682576192", description: "Image 2 description" },
    { img: "https://eiga.k-img.com/images/anime/news/118585/photo/bc40e9015afd31be/320.jpg?1682576192", description: "Image 3 description" },
    { img: "https://eiga.k-img.com/images/anime/news/118585/photo/d6f2d391cd0257bc/320.jpg?1682576192", description: "Image 4 description" },
    { img: "https://eiga.k-img.com/images/anime/news/118585/photo/18470e3dee703832/320.jpg?1682576192", description: "Image 5 description" },
  ];

  const data = [...originalData, ...originalData];
  return (

    <div>
      <h1 className="text-3xl text-blue-500 text-center">23年春 人気アニメ</h1> {/* Slider title */}
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={`Slide ${index + 1}`} className={style.image} />
            <p className={style.description}>{item.description}</p> {/* Image name */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
