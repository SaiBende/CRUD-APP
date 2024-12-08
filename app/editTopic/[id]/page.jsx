import React from 'react'
import EditTopicForm from '@/components/EditTopicForm';


const getTopicById=async(id)=>{
  try {
    const res= await fetch(`http://localhost:3000/api/topics/${id}`,{cache:'no-store'});

    if(!res.ok){
      throw new Error("Failed tofetch the Topic");
    }
     
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EditTopic({params}) {
  const {id}=params;
  const {topic}= await getTopicById(id);
  const {title,description}= topic;
  console.log(topic);
 
  
  return (

  
    <EditTopicForm id={id} title={title}  description={description}  />
    
  )
}

export default EditTopic; 