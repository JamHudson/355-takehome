import { STATUS_LABELS } from '../statuses.js'
import SummaryTile from './SummaryTile.jsx'

export default function Summary({ applications = []}) {
    const totalApps = applications.length;
    const appliedApps = applications.filter(app => app.status === "applied").length;
    const interviewApps = applications.filter(app => app.status === "interview").length;
    const offerApps = applications.filter(app => app.status === "offer").length;
    const rejectedApps = applications.filter(app => app.status === "rejected").length;

    return (
        <div className="summary">
            <SummaryTile label="Total" count={totalApps}/>
            <SummaryTile label="Applied" count={appliedApps} />
            <SummaryTile label="Interviewing" count={interviewApps} />
            <SummaryTile label="Offer" count={offerApps} />
            <SummaryTile label="Rejected" count={rejectedApps} />
        </div>
    )
}