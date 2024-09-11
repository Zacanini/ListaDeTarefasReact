import React, { useState } from "react";

export const Form = () => {
    const [lista, setLista] = useState([]);
    const [novoTexto, setNovoTexto] = useState(""); // Estado para armazenar o texto do input

    const adicionaTarefa = () => {
        if (novoTexto.trim() !== "") { // Verifica se o texto não está vazio
            setLista([...lista, novoTexto]); // Adiciona o novo texto à lista
            setNovoTexto(""); // Limpa o input após adicionar a tarefa
        }
    };

    // Função para remover uma tarefa específica pelo índice
    const removeTarefa = (index) => {
        setLista(lista.filter((_, i) => i !== index)); // Filtra a lista, removendo o item com o índice correspondente
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <label htmlFor="lembrete">Lembre-se de:</label>
                <input
                    type="text"
                    id="lembrete"
                    value={novoTexto}
                    onChange={(e) => setNovoTexto(e.target.value)} // Atualiza o estado com o texto do input
                />
                <button style={{ cursor: "pointer" }} onClick={adicionaTarefa}>+</button>
            </div>
            <ul>
                {lista.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        {/* Botão para remover a tarefa, passando o índice como argumento */}
                        <button onClick={() => removeTarefa(index)} style={{ backgroundColor: "red", color: "white" }}>*</button>
                    </li>
                ))}
            </ul>
        </>
    );
};
