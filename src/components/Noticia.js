import React from "react";
import PropTypes from 'prop-types';

function Noticia({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;

  // Condicional sí la noticia viene sin imagen se retorna null ,
  // sino se retorna esa imagen

  const imagen=(urlToImage)?
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
    </div>
  :null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        
        {imagen}

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-actions">
          <a
            href={url}
            target="__blank"
            className="waves-effect waves-light btn"
          >
              Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
}

Noticia.propTypes={
  noticia:PropTypes.object.isRequired
};

export default Noticia;
