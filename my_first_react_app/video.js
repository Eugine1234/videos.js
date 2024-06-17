function video({video}) {
    return(
        <div>
            <thumbnail video ={video}></thumbnail>
            <a href= {video.url}></a>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <likeButton video={video}></likeButton>

        </div>
    ); 
}