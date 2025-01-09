import React from 'react';
import MovieCard from './MovieCard';

function MovieSection({ title, movies }) {
  console.log(movies);
  return (
    <section className="[&+&]:mt-20">
      <h2 className="px-8 text-2xl font-bold mb-6">{title}</h2>
      <ul className="px-8 flex gap-x-5 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MovieSection;
