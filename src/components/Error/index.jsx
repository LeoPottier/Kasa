import './style.scss'
import { Link } from 'react-router-dom'

function Error () {
    return (
        <section className='error'>
            <p className='error-chiffre'>404</p>
            <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="error-link" to="/">
            Retourner sur la page d'acceuil
            </Link>
        </section>
    )
}

export default Error