export default function ComingSoonCard({ index }) {

    return (

        <div className={`project-card coming-soon p${index}`}>

            <div className="project-image">

                <span className="project-index">
                    0{index + 1}
                </span>

                <div className="coming-soon-label">
                    Próximamente
                </div>

            </div>

        </div>
    )
}