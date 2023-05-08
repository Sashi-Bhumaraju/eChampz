function CircularBar (props) {
    return (
        <div className="circular-bar-container" style={{width: props.size }}>
            <div className="circular-bar" style={{borderWidth:props.stroke}}></div>
        </div>
    )
}
export default CircularBar;