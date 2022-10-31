const Post = ({ post }) => { 
    return (
  <div class="col">
    <div class="card h-100">
      <img src={post.selectedFile} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.message}</p>
      </div>
          <div class="card-footer">
            <small class="text-muted">{post.creator}</small>
            <br></br>
        <small class="text-muted">{post.createdAt}</small>
      </div>
    </div>
    </div>
            )
}
 
export default Post; 