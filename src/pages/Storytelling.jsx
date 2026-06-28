import React from 'react';

export default function Storytelling() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Storytelling</h2>
          <p className="section-subtitle">Histórias que inspiram e conectam pessoas</p>
        </div>
        
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/jNQXAC9IVRw" 
            title="Vídeo de Storytelling" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
