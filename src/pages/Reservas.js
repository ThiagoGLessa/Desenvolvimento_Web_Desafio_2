import React, { useState } from 'react';
import '../styles/styleReservas.css';

function Reservas() {
    const [vacancies, setVacancies] = useState([
        { placa: "ABC1234", nomeDono: "João da Silva", numApartamento: "101", blocoApartamento: "A", modeloVeiculo: "Fiat Uno", vaga: "Vaga 3 - Bloco A" },
        { placa: "XYZ5678", nomeDono: "Maria Souza", numApartamento: "202", blocoApartamento: "B", modeloVeiculo: "Chevrolet Onix", vaga: "Vaga 5 - Bloco A" },
        { placa: "DEF9876", nomeDono: "Pedro Oliveira", numApartamento: "303", blocoApartamento: "C", modeloVeiculo: "Volkswagen Gol", vaga: "Vaga 5 - Bloco B" },
        { placa: "GHI6543", nomeDono: "Ana Santos", numApartamento: "404", blocoApartamento: "C", modeloVeiculo: "Ford Fiesta", vaga: "Vaga 5 - Bloco C" },
        { placa: "MNO3210", nomeDono: "Paulo Coelho", numApartamento: "505", blocoApartamento: "C", modeloVeiculo: "Toyota Corolla", vaga: "Vaga 6 - Bloco C" }
    ]);

    // Função para remover uma vaga cadastrada
    const removeVacancy = (index) => {
        setVacancies(prevVacancies => prevVacancies.filter((_, i) => i !== index));
    };

    return (
        <main>
            <section className="container-content geral-style" id="limited-section-1">
                <h1>Vagas Cadastradas</h1>
                <div className="underline"></div>
                <ul className="registered-vacancies">
                    {vacancies.map((vacancy, index) => (
                        <li key={index}>
                            <div>
                                <span><b>Placa:</b> {vacancy.placa}, <b>Modelo:</b> {vacancy.modeloVeiculo}, <b>Dono:</b> {vacancy.nomeDono}</span>
                                <span><b>Apartamento:</b> {vacancy.numApartamento}, <b>Bloco:</b> {vacancy.blocoApartamento}</span>
                                <span><b>Vaga:</b> {vacancy.vaga}</span>
                            </div>
                            <button className="remove-btn" onClick={() => removeVacancy(index)}></button>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="container-content geral-style" id="limited-section-2">
                <h1>Vagas Disponíveis</h1>
                <div className="underline"></div>
                <ul className="available-vacancies">
                    <li><span>Vaga 2</span>-<span>Bloco A</span></li>
                    <li><span>Vaga 4</span>-<span>Bloco A</span></li>
                    <li><span>Vaga 1</span>-<span>Bloco B</span></li>
                    <li><span>Vaga 3</span>-<span>Bloco B</span></li>
                    <li><span>Vaga 4</span>-<span>Bloco B</span></li>
                    <li><span>Vaga 1</span>-<span>Bloco C</span></li>
                    <li><span>Vaga 2</span>-<span>Bloco C</span></li>
                    <li><span>Vaga 4</span>-<span>Bloco C</span></li>
                </ul>
            </section>
        </main>
    );
}

export default Reservas;