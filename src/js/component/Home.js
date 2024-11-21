import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("")
	console.log("este es mi color:", selected);
	

	return (
		<div className="position-absolute top-50 start-50 translate-middle">
			<div className="container mt-3 ms-4">
				<div className="traficLight">

					<div className={`rounded-circle bg-danger ${selected === "red" ? "lightOn" : ""}`} style={{ width: "80px", height: "80px" }}
						onClick={() => {
							setSelected("red");

						}}>
					</div>

					<div className={`rounded-circle bg-warning ${selected === "yellow" ? "lightOn" : ""}`} style={{ width: "80px", height: "80px" }}
						onClick={() => {
							setSelected("yellow");

						}}>
					</div>

					<div className={`rounded-circle bg-success ${selected === "green" ? "lightOn" : ""}`} style={{ width: "80px", height: "80px" }}
						onClick={() => {
							setSelected("green");

						}}>
					</div>

					
				</div>
				<div className="palo"></div>


			</div>
		</div>

	)



}
export default Home;
