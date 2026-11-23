function Loader() {
  const texte = "Monster Hunter";

  return (
    <div className="loader">
      <img
        src={`${import.meta.env.BASE_URL}double_griffe.png`}
        alt=""
        className="loader-griffes"
      />

      <div className="loader-content">
        <div className="loader-text">
          {texte.split("").map((lettre, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {lettre === " " ? "\u00A0" : lettre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;
