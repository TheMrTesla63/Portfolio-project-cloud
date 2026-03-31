# Gitea Installatie Log

## Server informatie
- Hostname: ubuntu-git
- IP-adres: 10.24.44.200
- OS: Ubuntu Server
- Doel: Self-hosted Git platform voor versiebeheer (Gitea)

---

## 1. Basis installatie
```bash
sudo apt update
sudo apt install -y git mariadb-server wget
```

# Database configuratie (MariaDB)
```bash
sudo mysql
```

```SQL
CREATE DATABASE gitea CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'gitea'@'127.0.0.1' IDENTIFIED BY 'strongpassword';
GRANT ALL PRIVILEGES ON gitea.* TO 'gitea'@'127.0.0.1';
FLUSH PRIVILEGES;
EXIT;
```
# 3. Gitea gebruiker en directories
```bash
sudo adduser \
  --system \
  --shell /bin/bash \
  --gecos 'Git Version Control' \
  --group \
  --disabled-password \
  --home /home/git git

sudo mkdir -p /var/lib/gitea/{custom,data,log}
sudo mkdir -p /etc/gitea

sudo chown -R git:git /var/lib/gitea
sudo chown root:git /etc/gitea
sudo chmod 770 /etc/gitea
```

# 4. Gitea downloaden en installeren

```bash
wget -O gitea https://dl.gitea.com/gitea/1.21.11/gitea-1.21.11-linux-amd64
chmod +x gitea
sudo mv gitea /usr/local/bin/gitea
```

# 5 Systemd service configuratie
```bash
sudo nano /etc/systemd/system/gitea.service
```

```ini
[Unit]
Description=Gitea
After=network.target mariadb.service
Wants=mariadb.service

[Service]
RestartSec=2s
Type=simple
User=git
Group=git
WorkingDirectory=/var/lib/gitea/
ExecStart=/usr/local/bin/gitea web --config /etc/gitea/app.ini
Restart=always
Environment=USER=git HOME=/home/git GITEA_WORK_DIR=/var/lib/gitea

[Install]
WantedBy=multi-user.target
```

```
sudo systemctl daemon-reload
sudo systemctl enable --now gitea
```

# web installatie
http://10.24.44.200:3000

## Database instellingen
Type: MySQL
Host: 127.0.0.1:3306
Username: gitea
Password: strongpassword
Database: gitea
## Algemene instellingen
Site Title: Hanze
Repository Root: /var/lib/gitea/data/gitea-repositories
LFS Path: /var/lib/gitea/data/lfs
Log Path: /var/lib/gitea/log
## Server instellingen
Domain: 10.24.44.200
HTTP Port: 3000
Base URL: http://10.24.44.200:3000/
SSH Port: 22

# 7. Afronding
Eerste gebruiker aangemaakt via webinterface (wordt automatisch admin)
Gitea draait als service via systemd
Repository’s worden lokaal opgeslagen op de server

# Doel binnen project
Gitea wordt gebruikt als centraal Git-platform voor:
- Ansible playbooks
- Bash scripts
- Configuratiebestanden
- Documentatie

# Git / Gitea Commands Log

## Repository informatie
- Gitea URL: http://10.24.44.200:3000
- Voorbeeld repository: http://10.24.44.200:3000/admin/Portfolio-project-cloud.git

---

## 1. Eerste keer: repository initialiseren en pushen

### Ga naar je projectmap
```bash
cd /home/monitoring/Portfolio-project-cloud

git init
git remote add origin http://10.24.44.200:3000/admin/Portfolio-project-cloud.git
git remote -v
git add .
git commit -m "projectstructuur"
git branch -M main
git push -u origin main
```
## Opvolgende commits
### Wijzigingen toevoegen
```bash
git add .
```
### Commit maken
```bash
git commit -m "Korte duidelijke beschrijving van wijziging"
```
### Push naar repository
```bash
git push
```