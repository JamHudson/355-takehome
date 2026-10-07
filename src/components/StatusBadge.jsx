import { STATUS_LABELS } from '../statuses.js'

export default function StatusBadge({ status }) {
    return (
        <div className={"badge"+" badge-"+status}>
            {STATUS_LABELS[status]}
        </div>
    )
}