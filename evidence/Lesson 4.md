# Lesson 4 – Docker installatie en basisgebruik

## Inleiding
In deze opdracht is Docker geïnstalleerd op een Ubuntu Server VM binnen een Proxmox omgeving. Vervolgens zijn de basisfunctionaliteiten van Docker getest, waaronder het werken met images, containers en volumes.

---

## Installatie van Docker

Systeem updaten:
sudo apt update
sudo apt upgrade -y

Docker installeren:
sudo apt install docker.io -y
![262dafd02869383b49c0895947577bcb.png](_resources/262dafd02869383b49c0895947577bcb.png)
Docker service controleren:
sudo systemctl status docker
![203bd93625f585db6289674e2c58f48d.png](_resources/203bd93625f585db6289674e2c58f48d.png)
Docker versie controleren:
docker --version
![081b0d685579daaacb34f203334c3218.png](_resources/081b0d685579daaacb34f203334c3218.png)
Resultaat:
- Docker versie 28.2.2 geïnstalleerd
- Docker service draait

---

## Testen van Docker

Test container draaien:
sudo docker run hello-world
![9d1204793fbd53b49d76d5d9aca73dac.png](_resources/9d1204793fbd53b49d76d5d9aca73dac.png)
Resultaat:
- Image wordt automatisch gedownload
- Container draait succesvol
- Output bevestigt dat Docker correct werkt

---

## Werken met Docker images

Images bekijken:
sudo docker images

Alle images bekijken:
sudo docker images -a

Volledige image IDs:
sudo docker images --no-trunc

Image zoeken:
sudo docker search nginx

Image downloaden:
sudo docker pull ubuntu

Resultaat:
- Ubuntu image succesvol toegevoegd
![4743c7f3dfd1760a25490d6976643890.png](_resources/4743c7f3dfd1760a25490d6976643890.png)
---

## Werken met containers

Container starten:
sudo docker run -it ubuntu bash

Binnen container:
ls
exit

Containers bekijken:
sudo docker ps
sudo docker ps -a

Resultaat:
- Containers worden correct weergegeven
- Zowel actieve als gestopte containers zichtbaar
![093a96435b1a7a8da4ec1aba81b7f076.png](_resources/093a96435b1a7a8da4ec1aba81b7f076.png)
---

## Committen van container naar image

Container ID ophalen:
sudo docker ps -a

Voorbeeld:
CONTAINER ID   IMAGE    COMMAND   STATUS
991268461f08   ubuntu   bash      Exited

Commit uitvoeren:
sudo docker commit 991268461f08 ubuntutest

Nieuwe image controleren:
sudo docker images

Resultaat:
- Image "ubuntutest" succesvol aangemaakt
![3c5c1821d0a44c243cea5145c4137e38.png](_resources/3c5c1821d0a44c243cea5145c4137e38.png)
---

## Docker zonder sudo gebruiken

User toevoegen aan docker group:
sudo usermod -aG docker $USER

reboot

Test zonder sudo:
docker ps
docker images

Resultaat:
- Docker werkt zonder sudo
![d1f456c55529841abec77867715704e0.png](_resources/d1f456c55529841abec77867715704e0.png)
---

## Werken met volumes

Volume aanmaken:
docker volume create data

Volume inspecteren:
docker volume inspect data

Resultaat:
- Mountpoint zichtbaar (/var/lib/docker/volumes/data/_data)
Volume verwijderen:
docker volume rm data

![02e60031553dab3e8ef40f1a51744d51.png](_resources/02e60031553dab3e8ef40f1a51744d51.png)
---

## Conclusie
Docker is succesvol geïnstalleerd en getest. De volgende functionaliteiten werken correct:
- Images downloaden en bekijken
- Containers starten en stoppen
- Containers omzetten naar nieuwe images
- Volumes beheren
- Docker CLI gebruiken zonder sudo

De omgeving is klaar voor de volgende stappen (Dockerfile en Docker Compose).
