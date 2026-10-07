import Job from "./Job.jsx"

export default function Applications({ applications }) {
    const sortedApps = [...applications].sort()

    return (
        <>
            <h2>Applications</h2>
            <div className="job-list">
                {sortedApps.map(el=><Job key={el.id} {...el} />)}
            </div>
        </>
    )
}