import { ArrowUpRight } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="contact section" id="contacto">
            <div className="section-label">
                04 / CONTACTO
            </div>

            <div>
                <h2>
                    Contacta
                    <br />
                    <em>conmigo.</em>
                </h2>

                <a
                    className="solid-btn"
                    href="mailto:lvcaszelaya@gmail.com"
                >
                    Contáctame <ArrowUpRight />
                </a>
            </div>
        </section>
    )
}