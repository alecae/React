import useInput from "./UseInput";

const BasicForm = (props) => {
    const firstName= useInput()
    const lastName= useInput()
    const email=useInput ()

    return (
      <form>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' {...firstName}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' {...lastName}/>
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name'{...email} />
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;