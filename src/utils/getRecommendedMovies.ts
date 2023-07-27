interface Movie {
  id: number;
  title: string;
  description: string;
  stars: number;
  release_date: string;
  poster_path: string;
  runtime: number;
  trailer: {
    site: string;
    key: string;
  };
}

interface MoviesData {
  movies: Movie[];
}

export async function getMovies() {
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.THE_MOVIE_TOKEN}`,
      },
    };

    const res = await fetch(`${process.env.THE_MOVIE_URL}/discover/movie`, {
      ...options,
      cache: 'no-cache',
    });
    const data = await res.json();
    const popularMovies = data.results;

    const getRandomIndex = (max: number): number => {
      return Math.floor(Math.random() * max);
    };

    const recommendations: any = [];
    const maxRecommendations = Math.min(3, popularMovies.length); // Defina o limite máximo de recomendações

    while (recommendations.length < maxRecommendations) {
      const randomIndex = getRandomIndex(popularMovies.length);
      const selectedMovie = popularMovies[randomIndex];

      if (
        !recommendations.some((movie: any) => movie.id === selectedMovie.id)
      ) {
        recommendations.push({
          id: selectedMovie.id,
          title: selectedMovie.title,
          description: selectedMovie.overview,
          stars: selectedMovie.vote_average,
          release_date: selectedMovie.release_date,
          poster_path: selectedMovie.poster_path,
        });

        // Remover o filme selecionado para evitar repetições
        popularMovies.splice(randomIndex, 1);
      }
    }

    const recommendationsWithTrailer: MoviesData[] = await Promise.all(
      recommendations.map(async (item: any) => {
        const movie = await fetch(
          `${process.env.THE_MOVIE_URL}/movie/${item.id}`,
          { ...options, cache: 'no-cache' }
        );

        const movieVideos = await fetch(
          `${process.env.THE_MOVIE_URL}/movie/${item.id}/videos`,
          { ...options, cache: 'no-cache' }
        );

        const detailMovie = await movie.json();
        const movieVideosJson = await movieVideos.json();

        const trailerMovie = movieVideosJson.results.filter((video: any) =>
          video.name.toLowerCase().includes('official trailer')
        );

        return {
          ...item,
          runtime: detailMovie.runtime,
          trailer: {
            site: trailerMovie[0].site,
            key: trailerMovie[0].key,
          },
        };
      })
    );

    return { movies: recommendationsWithTrailer };
  } catch (error: any) {
    return { error: error.message };
  }
}
