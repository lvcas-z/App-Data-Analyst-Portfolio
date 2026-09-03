import { ArrowUpRight } from 'lucide-react'

export default function DocumentationSection({ project }) {
    if (!project.documentation) {
        return null
    }

    return (
        <section className="case-section documentation">
            <div className="section-label">
                05 / DOCUMENTACIÓN
            </div>

            <a
                className="solid-btn"
                href={project.documentation}
                target="_blank"
                rel="noreferrer"
            >
                Ver documentación <ArrowUpRight />
            </a>
        </section>
    )
}