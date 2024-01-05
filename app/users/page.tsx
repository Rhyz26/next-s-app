import React from 'react'

interface User{
    id: number;
    name: string;
    email: string; 
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store'})
    const users: User[] = await res.json();
  return (
    <>
    <h1 className='text-center text-xl' >Users</h1>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    <table className='table table-xs table-pin-rows table-pin-cols'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
        <td>{user.email}</td>
         </tr>)}

        </tbody>
    </table>
    </>
     )
}

export default UsersPage 
