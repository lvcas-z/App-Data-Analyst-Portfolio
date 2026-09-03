import { tools } from '../data/tools'

export default function ToolsSection() {
    return (
        <section className="tools section" id="herramientas">
            <div className="section-label">
                02 / HERRAMIENTAS
            </div>

            <div className="tool-grid">
                {tools.map(tool => (
                    <div className="tool" key={tool.id}>
                        <span>{tool.number}</span>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}