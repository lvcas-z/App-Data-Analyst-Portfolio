export default function ObjectiveSection({ project }) {
    return (
        <section className="case-section objective">
            <div className="section-label">
                01 / OBJETIVO
            </div>

            <div className="detail-body">
                <p className="large-copy">
                    {project.detail}
                </p>

                <div className="detail-side">
                    <span className="section-label">
                        HERRAMIENTAS
                    </span>

                    <div className="tags">
                        {project.tools.map(tool => (
                            <span key={tool}>{tool}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}