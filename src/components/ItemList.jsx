import Item from "./Item";

const ItemList = ({ items,api, handleDelete }) => {

    console.log(items,"b")
    // your code here
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} handleDelete={handleDelete} API={api} item={item} />
            ))}
        </>
    );
};

export default ItemList;
