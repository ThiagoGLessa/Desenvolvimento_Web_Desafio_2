import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
			<section id="container-logo">
				<span>Apartament's King</span>
			</section>
			<nav id="navbar" className="geral-style">
				<ul>
					<li><Link to="/">Cadastro</Link></li>
					<li><Link to="/reservas">Reservas</Link></li>
				</ul>
			</nav>
		</header>
    );
}

export default Header;