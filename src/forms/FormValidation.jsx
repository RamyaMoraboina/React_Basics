import  React,{useState} from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [formData, setformData] = useState({ firstname: "", lastname: "", gender: "", department: "", email: "ramya", qtn: "", });

    

    const handleChange = (event) => {
        setformData(() => ({
            ...formData,
            [event.target.name]: event.target.name === "qtn" ? event.target.checked ? "Yes" : 'No' : event.target.value
        }))

        // OR we can write setformData  like this also
        //setformData(() => {
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

        // setformData((prev) => {
        //   let value = "";
        //   if (event.target.name === "qtn") {
        //     value = event.target.checked ? "Yes" : 'No'
        //   } else {
        //     value = event.target.value
        //   }
        //   return {
        //     ...prev,
        //     [event.target.name]: value
        //   }
        // })

    }
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(formData)
    // }

    
       

        const onSubmit = (event) => {
           
            console.log(formData)
        }
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" id='Fname' name='firstname' onChange={handleChange} value={formData.firstname}
                   />
                <br />
                {/* {errors.firstname && 
                <div style={{color:"red"}}>this field is required</div> } */}

                <label htmlFor="lastname">LastName</label>
                <input type="text" id='Lname' name='lastname' onChange={handleChange} value={formData.lastname} 
                // {...register("lastname",{required:true})} 
                />
                {/* {errors.lastname && 
                <div style={{color:"red"}}>this field is required</div> } */}
                <br />

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
                <input type="email" name='email' onChange={handleChange} value={formData.email}
                />
                <button type='submit'> submit</button>

            </form>
        </div>
    )
}


export default FormValidation