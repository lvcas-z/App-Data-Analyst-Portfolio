import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer>
            <span>© 2024 Lucas Zelaya</span>

            <a
                href="https://www.linkedin.com/in/lucas-zelaya"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn <ArrowUpRight />
            </a>

            <a href="#inicio">
                Volver arriba ↑
            </a>
        </footer>
    )
}