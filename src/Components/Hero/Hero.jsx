import "./Hero.css";

function Hero({ cards }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-cards">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <img src={card.imageUrl} alt={card.title} className="card-image" />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;