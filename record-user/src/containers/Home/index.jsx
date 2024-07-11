import './styles.css'
import Trash from '../../assets/trash.svg'

function Home() {
    return (
        <div className="container">
            <form action="">
                <h1>Cadastro de usuários</h1>
                <input name="name" type="text"/>
                <input name="idade" type="number"/>
                <input name="email" type="email"/>
                <button type="button">Cadastrar</button>
            </form>

            <div>
                <div>
                    <p>Nome: </p>
                    <p>Idade: </p>
                    <p>E-mail: </p>
                </div>
                <button>
                    <img src={ Trash } />
                </button>
            </div>
        </div>
    )
}

export default Home 