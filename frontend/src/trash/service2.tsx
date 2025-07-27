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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02,
          rotateY: 8,
          rotateX: 2,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        {/* Радужный фон */}
        <div className="rainbow-bg"></div>
        
        {/* Популярный бейдж */}
        {popular && (
          <motion.div 
            className="popular-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <span>🔥</span>
            <span>Популярно</span>
          </motion.div>
        )}

        {/* Основной контент */}
        <div className="card-content">
          <div className="header-section">
            {icon && (
              <motion.div 
                className="icon-container"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={icon} alt={title} />
              </motion.div>
            )}
            <motion.h3 
              className="service-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h3>
          </div>

          <motion.p 
            className="service-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Цены */}
          <motion.div 
            className="price-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="price-item">
              <span className="currency">BYN</span>
              <span className="price">{price_byn}</span>
            </div>
            <div className="price-divider"></div>
            <div className="price-item">
              <span className="currency">₽</span>
              <span className="price">{price_rub}</span>
            </div>
          </motion.div>

          {/* Кнопка */}
          <motion.button 
            className="order-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span>Заказать</span>
            <div className="btn-glow"></div>
          </motion.button>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .service-card {
    position: relative;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    cursor: pointer;
  }

  .rainbow-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080);
    border-radius: 20px;
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }

  .service-card:hover .rainbow-bg {
    opacity: 0.2;
    transform: rotate(10deg);
  }

  .card-content {
    position: relative;
    background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .popular-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    z-index: 10;
  }

  .header-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .icon-container {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3));
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(255, 0, 255, 0.3);
  }

  .icon-container img {
    width: 35px;
    height: 35px;
    filter: brightness(0) invert(1);
  }

  .service-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    margin: 0;
    text-shadow: 0 2px 10px rgba(0, 255, 255, 0.3);
  }

  .service-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .price-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .price-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .currency {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }

  .price {
    font-size: 1.3rem;
    font-weight: 800;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  .price-divider {
    width: 1px;
    height: 30px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  .order-btn {
    position: relative;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: 600;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .btn-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  .order-btn:hover .btn-glow {
    left: 100%;
  }

  .order-btn:hover {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
  }
`;

export default ServiceCard;
