import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { ImageWrapper } from '../../atom';
import CardWrapper from '../../atom/Card/CardWrapper';

export interface MenuPriceCardProps {
  menu: string;
  price: string;
  imageUrl: string;
  linkTo: string;
}
const MenuPriceCard: FunctionComponent<MenuPriceCardProps> = ({
  menu,
  price,
  imageUrl,
  linkTo,
}) => {
  return (
    <Link href={linkTo}>
      <a>
        <CardWrapper className="relative w-40 h-[13rem]">
          <div className="relative w-full h-full -z-0">
            <ImageWrapper
              bgFilter="bg-gradient-to-b from-transparent via-transparent to-primary-500"
              src={imageUrl}
              alt="coffee"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-3 space-y-4 absolute bottom-0 left-0 flex flex-col justify-end text-secondary-500 font-bold text-xs">
            <span>{menu}</span>
            <span>{price}</span>
          </div>
        </CardWrapper>
      </a>
    </Link>
  );
};

export default MenuPriceCard;
