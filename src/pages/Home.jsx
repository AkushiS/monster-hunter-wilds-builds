import Carousel from "../components/Carousel";

function Home() {
  return (
    <main className="home">
      <div className="titre-fond">
        <h1>
          <span className="accueil-h1">Bienvenue </span>
          <span className="accueil-h1">Chasseurs&nbsp;!</span>
        </h1>
      </div>

      <div className="presentation">
        <img
          src={`${import.meta.env.BASE_URL}Parchemin_presentation.png`}
          alt="Retrouvez des builds dédiés aux chasseurs souhaitant optimiser leur équipement. Ces builds sont pensés pour le contenu endgame, avec un équilibre entre dégâts, confort et survie."
          className="parchemin"
        />
      </div>

      <section className="last" aria-label="Dernières nouveautés">
        <img
          src={`${import.meta.env.BASE_URL}Planche_nouveautés.png`}
          alt=""
          className="planche-nouveautes"
        />

        <Carousel />
      </section>
    </main>
  );
}

export default Home;
