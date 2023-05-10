type Props = {
    name: string;
    size?: number | string;
    width?: number | string;
    height?: number | string;
}

export const Icon = ({name, height, width, size=24}: Props) => {
    const iconWidth = width ?? size;
    const iconHeight = height ?? size;

    return (
        <svg
            style={{
                width: iconWidth + 'px',
                height: iconHeight + 'px'
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    )
}