"use client"
import { motion } from 'motion/react';
import styled from 'styled-components';

interface ServiceCardProps {
  title: string;
  description: string;
  price_byn: string;
  price_rub: string;
  icon?: string;
  features?: string[];
  popular?: boolean;
}

const ServiceCard = ({ title, description, price_byn, price_rub, icon, features, popular = false }: ServiceCardProps) => {
  return (
    <StyledWrapper>
      <motion.div 
        className="service-card"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {popular && (
          <div className="popular-badge">
            <span>🔥 Популярно</span>
          </div>
        )}
        
        <div className="card-header">
          {icon && (
            <div className="icon-wrapper">
              <img src={icon} alt={title} className="service-icon" />
            </div>
          )}
          <h3 className="service-title">{title}</h3>
        </div>

        <p className="service-description">{description}</p>

        {features && (
          <div className="features-list">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="feature-dot">●</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="price-section">
          <div className="price-item">
            <span className="currency">BYN</span>
            <span className="price">{price_byn}</span>
          </div>
          <div className="price-item">
            <span className="currency">₽</span>
            <span className="price">{price_rub}</span>
          </div>
        </div>

        <motion.button 
          className="order-button"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Заказать
        </motion.button>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .service-card {
    position: relative;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    width: 320px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .service-card:hover::before {
    opacity: 1;
  }

  .popular-badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-icon {
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
  }

  .service-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .features-list {
    margin-bottom: 1.5rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
  }

  .feature-dot {
    color: #00ffff;
    font-size: 1.2rem;
  }

  .price-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .price-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .currency {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #00ffff;
  }

  .order-button {
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .order-button:hover {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
  }
`;

export default ServiceCard;
