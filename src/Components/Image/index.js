function Image({url, alt, width, height="100%"}) {
    return (
        <img src={url} alt={alt} width={width} height={height} />
    )
}

export default Image