import Job from "./Job.jsx"

export default function Applications({ applications }) {
    const sortedApps = [...applications].sort((a,b) => b.appliedOn.localeCompare(a.appliedOn))

    return (
        <>
            <h2>Applications</h2>
            <div className="job-list">
                {sortedApps.map(el=><Job key={el.id} {...el} />)}
            </div>
        </>
    )
}