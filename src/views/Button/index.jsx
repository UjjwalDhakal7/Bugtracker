import react from 'react'
import './style.css'
// import AddBug from '../Forms/AddBug';
import PopupForm from '../Forms/AddBug';

function AddBtn() {
  return (
    <>
    <button className='addbtn' onClick={PopupForm}>Add Bug</button>
    </>
  )
}
export default AddBtn;