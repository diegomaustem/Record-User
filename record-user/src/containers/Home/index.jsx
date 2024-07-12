import { useEffect, useState, useRef } from 'react'
import './styles.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

    const [users, setUsers] = useState([])
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function getUsers() {
        const usersFromAPI = await api.get('/users')
        setUsers(usersFromAPI.data)
    }

    async function createUser() {
        await api.post('create-user', {
            name: inputName.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value
        })
        getUsers()
    }

    async function deleteUser(id) {
        await api.delete(`/delete-user/${id}`)
        getUsers()
    }

    useEffect( () => {
        getUsers()
    }, [])

    return (
        <div className="container">
            <form action="">
                <h1>Record Users</h1>
                <input name="name" type="text" ref={inputName} placeholder="Name"/>
                <input name="age" type="number" ref={inputAge} placeholder="Age"/>
                <input name="email" type="email" ref={inputEmail} placeholder="E-mail"/>
                <button type="button" onClick={createUser}>Register</button>
            </form>

            { users.map(user => (
                <div className="card" key={user.id}>
                    <div>
                        <p>Name: <span>{user.name}</span></p>
                        <p>Age: <span>{user.age}</span></p>
                        <p>E-mail: <span>{user.email}</span></p>
                    </div>
                    <button onClick={() => deleteUser(user.id)}>
                        <img src={ Trash } />
                    </button>
                </div>
            )) }
        </div>
    )
}

export default Home 