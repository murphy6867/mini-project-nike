import { useState } from "react"

const Child = (props) => {

    const [name, setName] = useState(''); // Local state for name
    const [age, setAge] = useState(0); // Local state for age

    const handleNameChange = (ev) => {
    setName(ev.target.value);
  }

    const handleAgeChange = (ev) => {
    setAge(ev.target.value);
  }

  return (
    <div>
        <input type="text" onChange={handleNameChange} placeholder="Enter name" />
        <input type="number" onChange={handleAgeChange} placeholder="Enter age" />
        <button onClick={()=> props.inFunc(name, age)}>Send data</button>
    </div>
  )
}

export default Child