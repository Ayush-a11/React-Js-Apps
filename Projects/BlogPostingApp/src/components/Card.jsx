import React from 'react'
import utilObj from '../appWrite/util'
import {Link} from 'react-router-dom'

function Card({id,title,fileId}) {

	return(
	<Link to={`/post/${id}`}>
		<div>
			<div>
				<img src={utilObj.getFilePreview(fileId)} alt={title}/></div>
			<h2>{title}</h2>
		</div>

	</Link>
  )
}


export default Card