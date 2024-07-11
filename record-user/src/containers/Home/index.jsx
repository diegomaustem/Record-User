import './styles.css'
import Trash from '../../assets/trash.svg'

function Home() {
    // Dados para teste ::: 
    const users = [
        {
            id: 0.5031356645271292,
            name: 'Thiago Ferreira',
            age: 29,
            email: 'Thiago@gmail.com'
        },
        {
            id: 0.8294731192217013,
            name: 'Diego Bernardo',
            age: 34,
            email: 'diego@gmail.com'
        },
        {
            id: 0.725270324941552,
            name: 'Matheus Carvalho',
            age: 27,
            email: 'matheus@gmail.com' 
        }
    ]
    return (
        <div className="container">
            <form action="">
                <h1>Record Users</h1>
                <input name="name" type="text" placeholder="Name"/>
                <input name="age" type="number" placeholder="Age"/>
                <input name="email" type="email" placeholder="E-mail"/>
                <button type="button">Register</button>
            </form>

            { users.map(user => (
                <div className="card" key={user.id}>
                    <div>
                        <p>Name: <span>{user.name}</span></p>
                        <p>Age: <span>{user.age}</span></p>
                        <p>E-mail: <span>{user.email}</span></p>
                    </div>
                    <button>
                        <img src={ Trash } />
                    </button>
                </div>
            )) }
        </div>
    )
}

export default Home 