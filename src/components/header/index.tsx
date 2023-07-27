'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../button';
import Logo from '../../../public/Logo.png';
import { useState } from 'react';

export function Header() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const update = () => {
    setLoading(true);

    return new Promise((resolve) => {
      router.refresh();
      setTimeout(() => {
        resolve(resolve);
      }, 500);
    }).finally(() => {
      setLoading(false);
    });
  };
  return (
    <div className="flex w-[654px] h-12 justify-between items-center">
      <Image src={Logo} width={85} height={44} alt="Logo Movie AI" />
      <Button onClick={update} loading={loading} />
    </div>
  );
}
