import socket
port = 2020
client = socket.socket()
client.connect(("Arduino IP address", port))
while True:
    command = input("Type A for turning led on, another letter to turn led off")
    client.send(command.encode())
    client.send("\n".encode())
    