import { useState } from "react";
import styles from "./SearchBar.module.css";


let {Sea} = styles;


// eslint-disable-next-line react/prop-types
export default function SearchBar({onSearch}) {

  let [aux, setAux] = useState('');
  let [id, setId] = useState ('');

   
  const handleChange = (event) => {
      setId(event.target.value);
    };

  function detector(id) {
    setAux(id)
    if(id !== aux) {
      onSearch(id)
    }

  }
  return (
    <div className={Sea}>
      <input className={styles.input}
      type="search" onChange={handleChange}
      value={id} />
      <button onClick={() => detector(id)} className={styles.agregar}>Agregar</button>
    </div>
  );
}
