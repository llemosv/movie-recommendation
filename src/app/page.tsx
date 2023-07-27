import { MovieCard } from '@/components/movie-card';
import { Header } from '@/components/header';
import { Suspense, use } from 'react';
import { getMovies } from '@/utils/getRecommendedMovies';
import { Error } from '@/components/error';

export default async function Home() {
  const data = await getMovies();

  return (
    <div className="w-[846px] h-[632px] flex flex-col justify-center items-center gap-8 border-8 border-highlights-purple-light rounded-2xl bg-base-500 shadow">
      <Header />
      <div className="flex gap-9 w-[654px] h-[420px]">
        <Suspense fallback={<p className="text-black">OIIIIIIIIIIII</p>}>
          {data.error ? (
            <Error text="Erro ao realizar busca, por favor tente novamente!" />
          ) : (
            data.movies?.map((item: any) => (
              <MovieCard
                key={item.id}
                title={item.title}
                pathTrailer={item.trailer.key}
                stars={item.stars}
                poster_path={item.poster_path}
                runtime={item.runtime}
                release_date={item.release_date}
              />
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
}
