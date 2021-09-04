import React from "react";
import Navbar from "./Navbar";
import "../CSS/Add.css";

export default function Add() {
	return(
		<div className="Add">
			<Navbar />
			<form className="addform">
				<div class="form-group">
				    <label for="inputfname">First Name</label>
				    <input required type="text" class="form-control" id="inputfname" />
  				</div>
				<div class="form-group">
				    <label for="inputlname">Last Name</label>
				    <input required type="text" class="form-control" id="inputlname" />
  				</div>
				<div class="form-group">
				    <label for="InputEmail1">Email address</label>
				    <input required type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
  				</div>
  				<div class="form-group">
				    <label for="FormControlSelect1">State</label>
				    <select class="form-control" id="FormControlSelect1">
					  <option>--</option>
				      <option value={1}>Maharashtra</option>
				      <option value={2}>Utter Pradesh</option>
				      <option value={3}>Gujurat</option>
				      <option value={4}>Rajasthan</option>
				      <option value={5}>Bihar</option>
				    </select>
  				</div>
  				<div class="form-group">
				    <label for="InputCity">City</label>
				    <input required type="text" class="form-control" id="InputCity" />
  				</div>
  				<div class="form-group">
				    <label for="InputPincode">City</label>
				    <input required type="text" pattern="\d{5}" class="form-control pincode" id="InputPincode" />
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