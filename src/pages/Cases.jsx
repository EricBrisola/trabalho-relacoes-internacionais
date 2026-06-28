import React from 'react';

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cases de Sucesso e Artigos</h2>
          <p className="section-subtitle">Acompanhe projetos que transformaram a realidade</p>
        </div>
        
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Vídeo sobre cases de sucesso" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
