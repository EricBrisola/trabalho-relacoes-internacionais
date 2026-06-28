import React from 'react';

export default function Seminario() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Seminário</h2>
          <p className="section-subtitle">Visualize ou faça o download da nossa apresentação oficial</p>
        </div>
        
        <div className="pdf-container">
          <object data="/seminario.pdf" type="application/pdf" width="100%" height="600px">
            <div style={{ padding: '40px', textAlign: 'center', background: '#f1f5f9', borderRadius: '8px' }}>
              <p>Seu navegador não suporta visualização de PDFs nativa.</p>
              <br />
              <a href="/seminario.pdf" download className="btn">Baixar PDF ao invés disso</a>
            </div>
          </object>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <a href="/seminario.pdf" download className="btn">
            Baixar Apresentação (.pdf)
          </a>
        </div>
      </div>
    </section>
  );
}
