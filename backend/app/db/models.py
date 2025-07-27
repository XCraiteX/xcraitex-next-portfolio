from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped
from sqlalchemy import String, Integer, DateTime
from datetime import datetime

class Base(DeclarativeBase):
    pass 

class Visits(Base):
    __tablename__ = 'visits'
    
    id: Mapped[Integer] = mapped_column(Integer, primary_key=True, autoincrement=True)
    address: Mapped[String] = mapped_column(String, unique=True)
    date: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())