import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

function Userlist() {
  const [userData, setUserData]=useState(null)
  
  // get
  const fetchUsersData= async()=>{
      const resp= await axios.get('/getUsers' )
      // console.log(resp);
      // if no user are there dont send the value.
      if (resp.data.user.length > 0){
          setUserData(resp.data.user)
      }
     
  };

  useEffect(() => {
    fetchUsersData()
   

  },[userData])

  // edit
  const handleEdit = async (user)=>{
    const userName= prompt("Enter Your Name")
    const userEmail= prompt("Enter your email")

    if (!userName || !userEmail){
      alert("you enter both email and name")
    } else{
      const resp= await axios.put(`/editUsers/${user._id}`,{
        name:userName,
        email:userEmail
      })
      console.log(resp)
    }
  }

  // delete
  const handleDelete = async (userId)=>{
    
      const resp= await axios.delete(`/deleteUsers/${userId}`)
      console.log(resp)
    
  }
  
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          All Users
        </h1>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Name
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Email
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Edit
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.map((userss)=>( 
            <tr>
              <td className="px-4 py-3">{userss.name}</td>
              <td className="px-4 py-3">{userss.email}</td>
              <td className="px-4 py-3">
                <button className="hover:text-green-500"
                onClick={()=>handleEdit(userss)}
                
                >Edit</button>
              </td>
              <td className="px-4 py-3 text-lg text-gray-900">
                <button className="hover:text-red-500"
                onClick={()=>handleDelete(userss._id)}
                >Delete</button>
              </td>
            </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  </section>

  )
}

export default Userlist