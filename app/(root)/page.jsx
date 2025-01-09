import MovieSection from './_components/MovieSection';
import api from '@/api';

async function HomePage() {
  //아래 네 개의 api통신이 서로를 기자리지 않고 병렬적으로 통신 시작
  const nowPlayingMoviesPromise = api.getMovieList('now_playing');
  const popularPlayingMoviesPromise = api.getMovieList('popular');
  const topPlayingMoviesPromise = api.getMovieList('top_rated');
  const upcomingPlayingMoviesPromise = api.getMovieList('upcoming');
  const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
    await Promise.all([
      nowPlayingMoviesPromise,
      popularPlayingMoviesPromise,
      topPlayingMoviesPromise,
      upcomingPlayingMoviesPromise,
    ]);

  return (
    <main className="py-10">
      <div className="gap-y-20 flex flex-col">
        <MovieSection title=" 현재 상영중이 영화" movies={nowPlayingMovies} />
        <MovieSection title=" 나중에 상영중이 영화" movies={popularMovies} />
        <MovieSection title=" 미래에 상영중이 영화" movies={topRatedMovies} />
        <MovieSection title=" 언젠가 상영중이 영화" movies={upcomingMovies} />
      </div>
    </main>
  );
}

export default HomePage;
