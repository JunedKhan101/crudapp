import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Table.css";
const axios = require("axios");
require('dotenv').config();

export default function Table() {

	const [data, setData] = useState([]);
	useEffect(() => { getData();}, []);

	let history = useHistory();

	const getData = async () => {
		// Fetch the data
		var mydata = await axios.get(process.env.REACT_APP_FETCH_API)
		setData(mydata.data.data);
	}
	const handleClick = (i) => {
		if (data[i]) {
			history.push({
				pathname: "/edit",
				state: {
					data: data[i]
				}
			});
		}
	}
	// Organise the data in an array named rows and return it
	const renderData = () => {
		var rows = [];
		for (let i = 0; i < data.length; ++i) {
			rows.push(
				<tr key={i}>
					<td>{i+1}</td>
					<td>{data[i].first_name}</td>
					<td>{data[i].last_name}</td>
					<td>{data[i].email}</td>
					<td>{data[i].states}</td>
					<td>{data[i].city}</td>
					<td>{data[i].pincode}</td>
					<td className="action-btns">
						<a onClick={() => handleClick(i)} className="edit-btn" href="/edit">EDIT</a>
						&nbsp;
						<a className="delete-btn" href="/delete">DELETE</a>
					</td>
				</tr>
			);
		}
		return (
			<tbody>
				{rows}
			</tbody>  
		);
	}
	return (
		<div className="table-container">
			<a href="/add" className="Addrecord-btn">
				<div className="plus-icon">+</div>
				Add record
			</a>
			<div className="input-search">
				<input type="search" className="form-control" placeholder="search" />
			</div>
			<table className="table">
			  <thead className="th">
			    <tr>
			      <th className="header" scope="col">#</th>
			      <th className="header" scope="col">First Name</th>
			      <th className="header" scope="col">Last Name</th>
			      <th className="header" scope="col">Email</th>
			      <th className="header" scope="col">State</th>
			      <th className="header" scope="col">City</th>
			      <th className="header" scope="col">Pincode</th>
			      <th className="header action" scope="col">Action</th>
			    </tr>
			  </thead>
			  {renderData()}
			</table>
		</div>
	);
}