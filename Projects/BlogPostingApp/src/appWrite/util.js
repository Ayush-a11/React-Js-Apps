import config from './config'
import {Client,Storage,Database} from "appwrite"


class Util{
	client =new Client();
	storage;
	database;

	constructor(){
		this.
		client.setEndpoint(config.appWriteUrl).
		setProject(config.appWriteProjectId);
		this.database=new Database();
		this.storage= new Storage();
	}

	async CreateBlogPost(identifier,{title,content,image,status,userId}){
		try{
			return await 
			this.database.createDocument(
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
			this.database.getDocument(config.appWriteDatabaseId,
				config.appWriteCollectionId,
				identifier);
		}
		catch(error){
			console.log('Error Ocurred getting Blog :: GetBlog function',error);
		}
		return null;
	}

	async UpdateBlog(identifier,{title,content,image}){
		try{
			return await 
			this.database.updateDocument(config.appWriteDatabaseId,
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
		return null;
	}

	async DeleteBlog(identifier){
		try{
			return await 
			this.database.deleteDocument(config.appWriteDatabaseId,
				config.appWriteCollectionId,
				identifier);
		}
		catch(error){
			console.log('Error Ocurred Deleting Blog :: DeleteBlog function',error);
		}
		return null;
	}

	//Storage call...

	async GetAllFiles(){
		try{
			return await this.storage.listFiles(
				config.appWriteBucketId,
				[Query.equal("status","active")]
			)
		}
		catch(error){
			console.error('Error Ocurred while listing files :: GetAllFiles function',error)
		}
		return null;
	}

	getFilePreview(fileId){
		try{
			return  this.storage.getFilePreview(config.appWriteBucketId,fileId);
		}
		catch(error){
			console.log('Error Ocurred while Previewing :: GetBlogPreview function',error);
		}
		return null;
	}

	async UploadFile(fileBlob){
		try{
			return await this.storage.createFile(config.appWriteBucketId,Id.unique(),fileBlob);
		}
		catch(error){
			console.log('Error Uploading File :: GetFile',error); 
		}
		return null;
	}

	async DeleteFile(fileId){
		try{
			return await this.storage.deleteFile(config.appWriteBucketId,fileId);
		}
		catch(error){
			console.log('Error Deleting File :: DeleteFile function',error);
		}
		return null;
	}

	async UpdateFile(fileId,fileBlob){
		try{
			return await this.storage.updateFile(config.appWriteBucketId,fileId,fileBlob);
		}
		catch(error){
			console.log('Error Updating File :: UpdateFile function',error);
		}
	}


}

const utilObj = new Util()

export default utilObj;