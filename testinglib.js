import React from "react";
import "./test.css";
import "./test1440.css";

const test1440 = ({ players, coaches }) => {
  // simple mapping if you want longer labels
  const positionLabel = (pos) => {
    const map = { G: "GUARD", F: "FORWARD", C: "CENTER" };
    return map[pos] || pos;
  };

  return (
    <div className="test-page">
      <div className="test-left">
        <div className="test-header">
          <div className="test-logo-circle">M</div>
          <h1 className="test-title">test</h1>
        </div>

        <div className="players-grid">
          {players.map((p) => (
            <div key={p.playerid} className="player-card">
              <div className="player-photo">
                {p.imageUrl && (
                  <img src={p.imageUrl} alt={p.playerName} loading="lazy" />
                )}
              </div>

              <div className="player-meta">
                <div className="player-number-position">
                  <span className="player-number">{p.jerseyNum}</span>
                  <span className="player-position">
                    {positionLabel(p.position)}
                  </span>
                </div>
                <div className="player-name">{p.playerName}</div>
                <div className="player-physicals">
                  <span>{p.height}</span>
                  {p.weight && <span> • {p.weight} lbs</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="test-right">
        <h1 className="coaches-title">COACHES</h1>
        <div className="coaches-list">
          {coaches?.map((c) => (
            <div key={c.name} className="coach-row">
              <div className="coach-info">
                <div className="coach-name">{c.name}</div>
                <div className="coach-role">{c.role}</div>
              </div>
              <div className="coach-avatar" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default test1440;


test.css
/* Photo container now actually shows the image */
.player-photo {
  width: 100%;
  padding-top: 90%;          /* aspect ratio */
  border-radius: 12px;
  border: 1px solid var(--border-light);
  background: #f2f2f2;
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
}

.player-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Height / weight line */
.player-physicals {
  margin-top: 2px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

1440.css

/* Desktop layout tuned for 1440px designs */

@media screen and (min-width: 1440px) {
  .roster-page {
    padding: 32px 64px 56px;
    column-gap: 72px;
  }

  .roster-title {
    font-size: 32px;
  }

  .players-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 40px;
    column-gap: 40px;
  }

  .player-photo {
    border-radius: 16px;
    padding-top: 95%;
  }

  .player-number {
    font-size: 20px;
  }

  .player-name {
    font-size: 15px;
  }

  .coaches-title {
    font-size: 26px;
    margin-bottom: 24px;
  }

  .coach-row {
    padding: 12px 0;
  }

  .coach-name {
    font-size: 14px;
  }

  .coach-avatar {
    width: 54px;
    height: 54px;
  }
}

1024.css

/* Roster1024.css */
/* Tablet / 1024 breakpoint */

@media screen and (min-width: 1024px) and (max-width: 1439.98px) {
  .roster-page {
    max-width: 1024px;
    margin: 0 auto;
    padding: 24px 32px 40px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(260px, 1fr);
    column-gap: 40px;
  }

  .roster-header {
    margin-bottom: 20px;
  }

  .roster-title {
    font-size: 28px;
    letter-spacing: 0.08em;
  }

  /* Players: 2 columns, more vertical spacing like screenshot */
  .players-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 32px;
    row-gap: 32px;
  }

  .player-photo {
    border-radius: 14px;
    padding-top: 92%; /* slight tweak to headshot ratio */
  }

  .player-number {
    font-size: 18px;
  }

  .player-name {
    font-size: 14px;
  }

  .player-physicals {
    font-size: 11px;
  }

  /* Coaches column on the right */
  .roster-right {
    align-self: flex-start;
  }

  .coaches-title {
    font-size: 24px;
    margin-bottom: 18px;
  }

  .coaches-list {
    gap: 10px;
  }

  .coach-row {
    padding: 10px 0;
  }

  .coach-name {
    font-size: 13px;
  }

  .coach-role {
    font-size: 11px;
  }

  .coach-avatar {
    width: 48px;
    height: 48px;
  }
}

768

/* Roster768.css */
/* 768px portrait breakpoint */

@media screen and (min-width: 768px) and (max-width: 1023.98px) {
  .roster-page {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px 24px 32px;
    box-sizing: border-box;

    /* stack roster + coaches vertically for this width */
    display: flex;
    flex-direction: column;
  }

  /* Header size roughly like your 768 screenshot */
  .roster-header {
    margin-bottom: 18px;
  }

  .roster-title {
    font-size: 26px;
    letter-spacing: 0.08em;
  }

  /* Players: 2 columns with tighter gaps */
  .players-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 28px;
  }

  .player-photo {
    padding-top: 90%;
    border-radius: 12px;
  }

  .player-number {
    font-size: 18px;
  }

  .player-name {
    font-size: 14px;
  }

  .player-physicals {
    font-size: 11px;
  }

  /* Coaches appear below the roster, full width */
  .roster-right {
    margin-top: 32px;
    align-self: stretch;
  }

  .coaches-title {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .coaches-list {
    gap: 8px;
  }

  .coach-row {
    padding: 8px 0;
  }

  .coach-name {
    font-size: 13px;
  }

  .coach-role {
    font-size: 11px;
  }

  .coach-avatar {
    width: 44px;
    height: 44px;
  }
}

376
/* Roster376.css */
/* small phones: 376px up to 767px */

@media screen and (min-width: 376px) and (max-width: 767.98px) {
  .roster-page {
    max-width: 420px;
    margin: 0 auto;
    padding: 16px 16px 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
  }

  .roster-header {
    justify-content: center;
    margin-bottom: 16px;
  }

  .roster-logo-circle {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  .roster-title {
    font-size: 24px;
    letter-spacing: 0.09em;
  }

  /* One player per row */
  .players-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    row-gap: 24px;
  }

  .player-card {
    max-width: 100%;
  }

  .player-photo {
    padding-top: 110%;        /* taller headshot like screenshot */
    border-radius: 14px;
  }

  .player-number-position {
    justify-content: center;
    gap: 8px;
  }

  .player-number {
    font-size: 20px;
  }

  .player-position {
    font-size: 11px;
  }

  .player-name {
    text-align: center;
    font-size: 15px;
  }

  .player-physicals {
    text-align: center;
    font-size: 11px;
  }

  .player-meta {
    margin-top: 6px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-light);
  }

  /* Coaches: stacked below roster, full width (optional) */
  .roster-right {
    margin-top: 28px;
    align-self: stretch;
  }

  .coaches-title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 12px;
  }

  .coaches-list {
    gap: 8px;
  }

  .coach-row {
    padding: 8px 0;
  }

  .coach-name {
    font-size: 12px;
  }

  .coach-role {
    font-size: 10px;
  }

  .coach-avatar {
    width: 40px;
    height: 40px;
  }
}


---
// Roster.jsx (or Roster1440.jsx)
const splitName = (fullName = "") => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { first: parts[0], last: "" };
  }
  return {
    first: parts[0],
    last: parts.slice(1).join(" ")
  };
};

const Roster = ({ players, coaches }) => {
  const positionLabel = (pos) => {
    const map = { G: "GUARD", F: "FORWARD", C: "CENTER" };
    return map[pos] || pos;
  };

  return (
    <div className="roster-page">
      {/* ...header... */}

      <div className="players-grid">
        {players.map((p) => {
          const { first, last } = splitName(p.playerName);

          return (
            <div key={p.playerid} className="player-card">
              <div className="player-photo">
                {p.imageUrl && (
                  <img src={p.imageUrl} alt={p.playerName} loading="lazy" />
                )}
              </div>

              <div className="player-meta">
                <div className="player-number-position">
                  <span className="player-number">{p.jerseyNum}</span>
                  <span className="player-position">
                    {positionLabel(p.position)}
                  </span>
                </div>

                <div className="player-name">
                  <span className="player-name-first">
                    {first?.toUpperCase()}
                  </span>
                  {last && (
                    <span className="player-name-last">
                      {last.toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="player-physicals">
                  <span>{p.height}</span>
                  {p.weight && <span> • {p.weight} lbs</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ...coaches... */}
    </div>
  );
};
