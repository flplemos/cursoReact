import {useState} from 'react'

function EventHandlingEvents() {
    const handleClick = () => {
        alert("Testando")
    };

    const handleGreet = (name) => {
        alert(`Olá ${name}`)
    }

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`enviado! ${name}`);
    }

  return (
    <div>
        <button onClick={() => alert("oi")}>Clique aqui</button>
        <button onClick={handleClick}>Clique aqui</button>
        <br />
        <button onClick={() => handleGreet("Felipe")}>Dizer Olá Felipe</button>
        <button onClick={() => handleGreet("Filipi")}>Dizer Olá Filipi</button>
        <br />
        <form onSubmit={handleSubmit}>
           <input type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           placeholder='Digite seu nome'
           /> 
           <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default EventHandlingEvents