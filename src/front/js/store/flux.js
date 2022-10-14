


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			url: "https://3001-efornies-tfartsocialmed-e1ev8ks9xk4.ws-eu70.gitpod.io/",
			user: {},
			logged: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

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
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
