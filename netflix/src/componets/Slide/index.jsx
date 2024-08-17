import React, { useEffect, useState } from "react";

import axios from "axios";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import styles from "./slides.module.css";

const Slide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "449bebf341a87db98f62393f10c0ff17",
              language: "pt-BR",
            },
          }
        );

        setData(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar os filmes em alta:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, [data]);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.slides}>
        <div className="swiper">
          <div className="swiper-wrapper">
            {data.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <img
                  className={styles.imgSlide}
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
          <div
            className="swiper-button-prev"
            style={{ color: "#ffffff" }}
          ></div>
          <div
            className="swiper-button-next"
            style={{ color: "#ffffff" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
