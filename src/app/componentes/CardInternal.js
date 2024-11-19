'use client';

const CardInternal = ({ text, funcion }) => {
  return (
    <div className="card-container" onClick={funcion} style={{ cursor: 'pointer' }}>
      <div className="card-image">
        <img
          src="/carro-demo.avif" 
          alt="Card thumbnail"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px 8px 0 0',
          }}
        />
      </div>
      <div className="card-content" style={{ padding: '16px' }}>
        <div className="card-meta" style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>
          <span>12 FEB 2025</span> | <span>00 Comentarios</span>
        </div>
        <h3 style={{ fontSize: '18px', margin: '8px 0', fontWeight: 'bold', color: '#333' }}>
          {text || 'Default Title'}
        </h3>
        <button
          style={{
            background: '#e63946',
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardInternal;
