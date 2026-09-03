import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Proyecto no encontrado.</h1>

            <Link to="/">
                Volver al inicio
            </Link>
        </main>
    )
}