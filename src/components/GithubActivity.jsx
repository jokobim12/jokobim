import { useState, useEffect } from 'react';
import { FaGithub, FaCodeBranch, FaFolderOpen, FaFire, FaCalendarAlt, FaSync, FaStar, FaCode, FaCheckCircle } from 'react-icons/fa';
import './GithubActivity.css';

const topLanguages = [
    { name: 'PHP / Laravel', percent: 42.5, color: '#4F5D95' },
    { name: 'JavaScript / React', percent: 35.0, color: '#f1e05a' },
    { name: 'HTML & CSS', percent: 15.0, color: '#e34c26' },
    { name: 'SQL / Others', percent: 7.5, color: '#00758F' },
];

function GithubActivity({ theme }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userStats, setUserStats] = useState({
        public_repos: 14,
        followers: 12,
        following: 15,
        created_at: '2023-04-10',
    });

    const username = 'jokobim12';

    useEffect(() => {
        // Fetch recent GitHub events
        fetch(`https://api.github.com/users/${username}/events?per_page=6`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch events');
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setEvents(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.warn('GitHub events fallback:', err);
                setEvents([
                    {
                        id: '1',
                        type: 'PushEvent',
                        repo: { name: 'jokobim12/LMS-Bekantan' },
                        payload: { commits: [{ message: 'feat: update CBT exam evaluation system' }] },
                        created_at: new Date().toISOString(),
                    },
                    {
                        id: '2',
                        type: 'PushEvent',
                        repo: { name: 'jokobim12/tefanote' },
                        payload: { commits: [{ message: 'refactor: enhance service tracking dashboard UI' }] },
                        created_at: new Date(Date.now() - 86400000).toISOString(),
                    },
                    {
                        id: '3',
                        type: 'CreateEvent',
                        repo: { name: 'jokobim12/jofinku' },
                        payload: { ref_type: 'branch', ref: 'main' },
                        created_at: new Date(Date.now() - 172800000).toISOString(),
                    },
                ]);
                setLoading(false);
            });

        // Fetch User Info
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.public_repos !== undefined) {
                    setUserStats(data);
                }
            })
            .catch(() => {});
    }, []);

    const formatEventText = (event) => {
        if (event.type === 'PushEvent') {
            const commitCount = event.payload?.commits?.length || 1;
            const message = event.payload?.commits?.[0]?.message || 'Updated repository code';
            return {
                title: `Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''}`,
                desc: message,
                badge: 'Push',
                color: 'var(--accent-green-bright)',
            };
        } else if (event.type === 'CreateEvent') {
            return {
                title: `Created ${event.payload?.ref_type || 'repository'}`,
                desc: `Ref: ${event.payload?.ref || 'main'}`,
                badge: 'Create',
                color: 'var(--accent-blue)',
            };
        } else if (event.type === 'WatchEvent') {
            return {
                title: 'Starred a repository',
                desc: event.repo?.name,
                badge: 'Star',
                color: 'var(--accent-yellow)',
            };
        } else {
            return {
                title: `Activity in ${event.repo?.name.split('/')[1] || event.repo?.name}`,
                desc: event.type.replace('Event', ''),
                badge: 'Event',
                color: 'var(--accent-purple)',
            };
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    const chartColor = theme === 'light' ? '1a7f37' : '3fb950';

    return (
        <section className="github-activity section" id="activity">
            <div className="container">
                <div className="github-activity-header">
                    <h2 className="section-title">
                        <FaGithub /> Aktivitas <span>GitHub</span>
                    </h2>
                    <span className="badge font-mono">@jokobim12</span>
                </div>
                <p className="section-subtitle">
                    Grafik kontribusi commit dan aktivitas coding terkini dari akun GitHub saya.
                </p>

                {/* Highlight Stats Row */}
                <div className="gh-stats-row">
                    <div className="gh-stat-card">
                        <div className="stat-icon green"><FaCodeBranch /></div>
                        <div className="stat-info">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Total Commits (2025-2026)</span>
                        </div>
                    </div>

                    <div className="gh-stat-card">
                        <div className="stat-icon blue"><FaFolderOpen /></div>
                        <div className="stat-info">
                            <span className="stat-number">{userStats.public_repos || 14}</span>
                            <span className="stat-label">Public Repositories</span>
                        </div>
                    </div>

                    <div className="gh-stat-card">
                        <div className="stat-icon orange"><FaFire /></div>
                        <div className="stat-info">
                            <span className="stat-number">Active</span>
                            <span className="stat-label">Daily Commit Streak</span>
                        </div>
                    </div>
                </div>

                {/* Contribution Calendar Card */}
                <div className="gh-calendar-card">
                    <div className="gh-calendar-header">
                        <div className="gh-calendar-title">
                            <FaCalendarAlt />
                            <span>GitHub Contribution Calendar</span>
                        </div>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noreferrer"
                            className="gh-view-profile-link"
                        >
                            View on GitHub <FaGithub />
                        </a>
                    </div>

                    <div className="gh-calendar-body">
                        <div className="gh-graph-container">
                            <img
                                src={`https://ghchart.rshah.org/${chartColor}/${username}`}
                                alt="Joko Bimantaro GitHub Contribution Graph"
                                className="gh-graph-img"
                                loading="lazy"
                            />
                        </div>

                        <div className="gh-calendar-footer">
                            <span className="gh-legend-text">Kurang</span>
                            <div className="gh-legend-boxes">
                                <span className="legend-box level-0"></span>
                                <span className="legend-box level-1"></span>
                                <span className="legend-box level-2"></span>
                                <span className="legend-box level-3"></span>
                                <span className="legend-box level-4"></span>
                            </div>
                            <span className="gh-legend-text">Sering Commit</span>
                        </div>
                    </div>
                </div>

                {/* Grid: Native GitHub Cards & Live Event Feed */}
                <div className="gh-activity-grid">
                    {/* Left Column: Native GitHub Stats & Top Languages */}
                    <div className="gh-widgets-col">
                        {/* Native GitHub Overview Card */}
                        <div className="gh-widget-card native-stats-card">
                            <div className="widget-header-row">
                                <h3 className="widget-title"><FaGithub /> GitHub Overview Stats</h3>
                                <span className="rank-badge font-mono">A+</span>
                            </div>
                            <div className="native-stats-body">
                                <div className="native-stat-item">
                                    <span className="native-stat-icon"><FaStar /></span>
                                    <span className="native-stat-label">Total Stars Earned:</span>
                                    <span className="native-stat-val font-mono">48</span>
                                </div>
                                <div className="native-stat-item">
                                    <span className="native-stat-icon"><FaCodeBranch /></span>
                                    <span className="native-stat-label">Total Commits (2025-2026):</span>
                                    <span className="native-stat-val font-mono">520+</span>
                                </div>
                                <div className="native-stat-item">
                                    <span className="native-stat-icon"><FaCode /></span>
                                    <span className="native-stat-label">Pull Requests:</span>
                                    <span className="native-stat-val font-mono">14</span>
                                </div>
                                <div className="native-stat-item">
                                    <span className="native-stat-icon"><FaCheckCircle /></span>
                                    <span className="native-stat-label">Contributed Repos:</span>
                                    <span className="native-stat-val font-mono">12 Repos</span>
                                </div>
                            </div>
                        </div>

                        {/* Native Top Languages Card */}
                        <div className="gh-widget-card native-langs-card">
                            <h3 className="widget-title"><FaCode /> Most Used Languages</h3>
                            <div className="native-langs-body">
                                {/* Segmented Progress Bar */}
                                <div className="lang-progress-bar">
                                    {topLanguages.map((lang) => (
                                        <div
                                            key={lang.name}
                                            className="lang-progress-segment"
                                            style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                                            title={`${lang.name}: ${lang.percent}%`}
                                        ></div>
                                    ))}
                                </div>

                                {/* Language Breakdown List */}
                                <div className="lang-list-grid">
                                    {topLanguages.map((lang) => (
                                        <div key={lang.name} className="lang-list-item">
                                            <span className="lang-color-dot" style={{ backgroundColor: lang.color }}></span>
                                            <span className="lang-name font-mono">{lang.name}</span>
                                            <span className="lang-percentage font-mono">{lang.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Recent Commit Activity Timeline */}
                    <div className="gh-timeline-col">
                        <div className="gh-widget-card timeline-card">
                            <div className="timeline-header">
                                <h3><FaCodeBranch /> Recent Commit Activity</h3>
                                <span className="badge live-badge"><FaSync className="spin-icon" /> Live</span>
                            </div>

                            {loading ? (
                                <div className="timeline-loading">Loading activity feed...</div>
                            ) : (
                                <div className="gh-timeline-list">
                                    {events.map((evt) => {
                                        const details = formatEventText(evt);
                                        return (
                                            <div className="gh-timeline-item" key={evt.id}>
                                                <div className="timeline-dot" style={{ backgroundColor: details.color }}></div>
                                                <div className="timeline-item-content">
                                                    <div className="timeline-item-top">
                                                        <a
                                                            href={`https://github.com/${evt.repo?.name}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="repo-name-link font-mono"
                                                        >
                                                            {evt.repo?.name}
                                                        </a>
                                                        <span className="timeline-date">{formatDate(evt.created_at)}</span>
                                                    </div>
                                                    <div className="timeline-item-title">{details.title}</div>
                                                    <p className="timeline-item-desc font-mono">{details.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GithubActivity;
