import { Footprints, MapPin, Store,ChartColumnIncreasing,ChartPie } from 'lucide-react'

const highlightIcons = {
    store: Store,
    shoe: Footprints,
    location: MapPin,
    chartIncrease:ChartColumnIncreasing,
    chartPie:ChartPie
}

export default function HighlightCard({ item }) {
    const Icon = highlightIcons[item.icon] || Store

    return (
        <article className="highlight">
            <Icon className="highlight-icon" />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <strong>{item.value}</strong>

            <small>{item.secondaryValue}</small>
        </article>
    )
}