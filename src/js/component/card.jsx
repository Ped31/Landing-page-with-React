import React from "react";
import "../../styles/card.css";

function Card() {
	return (
		<div className="card">
			<img
				src="https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Card;
