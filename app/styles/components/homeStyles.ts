import { CSSProperties } from 'react';

export const getCrossStyles = (showCross: boolean, rotateCross: boolean): CSSProperties => ({
  display: 'inline-block',
  width: '182px',
  transition: 'all .7s ease-in-out',
  transform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
  WebkitTransform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
  msTransform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
  opacity: showCross ? '1' : '0',
});

export const getLinkToShopContainerStyles = (showText: boolean): CSSProperties => ({
  position: 'absolute',
  bottom: '-55px',
  width: '300px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  textAlign: 'center',
  transition: 'opacity .7s ease',
  opacity: showText ? '1' : '0',
  pointerEvents: showText ? 'auto' : 'none',
}); 