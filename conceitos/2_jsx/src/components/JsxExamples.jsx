import React from 'react'

export const JsxExamples = () => {
 

    const userName = 'Felipe';

    const user = {
        name: "Filipe",
        lastName: "Lemos"
    }

    function getGreeting(name) {
        return `Olá ${name}`
    }

    const userIsLoggedIn = true;

    const userRole = "admin";

    const users = [
        {id: 1, name: "Felipe"},
        {id: 2, name: "Ariel"},
        {id: 3, name: "Gabriel"}
    ]

  return (
    <div>
    {/* Básico */}
    <h2>Conteúdo que o usuário vai ver</h2>
    {/* Listando dados do usuário */}
    <p>O nome do usuário é: {userName}</p>
    <p>Usuário: {user.name} {user.lastName}</p>
    <p>{2 + 2}</p>
    <p>{getGreeting('Felipe')}</p>
    
    {/* Diferenças do HTML */}
    <div className='alguma-coisa'>Este cara</div>
    <div className="teste">ok</div>

    <button onClick={() => alert("Teste")}>Clique em mim</button>

    <input type="text" placeholder='Digite algo'/>

    {/* Renderização condicional */}
    {userIsLoggedIn ? (
        <div>
        <p>Caso: está logado</p>
        </div>
        ) : (
        <p>Caso: Não está logado</p>
        )}

        <p>
            {userRole === "admin" && "Você é um admin"}
        </p>

        {/* Renderização de listas */}
        <div>
            <ul>
                {users.map((user) => (
                <li key={user.id}>
                    {user.id} - {user.name}
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples;