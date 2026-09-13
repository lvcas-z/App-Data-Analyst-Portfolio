import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import tools from '../data/tools'

export default function DetailHero({ project }) {

    return (
        <>
            <Link className="back" to="/">
                ← Volver a proyectos
            </Link>

            <section className="detail-hero">

                <div className="detail-heading">

                    <span className="eyebrow">
                        {project.eyebrow} / {project.year}
                    </span>

                    <h1>{project.title}</h1>

                    <p>{project.description}</p>

                    <div className="hero-tools">

                        <span className="section-label">
                            HERRAMIENTAS
                        </span>

                        <div className="tags">
                            {project.tools.map(toolName => {

                                const tool = tools.find(
                                    item =>
                                        item.name.toLowerCase() ===
                                        toolName.toLowerCase()
                                )

                                const Icon = tool?.icon

                                return (
                                    <span
                                        key={toolName}
                                        className="tool-tag"
                                    >
                                        {Icon && (
                                            <Icon className="tool-tag-icon" />
                                        )}

                                        {toolName}
                                    </span>
                                )
                            })}
                        </div>

                    </div>

                    {project.documentation && (
                        <a
                            className="solid-btn documentation-btn"
                            href={project.documentation}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver documentación
                            <ArrowUpRight />
                        </a>
                    )}

                </div>

                <img
                    className="detail-hero-image"
                    src={project.image}
                    alt={`Imagen principal de ${project.title}`}
                />

            </section>
        </>
    )
}