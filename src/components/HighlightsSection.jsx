import HighlightCard from '../components/HighlightCard'

export default function HighlightsSection({ project }) {
    if (!project.highlights?.length) {
        return null
    }

    return (
        <section className="case-section highlights-section">
            <div className="section-label">
                03 / PRINCIPALES HALLAZGOS
            </div>

            <div className="highlight-grid">
                {project.highlights.map(item => (
                    <HighlightCard
                        key={item.title}
                        item={item}
                    />
                ))}
            </div>
        </section>
    )
}