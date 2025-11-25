import React from "react";
import "./ResponsiveRoster.css";

const splitName = (fullName = "") => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return {
    first: parts[0],
    last: parts.slice(1).join(" "),
  };
};

const positionLabel = (pos) => {
  const map = { G: "GUARD", F: "FORWARD", C: "CENTER" };
  return map[pos] || pos;
};

const ResponsiveRoster = ({ players, coaches }) => {
  return (
    <div className="roster-page">
      {/* LEFT: ROSTER */}
      <section className="roster-left">
        <header className="roster-header">
          <div className="roster-logo-circle">M</div>
          <h1 className="roster-title">ROSTER</h1>
        </header>

        <div className="players-grid">
          {players.map((p) => {
            const { first, last } = splitName(p.playerName);

            return (
              <article key={p.playerid} className="player-card">
                <div className="player-top-row">
                  <div className="player-number-block">
                    <span className="player-number">{p.jerseyNum}</span>
                    <span className="player-position">
                      {positionLabel(p.position)}
                    </span>
                  </div>

                  <div className="player-name">
                    <span className="player-name-first">
                      {first.toUpperCase()}
                    </span>
                    {last && (
                      <span className="player-name-last">
                        {last.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="player-photo">
                  {p.imageUrl && (
                    <img src={p.imageUrl} alt={p.playerName} loading="lazy" />
                  )}
                </div>

                <div className="player-meta-bottom">
                  <div className="player-physicals">
                    <span>{p.height}</span>
                    {p.weight && <span> • {p.weight} lbs</span>}
                  </div>
                  <div className="player-underline" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* RIGHT: COACHES */}
      <aside className="roster-right">
        <h1 className="coaches-title">COACHES</h1>

        <div className="coaches-list">
          {coaches.map((c) => {
            const { first, last } = splitName(c.name);
            return (
              <article key={c.name} className="coach-card">
                <header className="coach-header">
                  <div className="coach-name">
                    <span className="coach-first">
                      {first.toUpperCase()}
                    </span>
                    {last && (
                      <span className="coach-last">
                        {last.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="coach-title">{c.role.toUpperCase()}</div>
                </header>

                <div className="coach-photo">
                  {c.imageUrl && (
                    <img src={c.imageUrl} alt={c.name} loading="lazy" />
                  )}
                </div>

                <div className="coach-underline" />
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default ResponsiveRoster;
