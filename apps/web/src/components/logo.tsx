import Image from 'next/image';
import { FC } from 'react';

interface LogoProps {
    width?: number;
    height?: number;
    altText?: string;
}

const Logo: FC<LogoProps> = ({ width = 100, height = 100, altText = 'November Logo' }) => {
    return (
        <Image
            src="/logo.svg" // Path to the image in the /public directory
            alt={altText}
            width={width}
            height={height}
            className="object-contain" // Tailwind class for scaling
        />
    );
};

export default Logo;
