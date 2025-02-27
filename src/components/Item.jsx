const Item = ({ item, API, handleDelete }) => {

    console.log(item,"bhhg")

   

    // Render a single item
    // Add a Delete and Edit button
    return <>
    <h1>{item.name}</h1>
    <p>{item.status}</p>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </>;
};

export default Item;
