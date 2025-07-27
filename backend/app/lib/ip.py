from fastapi import Request


async def get_ip(request: Request) -> str:
    return request.client.host