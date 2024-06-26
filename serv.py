import socketio
import json

sio = socketio.AsyncServer(cors_allowed_origins='*')
app = socketio.ASGIApp(sio)

@sio.on('connect')
def conncet(sid):

    with open("file.json", "r") as file:
        conncets = file.read()
        sio.emit('json_file', conncets, room=sid)


if __name__ == '__main__':
   import uvicorn
   uvicorn.run(app, host='localhost', port=3000)
