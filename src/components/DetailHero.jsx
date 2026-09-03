import { Link } from 'react-router-dom'

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