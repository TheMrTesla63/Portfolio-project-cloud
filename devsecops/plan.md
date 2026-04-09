For this assignment, we will implement a DevSecOps pipeline using a self-hosted Gitea environment within our Proxmox infrastructure from the cloud project. The setup will be documented and made reproducible, for example using Ansible.
 
We will make a simple Node.js web application to demonstrate the pipeline. The CI/CD process will be implemented using Gitea Actions and will automatically trigger on a push to the main branch.
 
The pipeline will consist of four stages. In the build stage, a Docker image is created. In the test stage, the application is validated using basic checks such as starting the container and performing an HTTP request. In the security stage, the image is scanned for vulnerabilities using Trivy. Finally, in the deploy stage, the application is automatically deployed to production using Docker Compose.
 
Monitoring and alerting will be implemented using Zabbix, covering both the infrastructure and the application.
 
The full workflow is automated: a commit triggers the pipeline, which builds, tests, scans, and deploys the application, resulting in an updated version running in production.

