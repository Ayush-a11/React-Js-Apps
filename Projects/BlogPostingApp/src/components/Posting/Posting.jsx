import React, { useCallback, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Input from '../Input'
import RTE from '../Header/RTE'
import utilObj from '../../appWrite/util'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Posting({post}) {
	const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
		defaultValues: {
			title: post?.title|| '',
			identifier: post?.identifier||'',
			content: post?.content||'',
			status: post?.status||'active'
		}
	});

	const navigate =useNavigate();
	const userData = useSelector((state)=>state.userData)

	const submit =async (data)=>{
		if(post){
			const file =data.image[0] ? utilObj.UploadFile(data.image[0]) :null;

			if(file){
				//deleting older image
				utilObj.DeleteFile(post.image[0]);
			}
			const dbpost= utilObj.UpdateBlog(post.$id,{...data,image:file?file.$id:undefined})

			if(dbpost){
				navigate(`/Post/${dbpost.$id}`)
			}
		}
		else{
			console.log('else')
			const file= data.image[0] ? await utilObj.UploadFile(data.image[0]) :null;
            console.log('file',file)
			if(file){
				console.log('submit',data)
				const dbpost= await utilObj.CreateBlogPost({...data,image:file.$id,userId:userData.$id})

				if(dbpost){
					navigate(`/Post/${dbpost.$id}`)
				}
			}
		}
	};

	const createIdentifier = useCallback((value) => {
		if(value &&  typeof value === 'string') 
			return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-")
			.replace(/\s/g, "-");

			return "";

	})

	useEffect(() => {
		const subscription= watch((value,{name})=>{
			if(name === "title"){
				setValue("identifier",createIdentifier(value.title),{shouldValidate:true})
			}
		})
		return ()=> subscription;

	}, [watch,createIdentifier]);
	

  return (
	<div  className=" my-10 py-10 w-full bg-slate-500  bg-opacity-5 h-5/6 shadow-2xl">
		 <h2 className='text-purple-500 font-bold text-3xl font-mono'>Create New Post</h2>
	<form onSubmit={handleSubmit(submit)}>
		<Input placeholder="Enter Post title"
               type="text"
               label="title"
               {...register("title",{
                          required: true
               })}
        />
		<Input 
			label ="Identifier"
			placeholder="Identifier"
			readOnly={true}
			className="border-white text-black "
			{...register("identifier",{required: true})}
			onInput={(e)=>{
				setValue("identifier",createIdentifier(e.target.value),{shouldValidate:true})
			}}
		/>

		<RTE label="Content" name="content" control={control} defaultValue={getValues("content")}/>
		
		<div>
			<Input label="Image"
				   type="file"
				   accept="image/png, image/jpg, image/jpeg, image/gif"
				   {...register("image",{required : !post})}
				   className="p-0  "
				   />
			{post && (
				<div>
					<img
						src={utilObj.getFilePreview(post.image)}
						alt={post.title}

					 />
				</div>
			)}
			<label className="text-lg font-bold font-mono h-10 w-12 inline-block text-left mr-10">Status</label>
			<select  {...register("status")}>
				<option value="active">Active</option>
				<option value="inactive">InActive</option>
			</select>
			
		</div>

		<button className=' mt-5 bg-purple-700 text-white font-sans font-bold hover:bg-white hover:text-purple-800 border-2
						   hover:border-2 hover:border-black p-3 rounded-2xl' type='submit'>Submit</button>
	</form>
	</div>
  )
}

export default Posting