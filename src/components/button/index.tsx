'use client';
import { CircleNotch, Lightning } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ loading, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-12 w-56 px-4 py-2 gap-2 rounded-[4px] bg-gradient-to-r from-highlights-purple to-highlights-pink hover:brightness-110 transition-all"
      {...props}
    >
      {loading ? (
        <>
          Gerando...
          <CircleNotch
            size={30}
            weight="bold"
            className=" bg-base-100/20 rounded-full p-1 animate-spin"
          />
        </>
      ) : (
        <>
          Nova recomendação
          <Lightning size={30} className=" bg-base-100/20 rounded-full p-1" />
        </>
      )}
    </button>
  );
}
