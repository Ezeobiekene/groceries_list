import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"

const Content = () => {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Milk, sweetened"
    },
    {
        id: 3,
        checked: false,
        item: "Firm tofu"
    }
]);

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item
 )
 setItems(listItems)
 localStorage.setItem('shoppingList', JSON.stringify(listItems))
}

  return (
    <main>
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input 
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label 
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                    <FaTrashAlt 
                        role="button" 
                        tabIndex='0' 
                    />
                </li>
            ))}
        </ul>
    </main>
  );
};

export default Content;