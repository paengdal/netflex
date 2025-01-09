// function MovieCard({ movie }) {
//   return (
//     <article>
//       <div className="w-96 h-48 bg-white" />
//       <h6 className="mt-2.5 text-xl">{movie.title}</h6>
//     </article>
//   );
// }

// export default MovieCard;

import Image from 'next/image'; // Image 컴포넌트를 가져오는 부분이 필요할 수 있습니다.
import Link from 'next/link';

function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <article>
        <div className="relative w-96 aspect-video">
          {/* 닫는 꺽쇠 추가 */}
          <Image
            alt={movie.title}
            fill
            src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
            className="object-cover"
            sizes="100%"
          />
        </div>
        <h6 className="mt-2.5 text-xl">{movie.title}</h6>
      </article>
    </Link>
  );
}

export default MovieCard;
