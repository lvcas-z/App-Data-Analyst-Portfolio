import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
    return (
        <Link
            className={`project-card p${index}`}
            to={`/projects/${project.id}`}
        >
            <div className="project-image">
                <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                />

                <span className="project-index">
                    0{index + 1}
                </span>
            </div>

            <div className="project-meta">
                <div>
                    <span className="eyebrow">
                        {project.eyebrow}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                </div>

                <ArrowUpRight className="arrow" />
            </div>

            <div className="tags">
                {project.tools.map(tool => (
                    <span key={tool}>{tool}</span>
                ))}

                <span>{project.year}</span>
            </div>
        </Link>
    )
}