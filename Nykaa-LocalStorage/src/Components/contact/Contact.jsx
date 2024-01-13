import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [stateName, setStateName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    const storeInfo = (e) => {
        const obj = { firstName, lastName, stateName, subject, email }
        localStorage.setItem(email, JSON.stringify(obj));
    }
    
  return (
  <>
    <h1 className='contact'>Contact Us</h1>
    <div className="Contactcontainer">
        <form type="submit" onSubmit={storeInfo}>

            < label className=".label" htmlFor="fname">First Name: </label>
            <input value={firstName} onChange={(e) => setfirstName(e.target.value)} type='text' id="fname" className="name" name="firstname" placeholder="Firstname.." required/>


            < label className=".label" htmlFor="lname">Last Name: </label>
            <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text" id="lname" className="name" name="lastname" placeholder="Lastname.." required/>
            
            <div>
                <label className=".label" htmlFor="country">State</label>
                <select value={stateName} onChange={(e) => setStateName(e.target.value)} className="select" id="country" name="country">
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Australia">Chandigarh</option>
                    <option value="Manali">Manali</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Bengal">Bengal</option>

                </select>

                < label className=".label" htmlFor="subject">Subject</ label>
                <textarea value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" name="subject" placeholder="Write something.." ></textarea>

                <label className=".label" htmlFor="lname">Email or Phone Number:
                </ label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your Email or Phone Number" required />
            </div>
            <button className='contactbutton' type="submit">Submit</button>

        </form>
    </div>

    <h4 className='message'>YOU'LL RECEIVE A MESSAGE ON YOUR MAIL WITHIN 24 TO 48 WORKING HOURS!</h4>
</>
  )
}

export default Contact;