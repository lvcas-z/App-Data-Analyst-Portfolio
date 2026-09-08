import tools from '../data/tools'

export default function ToolsSection() {
    return (
        <section className="tools section" id="herramientas">
            <div className="section-label">
                02 / HERRAMIENTAS
            </div>

            <div className="tool-grid">
                {tools.map(tool => {
                    const Icon = tool.icon

                    return (
                        <div className="tool" key={tool.id}>

                            <div className="tool-title">
                                <Icon className="tool-icon" />
                                <h3>{tool.name}</h3>
                            </div>

                            <p>{tool.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}