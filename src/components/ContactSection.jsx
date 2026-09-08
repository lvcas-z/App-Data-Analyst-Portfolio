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

                <div className="contact-actions">

                    <a
                        className="contact-btn"
                        href="mailto:lvcaszelaya@gmail.com"
                    >
                        Contáctame <ArrowUpRight />
                    </a>

                    <a
                        className="contact-btn linkedin-btn"
                        href="https://www.linkedin.com/in/lucas-zelaya"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn <ArrowUpRight />
                    </a>

                </div>

            </div>

        </section>
    )
}