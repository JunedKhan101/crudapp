import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Fuse from "fuse.js";
import "../CSS/Table.css";
const axios = require("axios");
require('dotenv').config();

export default function Table() {

	const [data, setData] = useState([]);
	const [backupdata, setBackupData] = useState([]);
	const [name, setName] = useState("");
	const [delID, setDelID] = useState("");
	const [search, setSearch] = useState("");
	
	useEffect(() => { 
		getData();
	}, []);
	useEffect(() => {
		if (!search) {
		    setData(data);
  		}
  		const result = fuse.search(search);
		const matches = [];
		if (!result.length) {
		  	setData(backupdata);
		} else {
		  	result.forEach(({item}) => {
		    	matches.push(item);
		  });
		  	setData(matches);
		}
	}, [search]);

	let history = useHistory();
	const fuse = new Fuse(data, {
  		keys: ["first_name", "email"],
	});

	const getData = async () => {
		// Fetch the data
		var res = await axios.get(process.env.REACT_APP_FETCH_API)
		if (res.status === 200 || res.data.Success === true)
			setData(res.data.data);
		else
			console.log(res);
		setBackupData(data);
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
	const handleDelete = (i) => {
		setName(data[i].first_name); 
		setDelID(data[i].email);
	}
	const handleDeleteUser = async () => {
		var res = await axios.get(`${process.env.REACT_APP_DELETE_API}?param1=${delID}`)
		if (res.status === 200 && res.data.Success === true)
			window.location = "/";
		else
			console.log(res);
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
						<button onClick={() => handleDelete(i) } className="delete-btn" data-toggle="modal" data-target="#exampleModalCenter">DELETE</button>
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
	const handleSearch = ({ currentTarget }) => {
		setSearch(currentTarget.value);

		
	}
	return (
		<div className="table-container">
			<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			    <div className="modal-dialog modal-dialog-centered" role="document">
			        <div className="modal-content">
			            <div className="modal-body">
			                <h2 className="modal-title">Are you sure to delete {name}</h2>
			            </div>
			            <div className="modal-footer">
			                <button onClick={handleDeleteUser} type="button" className="delete-btn">DELETE</button>
			                <button type="button" className="cancel-btn" data-dismiss="modal">Cancel</button>
			            </div>
			        </div>
			    </div>
			</div>

			<a href="/add" className="Addrecord-btn">
				<div className="plus-icon">+</div>
				Add record
			</a>
			<div className="input-search">
				<input onChange={handleSearch} value={search} type="search" className="form-control" placeholder="search" />
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