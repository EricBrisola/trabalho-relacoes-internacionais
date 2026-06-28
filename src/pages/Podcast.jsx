import React from "react";

export default function Podcast() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Podcast</h2>
          <p className="section-subtitle">Ouça o nosso episódio mais recente</p>
        </div>

        <div className="card">
          <h3>Episódio 01</h3>
          <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
            Como o relacionamento interpessoal influencia a produtividade e o
            bem-estar nas organizações.
          </p>
          <div className="audio-player">
            <audio controls src="/podcast.mp3">
              Seu navegador não suporta a tag de áudio.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}
