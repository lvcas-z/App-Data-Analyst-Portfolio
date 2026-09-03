export default function DashboardView({ item, project }) {
    return (
        <article className="dashboard-view">
            <div className="dashboard-copy">
                <span>{item.number}</span>

                <h2>{item.title}</h2>

                <p>{item.description}</p>
            </div>

            <img
                src={item.image}
                alt={`${item.title} — ${project.title}`}
            />
        </article>
    )
}