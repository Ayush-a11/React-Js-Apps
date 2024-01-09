import config from '../Config'
import {Client, Account,ID} from 'appwrite'

class Auth{

	client= new Client();
	account
	constructor(){
		console.log(config)
		this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId);

		this.account= new Account();
	}

	async SingIn({email, password}){
		try{
			await this.account.create(ID.unique(),email,password);
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

const authObj=new Auth();

export default authObj;