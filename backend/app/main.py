from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select, func
import uvicorn

from db.base import init_db, db_session
from db.models import Visits
from lib.ip import get_ip, get_by_ip_country_region_city_postal_lat_lon_corp
from config import API_PREFIX

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
async def startup():
    await init_db()


@app.get(API_PREFIX + 'visits')
async def app_main(request: Request):
    
    # Проверяем айпи
    ip = await get_ip(request)

    # Проверяем есть ли в db
    async with db_session() as db:
        sql = await db.execute(select(Visits).where(Visits.address == ip).limit(1))
        result = sql.scalar()

        # Если юзера нет, добавляем посещение
        if not result:
            country, region, city, postal, latitude, longitude, corporation = await get_by_ip_country_region_city_postal_lat_lon_corp(ip)
            
            obj = Visits(address=ip, country=country, region=region, city=city, postal=postal, latitude=latitude, longitude=longitude, corporation=corporation)
            
            db.add(obj)
            await db.commit()
    
        # Извлекаем и возвращаем кол-во визитов
        sql = await db.execute(select(func.count(Visits.id)))
        count = sql.scalar()

        return { 'visits': count }


if __name__ == '__main__':

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=3101,
        reload=True
    )