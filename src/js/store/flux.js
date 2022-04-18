const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list:[]
			
		},
		actions: {
			getData:()=>{
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/Aleco112",{
					method :'GET',
					redirect:'follow'
				})
			
			
				.then((response) => response.json())
				.then((result) => setStore({ list:result}))
				.catch((error) => console.log("error", error));
			
			
		},
		addItem: (list)=>{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/Aleco112",{
					method :'PUT',
					redirect:'follow',
					headers: {
						"content-type": "application/json"
					},
					body:JSON.stringify(list)

		})
		.then(response=>response.status ===200 ? getActions().getData():"")
		.catch((error)=> console.log("error", error))

	},
	deleteTodo:(index)=> {
		const rid = getStore().list.filter((item, i) => index !== i);
		
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Aleco112",{
				method :'PUT',
				redirect:'follow',
				headers: {
					"content-type": "application/json"
				},
				body:JSON.stringify(rid)

			})
		
		
			.then((response) => {response.status === 200 ? setStore({list:rid}) : ""})
			
			.catch((error) => console.log("error", error));
		


	}

}
	};
};

export default getState;
