import { CSSProperties } from 'react';

interface CrossProps {
  style?: CSSProperties;
  onContextMenu?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

export default function Cross({ style, onContextMenu }: CrossProps) {
  return (
    <svg 
      style={style}
      onContextMenu={onContextMenu}
      id="Capa_1" 
      data-name="Capa 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1080 1082"
      width="182"
    >
      <path 
        fill="currentColor"
        d="m0,628v-173h451V0h178v455h451v173h-451v454h-178v-454H0Z"
      />
    </svg>
  );
} 