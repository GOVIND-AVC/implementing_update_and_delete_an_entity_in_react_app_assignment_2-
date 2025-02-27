import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // console.log(API_URI)
  const [data,setData]=useState([]);

  const handleDelete=(id)=>{
    fetch(`${API_URI}/${id}`,{
        method: 'DELETE',
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res,"h");
        let filteredData=data.filter(item=>item.id!==id);
        setData(filteredData);
    }).catch(err=>{
        console.log(err);
    })
}

  useEffect(()=>{
    console.log(API_URI)
    fetch(API_URI)
    .then((res)=>{
      return res.json();
    }).then((res)=>{
        // console.log(res);
        setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[]);


  // Get the existing item from the server
  // const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop
  // return (<h1>helo</h1>)
  return <ItemList items={data} handleDelete={handleDelete} api={API_URI}/>;
}

export default App;
