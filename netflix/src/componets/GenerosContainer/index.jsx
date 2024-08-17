import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./GenerosContainer.module.css";

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

          // Retornar um objeto com o nome do gênero e os filmes
          return {
            name: genre.name,
            movies: moviesResponse.data.results,
          };
        });

        // Aguarda todas as promessas serem resolvidas
        const genresWithMoviesData = await Promise.all(
          genresWithMoviesPromises
        );
        setGenresWithMovies(genresWithMoviesData);
        console.log(genresWithMovies.name);
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
        <div key={genreWithMovies.name}>
          <h3>{genreWithMovies.name}</h3>
          <ul>
            {genreWithMovies.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GenerosContainer;
