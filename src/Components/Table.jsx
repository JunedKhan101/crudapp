import React from "react";
import "../CSS/Table.css";

export default function Table() {
	return(
		<div className="table-container">
			<a href="/add" className="Addrecord-btn">
				<div className="plus-icon">+</div>
				Add record
			</a>

			<div className="input-search">
				<input type="search" className="form-control" placeholder="search" />
			</div>
			<table class="table">
			  <thead className="th">
			    <tr>
			      <th className="header" scope="col">#</th>
			      <th className="header" scope="col">First Name</th>
			      <th className="header" scope="col">Last Name</th>
			      <th className="header" scope="col">Email</th>
			      <th className="header" scope="col">State</th>
			      <th className="header" scope="col">City</th>
			      <th className="header" scope="col">Pincode</th>
			      <th className="header" scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			    	<td>1</td>
			    	<td>Akshay</td>
			    	<td>Patil</td>
			    	<td>Akshay@gmail.com</td>
			    	<td>Goa</td>
			    	<td>Goa</td>
			    	<td>45620</td>
			    	<td>Edit Delete</td>
			    </tr>
			    <tr>
			    	<td>2</td>
			    	<td>Suraj</td>
			    	<td>Singh</td>
			    	<td>Suraj@gmail.com</td>
			    	<td>Gujrat</td>
			    	<td>Vapi</td>
			    	<td>78541</td>
			    	<td>Edit Delete</td>
			    </tr>
			    <tr>
			    	<td>3</td>
			    	<td>Nikhil</td>
			    	<td>Bhamid</td>
			    	<td>Nikhil@gmail.com</td>
			    	<td>Maharashtra</td>
			    	<td>Mumbai</td>
			    	<td>45415</td>
			    	<td>Edit Delete</td>
			    </tr>
			  </tbody>
			</table>
		</div>
	);
}