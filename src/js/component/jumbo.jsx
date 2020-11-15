import React from "react";
import "../../styles/jumbo.css";

function Jumbo() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">
				Hola!! Esta es mi primera página con React!
			</h1>
			<p className="lead">
				Aprende a manejar tus estados, podrás ser el más talentoso de
				todos, pero si emocionalmente te dejas vencer, no lograrás nada
			</p>
			<hr className="my-4" />
			<p>
				Es más fácil caminar colina abajo que hacia arriba, pero las
				vistas se ven desde lo alto.
			</p>
			<button className="coolbotton">
				<span>Seguimos!</span>
			</button>
		</div>
	);
}

export default Jumbo;
