import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./GenerosContainer.module.css";
import CardFilme from "../CardFilme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

const GenerosContainer = () => {
  const [genresWithMovies, setGenresWithMovies] = useState([]);

  useEffect(() => {
    const fetchGenresAndMovies = async () => {
      try {
        // Primeira requisição: obter a lista de gêneros
        const genresResponse = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: "449bebf341a87db98f62393f10c0ff17",
              language: "pt-BR",
            },
          }
        );

        const genres = genresResponse.data.genres;

        // Para cada gênero, obter os filmes correspondentes
        const genresWithMoviesPromises = genres.map(async (genre) => {
          const moviesResponse = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
              params: {
                api_key: "449bebf341a87db98f62393f10c0ff17",
                language: "pt-BR",
                with_genres: genre.id,
              },
            }
          );

          return {
            name: genre.name,
            movies: moviesResponse.data.results,
          };
        });

        const genresWithMoviesData = await Promise.all(
          genresWithMoviesPromises
        );
        setGenresWithMovies(genresWithMoviesData);
      } catch (error) {
        console.error("Erro ao buscar os gêneros e filmes:", error);
      }
    };

    fetchGenresAndMovies();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Renderiza os gêneros e seus filmes */}
      {genresWithMovies.map((genreWithMovies) => (
        <div key={genreWithMovies.name} className={styles.containerFilmes}>
          <h3>{genreWithMovies.name}</h3>

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            grabCursor={true}
          >
            {genreWithMovies.movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <CardFilme
                  key={movie.id}
                  title={movie.title}
                  backdrop_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  vote_average={movie.vote_average}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default GenerosContainer;
