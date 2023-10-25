
interface ContentProps {
    name: string,
    count: number
}

const Content = (props: ContentProps) => {
    return (
        <p>
        {props.name} {props.count}
        </p>
    )
};

export default Content