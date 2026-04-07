# Leeswijzer

In deze repository zijn de meeste Ansible playbooks en commits voorzien van Engelstalige comments. Dit is gedaan om aan te sluiten bij gangbare DevOps- en programmeerconventies. Deze leeswijzer en toelichting zijn in het Nederlands geschreven voor overzicht en duidelijkheid.

---

# Mappenstructuur

## ansible

Bevat alle Ansible-gerelateerde configuratiebestanden.

### inventory

Bevat het bestand `hosts.ini`, waarin alle hosts, VM’s en containers zijn gedefinieerd.

### playbooks

Bevat alle gebruikte Ansible playbooks.

#### configure-ha.yml

Voegt alle VM’s uit de groep `klant_vm_ha` toe aan de Proxmox High Availability configuratie.

#### configure-security.yml

Voert security hardening uit op alle servers, waaronder:

* SSH key authenticatie
* uitschakelen van root login
* firewall configuratie (UFW)

#### destroy.yml

Playbook gebruikt tijdens development en testing om snel alle VM’s en LXC-containers te verwijderen.

#### docker-networking.yml

Gereserveerd voor cloud opdracht 2.

#### docker-swarm.yml
Voegt de drie docker VM's toe aan de docker swarm

#### install-docker-compose.yml
installeert docker compose op de drie docker VM's

#### install-wordpress.yml

Installeert WordPress inclusief:

* benodigde packages
* database configuratie
* webserver configuratie

#### install-zabbix-agent.yml

Installeert en configureert de Zabbix agent op alle VM’s en LXC-containers voor monitoring.

#### provision-lxc-wordpress.yml

Maakt schaalbare LXC-containers aan met:

* 1 CPU core
* 1024 MB RAM
* 30 GB storage
* dynamische naam en IP-configuratie

#### provision-vm-cloudinit.yml

Maakt schaalbare VM’s aan via cloud-init met:

* 2 CPU cores
* 2048 MB RAM
* 32 GB storage
* dynamische naam en IP-configuratie

#### provision-vm-wordpress.yml

Deprecated playbook voor het aanmaken van één enkele VM. Niet schaalbaar en vervangen door cloud-init oplossing.

#### provision-vm-docker-cloudinit.yml

Installeert de 3 VM's met de ubuntu cloudinit image voor de docker swarm

#### reverse-proxy.yml

Gereserveerd voor cloud opdracht 2.

#### site-docker.yml 

Hoofdplaybook voor de Docker VM's. dat in één run de installatie voltooid inclusief monitoring, docker compose en de swarm.

#### site-lxc.yml

Hoofdplaybook voor klant 1 (LXC). Voert alle benodigde playbooks uit voor container-gebaseerde deployment.

#### site-vm-ha.yml

Hoofdplaybook voor klant 2 (VM met HA). Voert alle benodigde playbooks uit inclusief High Availability configuratie.

#### site.yml

Overkoepelend playbook dat zowel LXC als VM infrastructuur in één run deployt.

#### update.yml

Playbook dat periodiek wordt uitgevoerd (bijvoorbeeld via cron) op de monitoring server om systemen te updaten.

---

## ansible.cfg

Configuratiebestand voor Ansible. Hierin is onder andere `host_key_checking` uitgeschakeld om automatische deployments zonder interactie mogelijk te maken.

---

## Docker

Gereserveerd voor cloud opdracht 2.

---

## Docs

Bevat aanvullende documentatie.

---

## Evidence

Bevat bewijsmateriaal voor de opdracht.

### Ansible playbooks.md

Uitgebreide toelichting op de werking van de playbooks en gebruikte Ansible-commando’s.

### Gitea install.md

Stapsgewijze installatiehandleiding voor de self-hosted Gitea omgeving.

### bewijsstukken cloud opdracht 1.md

Bevat alle bewijsstukken volgens de beoordelingsmatrix

### lesson 4, 7, 8, 9 en 10

Bevat de uitwerkingen van cloud opdracht 2 deel 1

### images
Bevat enkele afbeeldingen voor de markdown documentatie

### _resources
Bevat enkele afbeeldingen voor de markdown documentatie


---

## .gitattributes

Wordt gebruikt om de gebruikte programmeertalen binnen de repository inzichtelijk te maken.
