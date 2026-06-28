import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1>Atividade Final Integrada 2026</h1>
          <p>
            A importância das habilidades socioemocionais e do relacionamento
            interpessoal nas organizações contemporâneas.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            <Link to="/seminario" className="card link-card">
              <h3>📄 Seminário</h3>
              <p>
                Desenvolver a expressão oral, a argumentação e o trabalho em
                equipe.
              </p>
            </Link>

            <Link to="/podcast" className="card link-card">
              <h3>🎙️ Podcast</h3>
              <p>
                Estimular a criatividade e a comunicação informal e reflexiva.
              </p>
            </Link>

            <Link to="/cases" className="card link-card">
              <h3>💡 Cases de Sucesso</h3>
              <p>
                Conectar teoria e prática, apresentando boas práticas de
                relacionamento interpessoal nas empresas.
              </p>
            </Link>

            <Link to="/storytelling" className="card link-card">
              <h3>📖 Storytelling</h3>
              <p>
                Desenvolver a empatia e a capacidade de transmitir valores
                humanos por meio de narrativas.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
