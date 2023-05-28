
const Books = (props) => {
    const { img, title, author, children } = props;
    console.log(props);
    return (
      <article className='book'>
        <img src={img} alt={title} width='400' height='400'/>
        <h2>{title}</h2>
        <h4>{author} </h4>
        {children}
      </article>
    );
  };

  export default Books;