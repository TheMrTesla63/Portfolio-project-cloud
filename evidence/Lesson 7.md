# Lesson 7 – Dockerfile en eigen image bouwen

## Inleiding
In deze opdracht is gewerkt met Dockerfiles om een eigen Docker image te bouwen. Een Dockerfile is een tekstbestand met instructies waarmee Docker automatisch een image kan opbouwen. Vervolgens is vanuit deze image een container gestart.

---

## Doel
- Begrijpen wat een Dockerfile is
- Een eigen Docker image bouwen
- Een container starten vanuit deze image

---

## Werkwijze

### 1. Map aanmaken voor Dockerfile
mkdir simplidocker
cd simplidocker

---

### 2. Dockerfile aanmaken
touch Dockerfile

Bestand openen:
nano Dockerfile
![1799baa62268943fb4abbff3f9c90dc3.png](../_resources/1799baa62268943fb4abbff3f9c90dc3.png)
Inhoud Dockerfile:

```
FROM ubuntu
MAINTAINER ezra
RUN apt-get update
CMD ["echo", "Welcome to Docker"]
```
![2952b9021bc13019b1e33eb8e867ae8f.png](../_resources/2952b9021bc13019b1e33eb8e867ae8f.png)

---

### 3. Docker image bouwen

docker build -t simplidocker .

Resultaat:
- Image wordt opgebouwd in lagen
- Elke instructie uit de Dockerfile wordt uitgevoerd

Controle:
docker images

Output bevat:
REPOSITORY     TAG       IMAGE ID       SIZE
simplidocker   latest    <id>           ...

![8e8fdb14c2bcd697572d15c207a83878.png](../_resources/8e8fdb14c2bcd697572d15c207a83878.png)

---

### 4. Container starten vanuit image

docker run simplidocker
![ebdfff19e87d2b446897e1ffe9ccbb3e.png](../_resources/ebdfff19e87d2b446897e1ffe9ccbb3e.png)

Resultaat:
Welcome to Docker

---

## Uitleg Dockerfile onderdelen

FROM ubuntu
- Basis image waarop wordt gebouwd

MAINTAINER ezra
- Geeft de maker van de image aan (verouderd maar gebruikt in tutorial)

RUN apt-get update
- Voert een commando uit tijdens build (maakt nieuwe layer)

CMD ["echo", "Welcome to Docker"]
- Standaard commando dat wordt uitgevoerd bij starten container

---

## Belangrijk inzicht

- Een Dockerfile bouwt een image in meerdere lagen
- Elke RUN, COPY of ADD maakt een nieuwe layer
- Containers worden gemaakt op basis van deze image
- Dockerfile zorgt voor reproduceerbare builds

---

## Validatie

docker images
docker run simplidocker

Resultaat:
- Image succesvol aangemaakt
- Container draait en geeft output
![db392735bcbf49e87386ac81e65d9091.png](../_resources/db392735bcbf49e87386ac81e65d9091.png)

---

## Conclusie

Met deze stappen is aangetoond dat:
- Een Dockerfile kan worden aangemaakt
- Een Docker image succesvol kan worden gebouwd
- Een container kan worden gestart vanuit deze image
- De werking van Docker layers en buildproces wordt begrepen

Deze omgeving is klaar voor verdere stappen zoals Docker Compose (lesson 8).