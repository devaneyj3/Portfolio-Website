import React from "react";

const Jobs = (props) => {
	return (
		<>
			<div className="info">
				<h1 className="workHeading">{props.position}</h1>
				<span className="dates">{props.years}</span>
			</div>
			<p className="buisnessAreas">
				{props.company} - {props.city}
			</p>
			<ul className="description">
				<li>{props.acheivments}</li>
			</ul>
		</>
	);
};

export default Jobs;
