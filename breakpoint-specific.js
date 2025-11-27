import React from "react";
import "./PlayerBioCard.css";

const PlayerBioCard = ({ player }) => {
  return (
    <div className="pb-card">
      {/* blue header */}
      <header className="pb-header">
        <div className="pb-header-left">
          <img className="pb-logo" src={player.teamLogoUrl} alt={player.team} />
          <div className="pb-photo-wrap">
            <img
              className="pb-photo"
              src={player.photoUrl}
              alt={`${player.firstName} ${player.lastName}`}
            />
          </div>
        </div>

        <div className="pb-header-right">
          <div className="pb-number-name">
            <span className="pb-number">{player.number}</span>
            <div className="pb-name-block">
              <span className="pb-first-name">{player.firstName}</span>
              <span className="pb-last-name">{player.lastName}</span>
            </div>
          </div>
          <div className="pb-team-line">
            {player.team} | #{player.number} | {player.position}
          </div>
        </div>
      </header>

      {/* stat grid */}
      <section className="pb-grid">
        <div className="pb-cell">
          <div className="pb-cell-label">PPG</div>
          <div className="pb-cell-value">{player.ppg}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">RPG</div>
          <div className="pb-cell-value">{player.rpg}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">APG</div>
          <div className="pb-cell-value">{player.apg}</div>
        </div>
        <div className="pb-cell pb-empty" />

        <div className="pb-cell">
          <div className="pb-cell-label">HEIGHT</div>
          <div className="pb-cell-value">{player.height}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">WEIGHT</div>
          <div className="pb-cell-value">{player.weight}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">COUNTRY</div>
          <div className="pb-cell-value">{player.country}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">LAST ATTENDED</div>
          <div className="pb-cell-value">{player.lastAttended}</div>
        </div>

        <div className="pb-cell">
          <div className="pb-cell-label">AGE</div>
          <div className="pb-cell-value">{player.age}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">BIRTHDATE</div>
          <div className="pb-cell-value">{player.birthdate}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">DRAFT</div>
          <div className="pb-cell-value">{player.draft}</div>
        </div>
        <div className="pb-cell">
          <div className="pb-cell-label">EXPERIENCE</div>
          <div className="pb-cell-value">{player.experience}</div>
        </div>
      </section>
    </div>
  );
};

export default PlayerBioCard;


const jalen = {
  number: "11",
  firstName: "JALEN",
  lastName: "BRUNSON",
  team: "New York Knicks",
  position: "Guard",
  teamLogoUrl: "/images/knicks-logo.png",
  photoUrl: "/images/jalen-brunson.png",

  ppg: "26.0",
  rpg: "2.9",
  apg: "7.3",
  height: "6'2 (1.88m)",
  weight: "190lb (86kg)",
  country: "USA",
  lastAttended: "Villanova",
  age: "29 years",
  birthdate: "August 31, 1996",
  draft: "2018 R2 Pick 33",
  experience: "7 years",
};

// in your page:
<PlayerBioCard player={jalen} />;

:root {
  --pb-blue: #043a78;
  --pb-orange: #f27d29;
  --pb-cream: #f3eee5;
  --pb-border: #717171;
  --pb-text-main: #111111;
  --pb-text-muted: #555555;
  --pb-font: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ========= BASE (320) ========= */

.pb-card {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  background: var(--pb-cream);
  border: 1px solid var(--pb-border);
  box-sizing: border-box;
  font-family: var(--pb-font);
}

/* header */

.pb-header {
  background: var(--pb-blue);
  color: #ffffff;
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.pb-header-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.pb-logo {
  width: 54px;
  height: auto;
}

.pb-photo-wrap {
  width: 140px;
  position: relative;
  padding-top: 120%;
  overflow: hidden;
}

.pb-photo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 115%;
  width: auto;
  object-fit: cover;
}

/* number + name */

.pb-header-right {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pb-number-name {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.pb-number {
  font-size: 32px;
  font-weight: 800;
}

.pb-name-block {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.pb-first-name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

.pb-last-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--pb-orange);
}

.pb-team-line {
  font-size: 11px;
  color: #ffffff;
  opacity: 0.9;
}

/* stat grid (table look) */

.pb-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns on 320 */
  border-top: 1px solid var(--pb-border);
  border-left: 1px solid var(--pb-border);
  background: #f7f2e8;
}

.pb-cell {
  padding: 10px 8px;
  border-right: 1px solid var(--pb-border);
  border-bottom: 1px solid var(--pb-border);
  text-align: center;
  box-sizing: border-box;
}

.pb-cell-label {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pb-text-muted);
  margin-bottom: 4px;
}

.pb-cell-value {
  font-size: 12px;
  color: var(--pb-text-main);
}

.pb-empty {
  display: none; /* hidden on 2-col mobile */
}

/* ========= >= 376 ========= */

@media (min-width: 376px) {
  .pb-card {
    max-width: 376px;
  }

  .pb-header {
    padding: 12px 16px 14px;
  }

  .pb-photo-wrap {
    width: 160px;
  }

  .pb-first-name {
    font-size: 19px;
  }

  .pb-last-name {
    font-size: 21px;
  }

  .pb-team-line {
    font-size: 12px;
  }
}

/* ========= >= 768 ========= */

@media (min-width: 768px) {
  .pb-card {
    max-width: 768px;
  }

  .pb-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 16px;
    padding: 16px 24px 18px;
  }

  .pb-header-left {
    align-items: flex-start;
  }

  .pb-photo-wrap {
    width: 220px;
    padding-top: 120%;
  }

  .pb-header-right {
    flex: 1 1 0;
  }

  .pb-number {
    font-size: 40px;
  }

  .pb-first-name {
    font-size: 24px;
  }

  .pb-last-name {
    font-size: 26px;
  }

  .pb-team-line {
    font-size: 13px;
  }

  .pb-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* 4 columns */
  }

  .pb-empty {
    display: block; /* 4th empty cell to complete first row */
  }
}

/* ========= >= 1024 ========= */

@media (min-width: 1024px) {
  .pb-card {
    max-width: 1024px;
  }

  .pb-header {
    padding: 20px 32px 20px;
  }

  .pb-photo-wrap {
    width: 260px;
  }

  .pb-number {
    font-size: 46px;
  }

  .pb-first-name {
    font-size: 26px;
  }

  .pb-last-name {
    font-size: 30px;
  }

  .pb-team-line {
    font-size: 14px;
  }

  .pb-cell-label {
    font-size: 11px;
  }

  .pb-cell-value {
    font-size: 13px;
  }
}

/* ========= >= 1440 ========= */

@media (min-width: 1440px) {
  .pb-card {
    max-width: 1440px;
  }

  .pb-header {
    padding: 24px 48px 24px;
  }

  .pb-photo-wrap {
    width: 320px;
  }

  .pb-number {
    font-size: 52px;
  }

  .pb-first-name {
    font-size: 30px;
  }

  .pb-last-name {
    font-size: 34px;
  }

  .pb-team-line {
    font-size: 15px;
  }

  .pb-cell-label {
    font-size: 12px;
  }

  .pb-cell-value {
    font-size: 14px;
  }
}













/* ========= BASE (320) ========= */
/* default: 320px background */
.pb-header {
  /* existing styles… */
  color: #ffffff;
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  /* background color fallback */
  background-color: var(--pb-blue);

  /* breakpoint-specific background image */
  background-image: url("/images/bg-320.png");
  background-size: cover;
  background-position: center;
}




/* ========= >= 376 ========= */
@media (min-width: 376px) {
  .pb-card {
    max-width: 376px;
  }

  .pb-header {
    padding: 12px 16px 14px;

    /* 376px background */
    background-image: url("/images/bg-376.png");
  }

  .pb-photo-wrap {
    width: 160px;
  }
}

/* ========= >= 768 ========= */
@media (min-width: 768px) {
  .pb-card {
    max-width: 768px;
  }

  .pb-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 16px;
    padding: 16px 24px 18px;

    /* 768px background */
    background-image: url("/images/bg-768.png");
  }

  /* ...rest of your 768 styles... */
}

/* ========= >= 1024 ========= */
@media (min-width: 1024px) {
  .pb-card {
    max-width: 1024px;
  }

  .pb-header {
    padding: 20px 32px 20px;

    /* 1024px background */
    background-image: url("/images/bg-1024.png");
  }

  /* ...rest of your 1024 styles... */
}

/* ========= >= 1440 ========= */
@media (min-width: 1440px) {
  .pb-card {
    max-width: 1440px;
  }

  .pb-header {
    padding: 24px 48px 24px;

    /* 1440px background */
    background-image: url("/images/bg-1440.png");
  }

  /* ...rest of your 1440 styles... */
}
