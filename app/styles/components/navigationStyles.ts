import { CSSProperties } from 'react';
import { Location } from '@remix-run/react';
import ITopbarLink from '~/types/TopbarLink';

export const getTopbarLinkStyles = (link: ITopbarLink, location: Location, isLast: boolean): CSSProperties => {
  return {
    marginRight: !isLast ? '10px' : '0',
    color: 'black'
  };
}; 