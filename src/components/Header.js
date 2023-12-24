import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import React from 'react';
import { Anchor } from 'antd';
const handleClick = (e, link) => {
	e.preventDefault();
	console.log(link);
};

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={require("../assets/Logo.png")} className="Logo" alt="logo" />
			{/* <h3>LOGO</h3> */}
			{<nav ref={navRef}>
				<Anchor targetOffset= "80"
					affix={false}
					onClick={handleClick}
					items={[

						{
							key: '1',
							href: '#skill',
							title: <a href="/#">Skills</a>, // Adding a span with a class
						},
						{
							key: '2',
							href: '#experience',
							title: <a href="/#">Experience</a>, // Adding a span with a class
						},
						{
							key: '3',
							href: '#mywork',
							title: <a href="/#">My work</a>, // Adding a span with a class
						},
						{
							key: '4',
							href: '#aboutme',
							title: <a href="/#">About me</a>, // Adding a span with a class
						},
					]}
				/>

			{/* 	<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Skills</a>
				<a href="/#">About me</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>}

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;