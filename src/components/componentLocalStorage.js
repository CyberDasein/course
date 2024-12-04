import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const ComponentLocalStorage = () => {
    const [value, { setItem, removeItem }] = useLocalStorage('test');

    return (
      <div>
        <p>Значение из LocalStorage: {value}</p>
        <div>
          <button onClick={() => setItem('new storage value')}>Задать значение</button>
          <button onClick={() => removeItem()}>Удалить значение</button>
        </div>
      </div>
    );
}
export default ComponentLocalStorage
