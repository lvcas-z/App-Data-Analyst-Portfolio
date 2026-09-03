import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'

export default function Navbar({ dark, setDark }) {
    const [open, setOpen] = useState(false)

    const items = [
        ['About', 'about'],
        ['Herramientas', 'herramientas'],
        ['Proyectos', 'proyectos'],
        ['Contacto', 'contacto']
    ]

    return (
        <header className="nav">
            <Link className="brand" to="/">
                LZ<span>.</span>
                <small>DATA ANALYST</small>
            </Link>

            <button
                className="menu-btn"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menú"
            >
                {open ? <X /> : <Menu />}
            </button>

            <nav className={open ? 'links open' : 'links'}>
                {items.map(([label, id]) => (
                    <a
                        key={id}
                        href={`/#${id}`}
                        onClick={() => setOpen(false)}
                    >
                        {label}
                    </a>
                ))}

                <button
                    className="theme"
                    onClick={() => setDark(!dark)}
                    aria-label="Cambiar tema"
                >
                    {dark ? <Sun /> : <Moon />}
                </button>
            </nav>
        </header>
    )
}