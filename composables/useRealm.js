import * as Realm from "realm-web";


export const useMyRealmApp = () => {

	
const app = new Realm.App({ id: "application-0-akmil" });

const currentUser=app.currentUser;




	return {
		app,
		Realm,
		currentUser,
		
	};
	

};
