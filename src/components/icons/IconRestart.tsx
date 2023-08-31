interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

// props kan je direct destructuren, hieronder zie je props, maar in de implementatie zie je de destructuring
// const IconRestart = (props: IconProps) => {
// dan kan je dus ook direct width en height gebruiken ipv props.width en props.height in je component
const IconRestart = ({width = 20, height = 20, color = '#1F3641'}: IconProps) => {
    return <svg width={width} height={height} viewBox={`0 0 20 20`}>
        <path d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z" fill={color}/>
    </svg>
};


export default IconRestart;
