import { useState } from "react";
import "./App.css";

function App() {
  const [formData , setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country :"India",
    streetAddress : "", 
    city : "",
    state : "",
    zip : "",
    comments : false,
    candidates : false,
    offer : false,
    pushNoti : ""



  }) 
  function handleChange(e){
    const {name , value , type ,checked} = e.target
    setData((prevData)=>(
      {
        ...prevData,
        [name] : (type=="checkbox")? (checked) : (value)  
      }))
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("Final Data Entered:")
    console.log(formData)
  }
  
   return(
    <div className="flex flex-col justify-center  p-3 w-[70%] m-auto gap-4">
      <h1 className=" text-3xl font-bold text-center text-blue-400">Form Submition using React</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className=" font-bold ml-2">First Name</label>
          <br/>
          <input
          type="text"
          name="firstName"
          placeholder="Ansh"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/> 
          <label htmlFor="lastName" className=" font-bold ml-2">Last Name</label>
          <br/>
          <input
          type="text"
          placeholder="Malik"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          >
          </input>
          <br/><br/>  
          <label htmlFor="email" className=" font-bold ml-2">Email Address</label>
          <br/>
          <input
          type="text"
          name="email"
          placeholder="ansh123@gmail.com"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/>
          <label htmlFor="country"  className=" font-bold ml-2">Country</label>
          <br/>
          <select
          name="country"
          id="country"
          onChange={handleChange}
          value={formData.country}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          >
            <option>India</option>
            <option>United Statses</option>
            <option>Canada</option>
            <option>France</option>
            <option>Japan</option>
            <option>Germany</option>
            <option>Mexico</option>
          </select>
          <br/><br/>
          <label htmlFor="streetAddress" className=" font-bold ml-2">Street Address</label>
          <br/>
          <input
          type="text"
          placeholder="B-25C"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/>
          <label htmlFor="city" className=" font-bold ml-2">City</label>
          <br/>
          <input
          type="text"
          placeholder="ABC city"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/>
          <label htmlFor="state" className=" font-bold ml-2">State</label>
          <br/>
          <input
          type="text"
          placeholder="Punjab"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/>
          <label htmlFor="zip" className=" font-bold ml-2">ZIP Code</label>
          <br/>
          <input
          type="text"
          placeholder="110023"
          name="zip"
          id="zip"
          value={formData.zip}
          onChange={handleChange}
          className=" border-2 px-3 py-1 my-2 w-[70%]"
          ></input>
          <br/><br/>
          <fieldset>
            <legend className=" font-semibold text-lg">Notifications By Emails </legend>
            <div className="flex items-baseline gap-3">
            <input
            type="checkbox"
            name="comments"
            id="comments"
            checked={formData.comments}
            onChange={handleChange}
            className=" scale-105 shadow-md "
            ></input>
            <div>
            <label htmlFor="comments" className=" font-semibold opacity-80">Comments</label>
            <p className=" text-gray-400">Get Notified when someone posts a comment on your post</p>
            </div>
            </div>
            <br/>
            <div className="flex items-baseline gap-3">
            <input
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            onChange={handleChange}
            className=" scale-105 shadow-md "
            ></input>
            <div>
            <label htmlFor="candidates" className=" font-semibold opacity-80">Candidates</label>
            <p className=" text-gray-400">Get Notified when a candidate applies for a job</p>
            </div>
            </div>
            <br/>
            <div className="flex items-baseline gap-3">
            <input
            type="checkbox"
            name="offer"
            id="offer"
            checked={formData.offer}
            onChange={handleChange}
            className=" scale-105 shadow-md "
            ></input>
            <div>
            <label htmlFor="offer" className=" font-semibold opacity-80">Offer</label>
            <p className=" text-gray-400">Get Notified when a candidate accepts of rejects an offer</p>
            </div>
            </div>
          </fieldset>
          <br/><br/>
          <fieldset>
            <legend className=" font-semibold text-lg">Push Notifications</legend>
            <p className="text-gray-400">These are sent via sms on your phone</p>
            <br/>
            <div className="flex gap-2">
            <input
            type="radio"
            name="pushNoti"
            id="everything"
            value="everything"
            onChange={handleChange}
            ></input>
            <label htmlFor="pushNoti" className=" font-semibold opacity-80">Everything</label>
            </div>
            <div className="flex gap-2">
            <input
            type="radio"
            name="pushNoti"
            id="same"
            value="same"
            onChange={handleChange}
            ></input>
            <label htmlFor="pushNoti" className=" font-semibold opacity-80">Same as Email</label>
            </div>
            <div className="flex gap-2">
            <input
            type="radio"
            name="pushNoti"
            id="none"
            value="none"
            onChange={handleChange}
            ></input>
            <label htmlFor="pushNoti" className=" font-semibold opacity-80">No Push Notifications</label>
            </div>
          </fieldset>
          <button className=" bg-blue-400 text-white font-bold px-4 py-1 mt-2 rounded-lg text-center">Save</button>

      </form>
    </div>
   )
}

export default App;
