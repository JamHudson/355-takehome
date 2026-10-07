import { formatDate } from '../statuses.js'
import StatusBadge from "./StatusBadge";

export default function Job({ company, role, status, appliedOn, source, url, notes }) {

    return (
        <div className="job-card">
            <div className="grow">
                <h3><a href={url}>{role}</a></h3>
                <p className="company">{company}</p>
                <p className="meta">Applied {formatDate(appliedOn)} {source && "* via "+source}</p>
                {notes && <p className="note">{notes}</p>}
            </div>
            <StatusBadge status={status} />
        </div>
    )
}