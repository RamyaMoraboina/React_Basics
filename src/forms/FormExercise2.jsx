import React, { useState ,useEffect} from 'react'

const FormExercise2 = () => {
  const initialState = { firstname: "", lastname: "", gender: "", department: "", email: "", qtn: "", }
  const [formData, setformData] = useState(initialState);
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);

  const handleChange = (event) => {
    
    setformData(() => ({
      ...formData,
      [event.target.name]: event.target.name === "qtn" ? event.target.checked ? "Yes" : 'No' : event.target.value
    }))
  }

    // setformData(() => {
    //   let value = "";
    //   if (event.target.name === "qtn") {
    //     value = event.target.checked ? "Yes" : 'No'
    //   } else {
    //     value = event.target.value
    //   }
    //   return {
    //     ...formData,
    //     [event.target.name]: value
    //   }
    // })  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData))
    setIsSubmit(true)
    
  }
  useEffect(() => {
   
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formData)
      
    }
    
    
  },[formErrors]);

  const validate=(values)=>{
    const errors={};
    
    if(!values.firstname ){
      errors.firstname = "Fsername is required";
    }
    if(!values.lastname){
      errors.lastname = "Lastname is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    }
    return errors;

  }

  return (
    <div>
      <pre> {JSON.stringify(formData,undefined,2)} </pre>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" id='Fname' name='firstname' onChange={handleChange} value={formData.firstname} /><br />
         {formErrors.firstname && <div style={{color:"red"}}> {formErrors.firstname} </div> }  

        <label htmlFor="lastname">LastName</label>
        <input type="text" id='Lname' name='lastname' onChange={handleChange} value={formData.lastname} />
            {formErrors && <div style={{color:"red"}}> {formErrors.lastname} </div>} 

        <label htmlFor="gender">Gender: </label>
        <label htmlFor="male">male</label>
        <input type="radio" name="gender" value='male' onChange={handleChange} />
        <label htmlFor="female">female </label>
        <input type="radio" name='gender' value='female' onChange={handleChange} /><br />
        <label htmlFor="other">Other</label>
        <input type="radio" name='gender' value='other' onChange={handleChange} /><br />



        <label htmlFor="department">Department: </label>
        <select name="department" onChange={handleChange} value={formData.department}>
          <option value="">Please Select</option>
          <option value="CSE">CSE</option>
          <option value="civil">civil</option>
          <option value="MECH">MECH</option>
          <option value="ECE">ECE</option>
        </select><br />

        <label htmlFor="qtn">Do You Hava Mail: </label>
        <input type="checkbox" name='qtn' value={formData.qtn} onChange={handleChange} /><br />
        <div>
        </div>
        <label htmlFor="email">Mail</label>
        <input type="text" name='email' onChange={handleChange} value={formData.email} />
          {formErrors.email&& <div style={{color:"red"}}> {formErrors.email} </div>} <br />
         
        <button type='submit'> submit</button>
        <button type='reset'>Reset</button>

      </form>
    </div>
  )
}

export default FormExercise2