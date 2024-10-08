import React from 'react'
import { useParams } from 'react-router-dom'

export const BlogDetails = () => {
    const {id} = useParams();
    // Fetch blog data from API or local storage based on id

  return (
    <div>
        Blog Details: {id}
    


    </div>
  )
}
