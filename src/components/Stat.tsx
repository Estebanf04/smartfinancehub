
export default function Stat() {
  return (
    <div className="lg:mr-10 stats shadow flex flex-col lg:flex-row max-w-xl">
        <div className="stat">
            <div className="stat-figure text-secondary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="hidden lg:inline-block h-8 w-8 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
            </div>
            <div className="stat-title">
                Nuevos clientes
            </div>
            <div className="stat-value">
                1,800
            </div>
            <div className="stat-desc">
                ↗︎ 400 (22%)
            </div>
        </div>

        <div className="stat">
            <div className="stat-figure text-secondary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="hidden lg:inline-block h-8 w-8 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
            </div>
            <div className="stat-title">
                Clientes totales
            </div>
            <div className="stat-value">
                34K
            </div>
            <div className="stat-desc">
                ↘︎ 90 (14%)
            </div>
        </div>
    </div>
  )
}
