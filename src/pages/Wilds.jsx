import { useState, useEffect, useRef } from "react";
import { weaponsBuilds } from "../data/weaponsData";

const weapons = [
  { name: "Arc", className: "Arc" },
  { name: "Corne de chasse", className: "Corne-de-chasse" },
  { name: "Double lames", className: "Double-lames" },
  { name: "Épée & bouclier", className: "Epee-et-bouclier" },
  { name: "Épée longue", className: "Epee-longue" },
  { name: "Grande épée", className: "Grande-epee" },
  { name: "Lance", className: "Lance" },
  { name: "Lance canon", className: "Lance-canon" },
  { name: "Fusarbalète léger", className: "Fusarbalete-leger" },
  { name: "Fusarbalète lourd", className: "Fusarbalete-lourd" },
  { name: "Insectoglaive", className: "Insectoglaive" },
  { name: "Marteau", className: "Marteau" },
  { name: "Morpho-hache", className: "Morpho-hache" },
  { name: "Volto-hache", className: "Volto-hache" },
];

const newBuilds = [
  "Arc",
  "Build Arc Elementaire Crit",
  "Double lames",
  "Build Double lames Elementaire Crit",
  "Épée & bouclier",
  "Build SnS Elementaire Crit DPS",
  "Lance",
  "Build Lance Elementaire Crit",
  "Insectoglaive",
  "Build Insectoglaive Elementaire Crit",
];
const modifiedBuilds = [];

function Wilds() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const selectedCardRef = useRef(null);
  const [cardPosition, setCardPosition] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (!selectedWeapon) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedWeapon(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWeapon]);

  useEffect(() => {
    if (!selectedWeapon || !cardPosition) return;

    const frame = requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedWeapon, cardPosition]);

  useEffect(() => {
    if (!selectedWeapon) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedWeapon]);

  return (
    <>
      <header>
        <h1 className="wilds-h1">Monster Hunter Wilds</h1>
      </header>

      <main>
        <section>
          <h2 className="armure">Builds RC 100</h2>

          <p className="description-build">
            Builds endgame RC 100 pour toutes les armes de Monster Hunter Wilds.
            Chaque build est conçu pour offrir le meilleur équilibre entre
            dégâts, confort et survie.
          </p>

          <div className="guides-container">
            {weapons.map((weapon) => (
              <button
                key={weapon.className}
                type="button"
                className={`weapon-card ${weapon.className}`}
                data-weapon={weapon.name}
                onClick={(event) => {
                  selectedCardRef.current = event.currentTarget;

                  const rect = event.currentTarget.getBoundingClientRect();

                  setCardPosition({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                  });

                  setIsAnimating(false);

                  setAnimationFinished(false);

                  setSelectedWeapon(weapon.name);
                }}
              >
                <h3>{weapon.name}</h3>

                {newBuilds.includes(weapon.name) && (
                  <span className="new-badge">NEW</span>
                )}

                {modifiedBuilds.includes(weapon.name) && (
                  <span className="modified-badge">MODIFIÉ</span>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>

      {selectedWeapon && cardPosition && !animationFinished && (
        <div
          className={`weapon-card animated-card ${
            weapons.find((weapon) => weapon.name === selectedWeapon)?.className
          }`}
          onTransitionEnd={(event) => {
            if (event.propertyName === "top" && isAnimating) {
              setAnimationFinished(true);
            }
          }}
          style={{
            position: "fixed",
            top: isAnimating ? -30 : cardPosition.top,
            left: isAnimating
              ? (window.innerWidth - cardPosition.width) / 2
              : cardPosition.left,
            width: cardPosition.width,
            height: cardPosition.height,
            zIndex: 1001,
            pointerEvents: "none",
            transition: "top 0.6s ease, left 0.6s ease",
          }}
        >
          <h3>{selectedWeapon}</h3>
        </div>
      )}

      {selectedWeapon && (
        <div className="modal" onClick={() => setSelectedWeapon(null)}>
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setSelectedWeapon(null)}
            >
              ✕
            </button>

            <div id="modal-header">
              {animationFinished && (
                <div
                  className={`weapon-card ${
                    weapons.find((weapon) => weapon.name === selectedWeapon)
                      ?.className
                  }`}
                  style={{
                    position: "fixed",
                    top: -30,
                    left: (window.innerWidth - cardPosition.width) / 2,
                    width: cardPosition.width,
                    height: cardPosition.height,
                    flexShrink: 0,
                  }}
                >
                  <h3>{selectedWeapon}</h3>
                </div>
              )}
            </div>

            <div id="builds-container">
              {animationFinished &&
                (weaponsBuilds[selectedWeapon] || []).map((build) => (
                  <div className="build-card" key={build.title}>
                    {newBuilds.includes(build.title) ? (
                      <span className="new-badge">NEW</span>
                    ) : modifiedBuilds.includes(build.title) ? (
                      <span className="modified-badge">MODIFIÉ</span>
                    ) : null}

                    <h3>{build.title}</h3>

                    <a
                      href={build.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={build.image} alt={build.alt} />
                    </a>

                    {build.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Wilds;
