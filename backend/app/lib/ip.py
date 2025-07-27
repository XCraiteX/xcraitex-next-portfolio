from fastapi import Request
import requests
import socket


async def get_ip(request: Request) -> str:
    return request.client.host


async def get_by_ip_country_region_city_postal_lat_lon_corp(ip: str):
    
    ip = socket.gethostbyname(ip)
    
    infoList1 = requests.get(f"http://ipwho.is/{ip}")
    infoList = infoList1.json()
    
    response = requests.get(f"http://ip-api.com/json/{ip}")
    data = response.json() 

    country = region = city = postal = lat = lon = corp = None

    if infoList.get("success"):
        country = infoList["country"]
        postal = infoList["postal"]
        
    if data.get('status') != 'fail':
        region = data['regionName']
        city = data["city"]
        lat = data["lat"]
        lon = data["lon"]
        corp = data["isp"]

    return country, region, city, postal, lat, lon, corp
