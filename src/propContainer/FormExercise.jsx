import React, { useState } from 'react'

const FormExercise = () => {
    const [FirstName, setFirstName] = useState("")
    const [FirstNameError, setFirstNameError] = useState(null);
    const [LastName, setLastName] = useState("")
    const [Gender, setGender] = useState("")
    const [Department, setDepartment] = useState("")
    const [IsChecked, setIsChecked] = useState(false)

    const userDetails = { FirstName, LastName, Gender, Department, IsChecked }

    const userHandler = (e) => {
        e.preventDefault()
        if (FirstName.length === 0 || FirstNameError !== null) {

            setFirstNameError("please provide valid input")

        }
        else {
            console.log(userDetails)
        }
    }

    console.log(FirstNameError
        !== null)

    const handleChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
        setFirstNameError(value.length < 5 ? "firstname must be greater than 5 characters":null);
    }

    return (
        <section className='FormSection'>
            <div className='container'>
                <form onSubmit={userHandler}>
                    <label >FirstName</label>
                    <input type="text" name='FirstName' onChange={handleChange} /> <br />

                    {FirstNameError && <div style={{ color: 'red' }}>{FirstNameError}</div>}

                    <label>LastName1</label>
                    <input type="text" name='LastName' onChange={(e) => setLastName(e.target.value)} /><br />
                    <label>Gender:</label>

                    <input type="radio" name='Gender' value='male' onClick={(e) => setGender(e.target.value)} />
                    <label > male </label>
                    <input type="radio" value='female' name='Gender' onClick={(e) => setGender(e.target.value)} />
                    <label > female</label><br />

                    <label>Department:
                        <select onChange={(e) => setDepartment(e.target.value)}>
                            <option value="cse"  >CSE</option>
                            <option value="mech"   >MECH</option>
                            <option value="ece"    >ECE</option>
                        </select>
                    </label><br />
                    <label >Do you Have Email: </label>
                    <input type="checkbox" checked={IsChecked} onChange={(e) => setIsChecked(e.target.checked)} /> <br />

                    <button type='submit'>Submit</button>
                    <button type='reset' >Reset</button><br />
                </form>
            </div>
        </section>

    )
}

export default FormExercise;