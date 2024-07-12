export function Titles(props) {
    if (!props.data) {
        return null;
    }
    
    console.log("child", props.data);
    let titles = props.data.map((item, i) => (<li key={i}>{item.title}</li>))

    return <ul>{titles}</ul>;

}
