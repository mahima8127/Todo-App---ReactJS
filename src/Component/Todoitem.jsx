import React from 'react';


export default function Todoitem({task,id}) {
   
  function DeleteItem(){

  }
  return (
    <>
    <div className='row my-3'>
        <div className='col-10'>

            <div className='bg-light p-2'>
                {task}
            </div>

        </div>
        <div className='col-2'>
            <button className='btn  btn-danger' onClick={DeleteItem}><i class="fa fa-solid fa-trash"></i></button>
        </div>

    </div>
    </>
  );
}

