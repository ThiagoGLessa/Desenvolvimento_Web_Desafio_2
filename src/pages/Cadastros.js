import React, { useState } from 'react';
import '../styles/styleIndex.css'; // Importe o seu arquivo CSS

function Cadastros() {
    const [formData, setFormData] = useState({
        vehiclePlate: '',
        ownerName: '',
        apartmentNumber: '',
        apartmentBlock: '',
        vehicleModel: '',
        vehicleColor: '',
        parkingSpot: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Você pode substituir este console.log pela lógica de envio real
        console.log(formData);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <main>
            <section id="container-content" className="geral-style">
                <h1>RESERVE SUA VAGA DE ESTACIONAMENTO</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <label>Placa do Veículo:</label>
                    <input type="text" minLength="7" maxLength="7" placeholder="Digite aqui a placa do veículo" name="vehiclePlate" value={formData.vehiclePlate} onChange={handleChange} required />

                    <label>Nome do Proprietário:</label>
                    <input type="text" placeholder="Digite aqui seu nome" name="ownerName" value={formData.ownerName} onChange={handleChange} required />

                    <label>Número do Apartamento:</label>
                    <input type="number" maxLength="3" min="1" max="300" placeholder="Digite aqui o número do AP" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} required />

                    <label>Bloco do Apartamento:</label>
                    <input type="text" maxLength="1" placeholder="Digite aqui o bloco do AP" name="apartmentBlock" value={formData.apartmentBlock} onChange={handleChange} required />

                    <label>Modelo do Veículo:</label>
                    <input type="text" placeholder="Digite aqui o modelo do veículo" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />

                    <label>Cor do Veículo:</label>
                    <input type="text" placeholder="Digite aqui a cor do veículo" name="vehicleColor" value={formData.vehicleColor} onChange={handleChange} required />

                    <label>Informe a vaga desejada:</label>
                    <select name="parkingSpot" value={formData.parkingSpot} onChange={handleChange} required>
                        <option value="">Informe a vaga desejada</option>
                        <option value="vaga1ba">Vaga 1 - Bloco A</option>
                        <option value="vaga1bb">Vaga 2 - Bloco B</option>
                        <option value="vaga2bc">Vaga 3 - Bloco C</option>
                    </select>
                    <button type="submit" id="form-button">Salvar</button>
                </form>
            </section>
        </main>
    );
}

export default Cadastros;