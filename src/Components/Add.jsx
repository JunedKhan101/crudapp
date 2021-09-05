import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "../CSS/Add.css";
const axios = require("axios");
require('dotenv').config();

export default function Add(props) {
	const location = useLocation();
	if (typeof(location.state) !== "undefined" && typeof(location.state.data) !== "undefined") {
		var propdata = location.state.data;
	}

	const [fname, setFname] = useState(propdata ? propdata.first_name : "");
	const [lname, setLname] = useState(propdata ? propdata.last_name : "");
	const [email, setEmail] = useState(propdata ? propdata.email : "");
	const [state, setState] = useState(propdata ? propdata.states : "");
	const [city, setCity] = useState(propdata ? propdata.city : "");
	const [pincode, setPincode] = useState(propdata ? propdata.pincode : "");

	var query_string = "";
	const handleSubmit = (e) => {
		e.preventDefault();

		query_string = "?param1=" + email + "&param2=" + fname + "&param3=" + lname +
		"&param4=" + pincode + "&param5=" + city + "&param6=" + state;
		addData();
	}
	const addData = async () => {
		var REQ_API = "";
		if (propdata !== undefined)
			REQ_API = process.env.REACT_APP_EDIT_API
		else
			REQ_API = process.env.REACT_APP_ADD_API
		var response = await axios.get(`${REQ_API}${query_string}`);
		if (response.status === 200) {
			window.location = "/"; // Redirect to the home page
		} else {
			console.log(response); // Else log the errors
		}
	}
	const renderEmailInput = () => {
		if (propdata === undefined) {
			return (
			    <input onChange={(e) => setEmail(e.target.value)} value={email}
			    required type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
			);
		}
		else {
			return (
				<input onChange={(e) => setEmail(e.target.value)} value={email}
			    disabled type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
			);
		}
	}
	return (
		<div className="Add">
			<Navbar />
			<form className="addform" onSubmit={handleSubmit}>
				<div className="form-group">
				    <label htmlFor="inputfname">First Name</label>
				    <input onChange={(e) => setFname(e.target.value)} value={fname}
				    required type="text" className="form-control" id="inputfname" />
  				</div>
				<div className="form-group">
				    <label htmlFor="inputlname">Last Name</label>
				    <input onChange={(e) => setLname(e.target.value)} value={lname}
				    required type="text" className="form-control" id="inputlname" />
  				</div>
  				<div className="form-group">
				    <label htmlFor="InputEmail1">Email address</label>
				    {renderEmailInput()}
  				</div>
  				<div className="form-group">
				    <label htmlFor="FormControlSelect1">State</label>
				    <select onChange={(e) => setState(e.target.value)} value={state}
				    required className="form-control select" id="FormControlSelect1">
					  <option value="">--</option>
				      <option value="Maharashtra">Maharashtra</option>
				      <option value="Utter Pradesh">Utter Pradesh</option>
				      <option value="Gujurat">Gujurat</option>
				      <option value="Rajasthan">Rajasthan</option>
				      <option value="Bihar">Bihar</option>
				    </select>
  				</div>
  				<div className="form-group">
				    <label htmlFor="InputCity">City</label>
				    <input onChange={(e) => setCity(e.target.value)} value={city}
				    required type="text" className="form-control" id="InputCity" />
  				</div>
  				<div className="form-group">
				    <label htmlFor="InputPincode">Pincode</label>
				    <input onChange={(e) => setPincode(e.target.value)} value={pincode}
				    required type="text" pattern="\d{5}" className="form-control pincode" id="InputPincode" />
  				</div>
  				<br />
  				<div className="btns">
  					<input className="submit-btn" type="submit" value="Add" />
  					&nbsp;
  					<a href="/" className="cancel-btn">Cancel</a>
  				</div>
			</form>
		</div>
	);
}