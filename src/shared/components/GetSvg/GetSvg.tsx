import { FC } from 'react';

import sprite from 'images/svg/sprite.svg';

interface IGetSvg {
    name: string;
    className: string;
}

const GetSvg: FC<IGetSvg> = ({ name, className }) => {
    return (
        <svg className={className}>
            <use href={sprite + `#${name}`} />
        </svg>
    );
};

// Usage: <GetIcon name="svgName" width={svgWidth} height={svgHeight} classname={svgClassName}/>
export default GetSvg;