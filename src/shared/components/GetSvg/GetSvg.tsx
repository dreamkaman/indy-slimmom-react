import { FC } from 'react';

import sprite from 'images/svg/sprite.svg';

import { IGetSvg } from 'types';


const GetSvg: FC<IGetSvg> = ({ name, className }) => {
    return (
        <svg className={className}>
            <use href={sprite + `#${name}`} />
        </svg>
    );
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;