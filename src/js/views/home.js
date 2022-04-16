import React, { useContext,useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
export const Home = () => {
	const { store , actions}=useContext(Context)
	const[item,setItem]=useState("")

	// const addTodo = (item) => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify([...item, { label: item, done: false }]);

	// 	var requestOptions = {
	// 		method: "PUT",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: "follow",
	// 	};

	// 	fetch(
	// 		"https://assets.breatheco.de/apis/fake/todos/user/Aleco112",
	// 		requestOptions
	// 	)
	// 		.then((response) => (response.status === 200 ? getTodos() : ""))
	// 		.catch((error) => console.log("error", error));
	// };
	// const deleteTodo = (newList) => {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append("Content-Type", "application/json");

	// 	var raw = JSON.stringify(newList);

	// 	var requestOptions = {
	// 		method: "PUT",
	// 		headers: myHeaders,
	// 		body: raw,
	// 		redirect: "follow",
	// 	};

	// 	fetch(
	// 		"https://assets.breatheco.de/apis/fake/todos/user/Aleco112",
	// 		requestOptions
	// 	)
	// 		.then((response) =>
	// 			response.status === 200 ? setItem(newList) : ""
	// 		)
	// 		.catch((error) => console.log("error", error));
	// };
	// const completeTodo = () => {};

	// useEffect(() => {
	// 	getTodos();
	// }, []);
	console.log(store.list);

	return (
		<>
			<main>
				<h1> Todos</h1>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Todo-list"
						onChange={(event) => {
							setItem(event.target.value);
						}}
						value={item}
						onKeyUp={(e) => {
							if (e.key == "Enter" && item !== "") {
								
								action ("");
							}
						}}
					/>
					<button
						onClick={() => {
							//check is input is empty
							if (action !== "") {
								addTodo(store);
								action("");
							}
						}}
						className="btn btn-outline-secondary"
						type="button">
						Add task
					</button>
				</div>
				<ul>
					{store.list.map((item, index) => {
						return (
							<li className="newtodos" key={index}>
								{item.label}
								<button
									onClick={() =>
										deleteTodo(
											item.filter((item, i) => {
												return index !== i;
											})
										)
									}>
									X
								</button>
							</li>
						);
					})}
				</ul>
			</main>
			<span>{item.length} item left</span>
		</>
	);
};
	
	

