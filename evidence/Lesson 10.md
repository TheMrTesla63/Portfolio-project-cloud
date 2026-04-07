# Networking
```
ansible@vm-dock1:~$ touch docker-networking.sh
ansible@vm-dock1:~$ nano docker-networking.sh
ansible@vm-dock1:~$ ansible@vm-dock1:~$ chmod +x docker-networking.sh
ansible@vm-dock1:~$ ./docker-networking.sh
=== START Docker Networking Demo ===
1. Bestaande netwerken tonen
NETWORK ID     NAME              DRIVER    SCOPE
51def459da6c   bridge            bridge    local
dac37a1d1637   docker_gwbridge   bridge    local
412d14108b67   host              host      local
jne3vagtiv8o   ingress           overlay   swarm
f3ef9a48b4fe   none              null      local
2. Nieuw custom bridge netwerk maken
ed18b95b1d43eaac6fcd50a7411cb732040f78b874724f643b548663aba1dff8
3. Netwerk details bekijken
[
    {
        "Name": "mynet",
        "Id": "ed18b95b1d43eaac6fcd50a7411cb732040f78b874724f643b548663aba1dff8",
        "Created": "2026-04-07T19:29:00.867959701Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv4": true,
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.19.0.0/16",
                    "Gateway": "172.19.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]
4. Container 1 starten in netwerk
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
5435b2dcdf5c: Pull complete
dfad2fd217a9: Pull complete
49e2055f2936: Pull complete
9119986bbc9f: Pull complete
c58dd643e1bc: Pull complete
13138f198f1b: Pull complete
02e3f96dd990: Pull complete
Digest: sha256:1854da86e82d5dfb49a8f3d78b099adcc7e36608b207146ed95cd47937938a40
Status: Downloaded newer image for nginx:latest
82c58d9e57920a9050697b383ce1dffe430288b92cef23b3a1ab295639fc9d43
5. Container 2 starten in netwerk
5603b419a0727cb75b7514d87c4326996f56cfe40ad7edbf2cf492f9170f2d44
6. Containers tonen
CONTAINER ID   IMAGE     COMMAND                  CREATED                  STATUS                  PORTS     NAMES
5603b419a072   nginx     "/docker-entrypoint.…"   Less than a second ago   Up Less than a second   80/tcp    web2
82c58d9e5792   nginx     "/docker-entrypoint.…"   2 seconds ago            Up 1 second             80/tcp    web1
7. Test communicatie tussen containers (ping)
OCI runtime exec failed: exec failed: unable to start container process: exec: "ping": executable file not found in $PATH: unknown
8. Container IP adressen tonen
172.19.0.2
172.19.0.3
9. Netwerk verwijderen (cleanup)
web1
web2
mynet
=== EINDE Demo ===
ansible@vm-dock1:~$ cat docker-networking.sh
#!/bin/bash

echo "=== START Docker Networking Demo ==="

echo "1. Bestaande netwerken tonen"
docker network ls

echo "2. Nieuw custom bridge netwerk maken"
docker network create mynet

echo "3. Netwerk details bekijken"
docker network inspect mynet

echo "4. Container 1 starten in netwerk"
docker run -d --name web1 --network mynet nginx

echo "5. Container 2 starten in netwerk"
docker run -d --name web2 --network mynet nginx

echo "6. Containers tonen"
docker ps

echo "7. Test communicatie tussen containers (ping)"
docker exec web1 ping -c 3 web2

echo "8. Container IP adressen tonen"
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' web1
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' web2

echo "9. Netwerk verwijderen (cleanup)"
docker rm -f web1 web2
docker network rm mynet

echo "=== EINDE Demo ==="
ansible@vm-dock1:~$
```
