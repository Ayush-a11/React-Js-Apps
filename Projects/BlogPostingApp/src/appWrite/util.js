import config from './config'
import {Client,Database} from "appwrite"


class Util{
	client =new Client();
	database;

	constructor(){
		this.
		client.setEndpoint(config.appWriteUrl).
		setProject(config.appWriteProjectId);

		this.database= new Database();
	}

	async CreateBlogPost(identifier,{title,content,image,status,userId}){
		try{
			return await 
			database.createDocument(
					config.appWriteDatabaseId,
					config.appWriteCollectionId,
					Config.appWriteDocumentId,
					{
						title,
						identifier,
						content,
						image,
						status,
						userId
					}
			)
		}
		catch(error){
			console.log('Error Ocurred creating Post :: CreateBlogPost function',error);
		}
		
	}

	async GetBlog(identifier){
		try{
			return await 
			database.getDocument(config.appWriteDatabaseId,
				config.appWriteCollectionId,
				identifier);
		}
		catch(error){
			console.log('Error Ocurred getting Blog :: GetBlog function',error);
		}
	}

	async UpdateBlog(identifier,{title,content,image}){
		try{
			return await 
			database.updateDocument(config.appWriteDatabaseId,
				config.appWriteCollectionId,
				identifier,
				{
					title,
					content,
					image
				});
		}
		catch(error){
			console.log('Error Ocurred Updating Blog :: UpdateBlog function',error);
		}
	}

	async DeleteBlog(identifier){
		try{
			return await 
			database.deleteDocument(config.appWriteDatabaseId,
				config.appWriteCollectionId,
				identifier);
		}
		catch(error){
			console.log('Error Ocurred Deleting Blog :: DeleteBlog function',error);
		}
	}


}

const utilObj = new Util()

export default utilObj;