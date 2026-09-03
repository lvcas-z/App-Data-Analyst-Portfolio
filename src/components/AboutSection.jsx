import { ArrowUpRight } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className="intro section" id="sobre-mi">
            <div className="section-label">
                01 / ABOUT
            </div>

            <div className="intro-copy">
                <p className="large-copy">
                    Analista Programador orientado al análisis de datos.
                    Mi objetivo es transformar datos en información clara, encontrar patrones y generar insights que ayuden a tomar mejores decisiones.
                </p>

                <p>
                    Combino análisis de datos, visualización y programación para desarrollar soluciones de principio a fin. Trabajo con Power BI, SQL, Power Query, DAX y Excel, complementando este perfil con experiencia en desarrollo web y tecnologías como JavaScript, React, Next.js y Node.js.
                </p>

                <a className="text-link" href="#contacto">
                    Hablemos <ArrowUpRight />
                </a>
            </div>
        </section>
    )
}