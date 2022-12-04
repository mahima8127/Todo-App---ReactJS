import React,{useState} from 'react';
import Todoitem from './Todoitem'



export default function Todo() {

const[task,setTask]=useState([]);
   
const [data,setData]=useState("");

function TaskUpdate(){

   setTask([data,...task])
   setData("")
}

function DeleteItem(del_id){

  const newTask=task.filter((item,id)=>{
    return id!=del_id
  })
  setTask(newTask)

}

function RemoveAll(){
  setTask([])
}

   
  return (
    <>
    <div className='row'>
        <div className='col-sm-12 col-md-6 bg-white mx-auto my-5 p-5 rounded shadow-lg'>
            <h2 className='h2 text-center my-2'>Todo List</h2>
            <div className='col-12'>
            <div className='row mt-3'>
                <div className='col-10'><input value={data} onChange={(e)=>setData(e.target.value)} className='form-control shadow-sm' type="text" placeholder="Enter Todo item.."/></div>
                <div className='col-2'><button className=' shadow btn btn-info' onClick={TaskUpdate}><i className='fa fa-solid fa-plus'></i></button></div>
            </div>
            <div className='row my-3'>
               <div className='col-12'>
                <span className='h6'>List of Todos :- </span>                
               </div>
            </div>   
            
            
            {
                task.length == 0 &&
                <div className="alert alert-danger" role="alert">
                Todo List Empty...
              </div>
            }

            {
                task.map((item,id)=>{return <div className='row my-3'>
                <div className='col-10'>
        
                    <div className='bg-light p-2'>
                        {item}
                    </div>
        
                </div>
                <div className='col-2'>
                    <button className='btn  btn-danger' onClick={()=>DeleteItem(id)}><i class="fa fa-solid fa-trash"></i></button>
                </div>
        
            </div>})
            }
          
         
          <div className='row mt-5'>
          <hr></hr>
            <div className='col-6 mx-auto'>
            {
                task.length > 0 &&
                <button className='btn btn-danger' onClick={RemoveAll}>Remove All</button>
            }
              
              </div>
          </div>
           

        </div>
        </div>
        

    </div>
    
    </>
        
    
  )
}
