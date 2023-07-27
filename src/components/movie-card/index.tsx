'use client';

import Image from 'next/image';
import { CalendarBlank, Clock, Star } from 'phosphor-react';

import LogoFilme from '../../../public/Poster.png';
import Play from '../../../public/Play.svg';
import { truncateTitle } from '@/utils/titleFormatter';
import Link from 'next/link';
import { formatTime } from '@/utils/movieTimeFormatter';
import { getYearFromDate } from '@/utils/yearFormatter';

interface MovieCardProps {
  title: string;
  stars: number;
  poster_path: string;
  runtime: number;
  release_date: string;
  pathTrailer: string;
}

export function MovieCard({
  title,
  stars,
  poster_path,
  pathTrailer,
  runtime,
  release_date,
}: MovieCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center w-36 h-10 max-w-36 text-[1.25rem] leading-[100%]">
          {truncateTitle(title)}
        </h1>
        <span className="flex text-highlights-yellow gap-1">
          <Star size={20} weight="fill" color="#FEEA35" />
          {stars}
        </span>
      </div>

      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={194}
        height={288}
        className="rounded-[4px]"
        alt=""
      />

      <div className="flex w-full justify-between ">
        <p className="flex items-center gap-1 text-base-200 text-xs">
          <Clock size={18} color="#8B8D9B" />
          {formatTime(runtime)}
        </p>

        <p className="flex items-center gap-1 text-base-200 text-xs">
          <CalendarBlank size={18} color="#8B8D9B" />
          {getYearFromDate(release_date)}
        </p>
      </div>

      <Link
        href={`${process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URL}${pathTrailer}`}
        target="_blank"
        className="flex bg-base-400 py-2 px-4 justify-center items-center gap-2 rounded-[4px] hover:brightness-110 transition-all"
      >
        <Image src={Play} width={28} height={28} alt="" />
        Assistir trailer
      </Link>
    </div>
  );
}
