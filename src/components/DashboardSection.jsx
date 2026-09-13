import DashboardView from './DashboardView'

export default function DashboardSection({ project }) {
    if (!project.dashboard?.length) {
        return null
    }

    return (
        <section className="case-section dashboard-section">
            <div className="section-label">
                02 / DASHBOARD
            </div>

            <p className="section-intro">
                Vistas principales del dashboard.
            </p>

            <div className="dashboard-list">
                {project.dashboard.map(item => (
                    <DashboardView
                        key={item.number}
                        item={item}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}