import { projects } from '../data/projects'

import ProjectCard from '../components/ProjectCard'
import ComingSoonCard from '../components/ComingSoonCard'

export default function ProjectsSection() {

    return (

        <section className="work section" id="proyectos">

            <div className="work-head">

                <div className="section-label">
                    03 / PROYECTOS
                </div>

                <p>
                    Una selección de trabajos recientes
                </p>

            </div>

            <div className="project-grid">

                {projects.map((p, i) => (
                    <ProjectCard
                        key={p.id}
                        project={p}
                        index={i}
                    />
                ))}

                {projects.length <= 3 && (
                    <ComingSoonCard index={projects.length} />
                )}

            </div>

        </section>
    )
}