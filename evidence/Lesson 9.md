# Lesson 9 – Docker Swarm (geautomatiseerd via Ansible)

## Inleiding
In deze opdracht wordt Docker Swarm opgezet op alle 3 Docker VM’s. Elke VM fungeert als manager node. De configuratie gebeurt geautomatiseerd via Ansible.

---

## Doel
- Docker Swarm initialiseren
- 3 nodes koppelen tot 1 cluster
- Elke node als manager
- Centrale manager gebruiken voor beheer

---

## Architectuur

- vm-dock1 → 10.24.44.51 → manager (init node)
- vm-dock2 → 10.24.44.52 → manager
- vm-dock3 → 10.24.44.53 → manager

---

## Ansible playbook

# `ansible/playbooks/docker-swarm.yml`

```
---
- name: Setup Docker Swarm cluster
  hosts: docker
  become: true

  vars:
    manager_ip: "10.24.44.51"

  tasks:

    - name: Initialize swarm on first node
      command: docker swarm init --advertise-addr {{ manager_ip }}
      when: inventory_hostname == "vm-dock1"
      register: swarm_init
      failed_when: false

    - name: Get join token from manager
      command: docker swarm join-token -q manager
      when: inventory_hostname == "vm-dock1"
      register: swarm_token
      changed_when: false

    - name: Set join token fact
      set_fact:
        join_token: "{{ swarm_token.stdout }}"
      when: inventory_hostname == "vm-dock1"

    - name: Share token to all hosts
      set_fact:
        join_token: "{{ hostvars['vm-dock1'].join_token }}"

    - name: Join other nodes as manager
      command: >
        docker swarm join
        --token {{ join_token }}
        {{ manager_ip }}:2377
      when: inventory_hostname != "vm-dock1"
      failed_when: false

    - name: Promote nodes to manager (safety)
      command: docker node promote {{ item }}
      when: inventory_hostname == "vm-dock1"
      loop:
        - vm-dock2
        - vm-dock3
      failed_when: false

    - name: Show swarm nodes
      command: docker node ls
      when: inventory_hostname == "vm-dock1"
      register: node_list
      changed_when: false

    - name: Output cluster status
      debug:
        msg: "{{ node_list.stdout_lines }}"
      when: inventory_hostname == "vm-dock1"
```	  


```
ok: [vm-dock1] => {
    "msg": [
        "ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION",
        "xn2a44lkqiz8vp0ivje3tedc0 *   vm-dock1   Ready     Active         Leader           28.2.2",
        "s9dmfj0yytev2wcnuo1z38ic3     vm-dock2   Ready     Active         Reachable        28.2.2",
        "wk5mgw9sjd7zv15cfilwkp8yo     vm-dock3   Ready     Active         Reachable        28.2.2"
    ]
}

```


