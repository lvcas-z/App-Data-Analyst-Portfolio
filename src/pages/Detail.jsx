import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

import DetailHero from '../components/DetailHero'
import ObjectiveSection from '../components/ObjectiveSection'
import DashboardSection from '../components/DashboardSection'
import HighlightsSection from '../components/HighlightsSection'
import ConclusionSection from '../components/ConclusionSection'
import DocumentationSection from '../components/DocumentationSection'
import Footer from '../components/Footer'
import NotFound from './NotFound'

export default function Detail() {
    const { id } = useParams()

    const project = projects.find(x => x.id === id)

    if (!project) {
        return <NotFound />
    }

    return (
        <>
            <main className="detail">
                <DetailHero project={project} />

                <ObjectiveSection project={project} />

                <DashboardSection project={project} />

                <HighlightsSection project={project} />

                <ConclusionSection project={project} />

                <DocumentationSection project={project} />
            </main>

            <Footer />
        </>
    )
}