import config from '..Config'
import {Client, Account, Id} from 'appwrite';

class Auth{

	client= new Client();
	account
	constructor(){
		this.
		client.setEndpoint(config.appWriteUrl).
		setProject(config.appWriteProjectId);

		account= new Account();
	}

	async SingIn({email, password}){
		try{
			await this.account.create(Id.unique(),email,password);
			//after creating account directly creating login session for user..


		}
		catch(error){
			console.log("Error creating account :: SingIn Function", error);
		}
		return null;
	}

	async LoginIn({email, password}){
		try{
			return await this.account.createEmailSession(email, password);
		}
		catch(error){
			console.log("Error creating account :: LoginIn Function", error);
		}
		return null;
	}

	async LogOut(){
		try{
			return this.account.deleteSessions();
		}
		catch(error){
			console.log("Error logging out :: LogOut Function", error);
		}
	}

}

let authObj=new Auth();

export default authObj;