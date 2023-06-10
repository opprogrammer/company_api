import * as Realm from "realm-web";


export const useMyRealmApp = () => {

	
const app = new Realm.App({ id: "application-company-cgshr" });

const currentUser=app.currentUser;




	return {
		app,
		Realm,
		currentUser,
		
	};
	

};