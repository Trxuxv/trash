import { useEffect } from 'react';

export const useOutsideClick = (callback: (T?: any) => void, ref: React.RefObject<HTMLDivElement>) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};