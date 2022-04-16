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
		addItem: (item)=>{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/Aleco112",{
					method :'GET',
					redirect:'follow',
					headers: {
						"content-type": "application/json"



					},
					body:JSON.stringify([...getStore().list, {label: item,done:false}])

		})
		.then(respose=>respose.status ===200 ? getActions().getData():"")
		.catch(error=> console.log ("error,error"))
	}
}
	};
};

export default getState;
