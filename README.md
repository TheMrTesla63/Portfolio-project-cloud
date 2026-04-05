# Leeswijzer
In verband met de documentatie van Ansible etc zijn een hoop van de playbooks en commits gemaakt met engelstalige comments. De leeswijzer is voor het gemak in het nederlands
# Mappenstructuur
## ansible 
Bevat alle ansible gerelateerde bestanden
### inventory
Bevat de hosts.ini waar alle apparaten en servers in staan
### playbooks
Hier bevinden zich alle playbooks
#### configure-ha.yml
Voegt alle VM's toe in de groep klant_vm_ha aan de HA cluster
#### configure-security.yml
Zet alle beveiliging aan etc
#### destroy.yml
Een korte playbook die ik heb gebruikt voor het testen om snel alle LXC's en VM's te verwijderen 
#### docker-networking.yml
gereserveerd voor cloud opdracht 2
#### docker-setup.yml
gereserveerd voor cloud opdracht 2
#### docker-swarm.yml
gereserveerd voor cloud opdracht 2
#### install-wordpress.yml
Installeert (de benodigdheden van) wordpress, maakt een user aan en prepareert de database
#### install-zabbix-agent.yml
Installeert de monitoring agent zabbix op alle VM's en LXC containers
#### provision-lxc-wordpress.yml
Maakt een goedkope LXC container aan met een dynamisch IP en naam met 1 core, 1024MB RAM en 30GB disk storage
#### provision-vm-cloudinit.yml
Maakt via cloudinit image een VM aan met dyanmisch IP en naam met 2 cores, 2048MB RAM en 32GB disk storage
#### provision-vm-wordpress.yml
Maak een enkele VM aan, maar is deprecated vanwege de beperkte schaalbaarheid
#### reverse-proxy.yml
gereserveerd voor cloud opdracht 2
#### site-lxc.yml
Beval alle playbooks voor de LXC containers met en zorgt ervoor dat alle playbooks voor de LXC containers uitgevoerd worden
#### site-vm-ha.yml
Beval alle playbooks voor de VM's met HA en zorgt ervoor dat alle playbooks voor de VM's met HA uitgevoerd worden
#### site.yml
Bevat alle playbooks en kan in 1x gerund worden voor LXC en VM's met HA
#### update.yml
Playbook die dagelijks gerund wordt op de monitoring server om packages te updaten


### ansible.cfg 
negeert de host key checking tijdens het runnen van playbooks

## Docker
gereserveerd voor cloud opdracht 2
## Docs 
Hier staan overige documenten in
## Evidence
Hier staan alle bewijzen in 
### Ansible playbooks.md
Uitgebreide uitleg van gebruik van ansible commands en uitleg wat de playbooks doen
### Gitea install.md
Navolgbare installatie van self-hosted Gitea

## .gitattributes 
Laaat de gebruikte talen in de repo zien
