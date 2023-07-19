interface TitleComponentProps {
    title: string;
}

const TitleComponent = (props: TitleComponentProps) => {
    const { title } = props;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default TitleComponent;
