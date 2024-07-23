import { useParams, useSearchParams } from "react-router-dom";

export const Post = () =>{
  const params = useParams();
  //setQs is available, but not needed for this example
  //const [qs, setQs] = useSearchParams();
  const [qs] = useSearchParams();
  const { id }= params;

  const posts = [{
    id: 1,
    title: "First post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut suscipit elit. Nam vel lacus diam. Integer finibus urna vel fermentum pretium. Aliquam mi orci, pharetra ac dui quis, imperdiet condimentum enim. Aenean ullamcorper feugiat lectus, vel consequat risus sollicitudin a. Cras interdum tristique eros, in imperdiet quam varius ac. Vestibulum euismod diam id ante mollis egestas. Integer in viverra felis. Proin tristique efficitur mauris vehicula vehicula. Suspendisse ullamcorper neque sed convallis fringilla. Fusce nec nibh mattis, aliquet lectus vitae, condimentum justo. Proin diam nisl, varius id tempor quis, maximus eu purus.",
  },{
    id: 2,
    title: "Second post",
    content: "Curabitur scelerisque mi non porttitor sodales. Nullam rutrum, erat et dictum dictum, eros lorem egestas sem, et tincidunt magna lectus eget tortor. Duis a sem sed mauris porttitor dictum. Sed molestie iaculis nisl, sed aliquam augue sagittis quis. Integer elementum in neque eu ultricies. Aenean id hendrerit massa. Suspendisse potenti. Nunc venenatis vestibulum consequat. Donec vitae urna rutrum mi auctor vestibulum et vel nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel pharetra magna.",
  },{
    id: 3,
    title: "Third post",
    content: "Nullam odio dolor, viverra vulputate facilisis et, pretium viverra velit. Nunc accumsan metus vel arcu tincidunt luctus nec nec sapien. Mauris quis risus volutpat, porta tellus vel, placerat dui. Duis mauris lorem, cursus at mattis non, congue sed mi. Nulla ac neque ac turpis aliquet tempus. Curabitur metus mauris, efficitur ac hendrerit nec, dapibus sit amet neque. Quisque vulputate ante eu nisi tincidunt cursus. Proin efficitur felis eget sapien fringilla, ullamcorper tristique ex vestibulum. In vitae dapibus turpis. Vestibulum blandit lacus sit amet ante congue iaculis. Suspendisse egestas nisl vitae venenatis ultricies.",
  }];

  const renderPost = (id: number) => {
    if(id > posts.length || id < 1){
      return (<div>
        <h2>No post found</h2>
        <p>There are no posts found with this identifier.</p>
      </div>);
    }
    else{
      const whichPost = id-1;
      return(<div key={id}>
        <h2>{posts[whichPost].title}</h2>
        <p>{posts[whichPost].content}</p>
      </div>);
    }    
  };
  

  return (<div>
    {id ?
      renderPost(parseInt(id)) :
      posts.map(post => 
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      )
    }
    <h3>Your search query is: {`${qs}`}</h3>
  </div>);
}