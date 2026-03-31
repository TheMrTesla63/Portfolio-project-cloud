# Ansible playbooks
## Ansible directory
cd /home/monitoring/Portfolio-project-cloud/ansible/playbooks

## 1. FULL pipeline
ansible-playbook -i ../inventory/hosts.ini site.yml

## 2. LXC-only (klant 1)
ansible-playbook -i ../inventory/hosts.ini site.yml --limit klant_lxc

## 3. HA VM (klant 2 - HA)
ansible-playbook -i ../inventory/hosts.ini site.yml --limit klant_vm_ha

## 4. SINGLE PLAYBOOKS (DEBUG)

## LXC provision
ansible-playbook -i ../inventory/hosts.ini provision-lxc-wordpress.yml

## WordPress install
ansible-playbook -i ../inventory/hosts.ini install-wordpress.yml

# HA configure
ansible-playbook -i ../inventory/hosts.ini configure-ha.yml

# Monitoring (Zabbix agent)
ansible-playbook -i ../inventory/hosts.ini install-zabbix-agent.yml