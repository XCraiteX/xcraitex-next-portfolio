from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
import aiosqlite

from db.models import Base

engine = create_async_engine('sqlite+aiosqlite:///app/data/database.db')
db_session = async_sessionmaker(bind=engine, class_=AsyncSession)

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
