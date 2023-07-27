import Image from 'next/image';
import ErrorImage from '../../../public/Error.svg';

interface ErrorProps {
  text: string;
}

export function Error({ text }: ErrorProps) {
  return (
    <div className="flex w-full justify-center items-center  h-auto">
      <p className="text-2xl">{text}</p>
      <Image src={ErrorImage} width={260} height={260} alt="Error Image" />
    </div>
  );
}
