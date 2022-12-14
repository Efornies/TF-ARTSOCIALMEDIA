


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			profile: {},
			message: null,
			url: "https://3001-efornies-tfartsocialmed-ooffqf9dbyg.ws-eu73.gitpod.io/",
			user: {},
			logged: null
		},
		actions: {
			
			loginUser : async (user) => {
				
				try {
				  const resp = await fetch(getStore().url + "api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user),
				  });
				  const data = await resp.json();
				  
					if (data.token) {
					  localStorage.setItem("token", data.token);
					getActions().verify(); 
					  setStore({user:data.user, logged:data.logged})
					}
				  
				} catch (e) {
				  /* alert("ERROR") */;
				}
			  },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			
		}
	};
};

export default getState;
