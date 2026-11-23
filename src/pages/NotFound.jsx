import { Link } from "react-router";

function NotFound() {
  return (
    <main className="page-404">
      <div className="error-content">
        <h1>404</h1>
        <h2>ZONE INCONNUE</h2>

        <p>Cette destination n'a pas encore été découverte par la Guilde.</p>

        <Link to="/" className="return-home">
          Retour au camp de base
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
