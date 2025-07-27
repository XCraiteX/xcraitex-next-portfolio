from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped
from sqlalchemy import String, Integer, DateTime
from datetime import datetime

class Base(DeclarativeBase):
    pass 

class Visits(Base):
    __tablename__ = 'visits'
    
    id: Mapped[Integer] = mapped_column(Integer, primary_key=True, autoincrement=True)
    address: Mapped[String] = mapped_column(String, unique=True)

    country: Mapped[String] = mapped_column(String, nullable=True)
    region: Mapped[String] = mapped_column(String, nullable=True)
    city: Mapped[String] = mapped_column(String, nullable=True)
    postal: Mapped[String] = mapped_column(String, nullable=True)
    latitude: Mapped[String] = mapped_column(String, nullable=True)
    longitude: Mapped[String] = mapped_column(String, nullable=True)
    corporation: Mapped[String] = mapped_column(String, nullable=True)

    date: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())