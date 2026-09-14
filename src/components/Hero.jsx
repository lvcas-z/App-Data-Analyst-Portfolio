import { ArrowUpRight, ChevronRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <p className="kicker">
                Disponible para nuevos proyectos <i />
            </p>

            <h1>
                Lucas Zelaya
                <br />
                <em>Data Analyst.</em>
            </h1>

            <div className="hero-bottom">
                <p>
                    Analista de datos enfocado en transformar preguntas complejas
                    en decisiones simples, visuales y accionables.
                </p>

                <div className="hero-actions">
                    <a className="outline-btn" href="#proyectos">
                        Ver proyectos <ChevronRight />
                    </a>

                    <a
                        className="outline-btn secondary-btn"
                        href="/public/cv/Zelaya-Lucas.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver CV <ArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    )
}