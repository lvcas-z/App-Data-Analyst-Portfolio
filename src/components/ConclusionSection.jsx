export default function ConclusionSection({ project }) {
    if (!project.conclusion) {
        return null
    }

    return (
        <section className="case-section conclusion">
            <div className="section-label">
                04 / CONCLUSIÓN
            </div>

            <p className="large-copy">
                {project.conclusion}
            </p>
        </section>
    )
}