import React from "react";

type SpacerProps = {
	height: string | number; // Accepts either a string (like '20px' or '2rem') or a number
};

const Spacer: React.FC<SpacerProps> = ({ height }) => {
	const style = {
		height: typeof height === "number" ? `${height}px` : height,
	};

	const border = {
		// height: "0px",
		border: "solid black 1px",
        width: "300px",
        margin: "10px auto"


	};

	return (
		<>
			<div style={border}></div> <div style={style} />
		</>
	);
};

export default Spacer;
