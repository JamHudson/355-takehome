export default function SummaryTile({ count, label }) {
    return (
        <div className="summary-tile">
            <div className="count">{count}</div>
            <div className="label">{label}</div>
        </div>
    )
}