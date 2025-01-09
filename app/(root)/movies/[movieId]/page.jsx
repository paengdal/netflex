import api from '@/api';
import React from 'react';

async function MovieDetailPage(props) {
  const params = await props.params;
  const movieId = params.movieId;
  const movie = await api.get;
  return <div>MovieDetailPage</div>;
}

export default MovieDetailPage;
