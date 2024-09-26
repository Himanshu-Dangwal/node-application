# CI/CD Pipelines and Nginx Setup

## CI Pipeline:
- **Purpose**: Automates the process of building and deploying Docker images for the application.
- **Steps**:
  1. **Build the Docker image**: The pipeline creates a Docker image of the application.
  2. **Push to Docker Hub**: After building, the image is automatically pushed to my [Docker Hub repository](https://hub.docker.com/r/himanshudangwal/backend-snippet).

## CD Pipeline:
- **Purpose**: Automates the process of pulling the latest Docker image and deploying it on an EC2 instance.
- **Steps**:
  1. **EC2 Runner**: A GitHub Actions runner is set up on an AWS EC2 instance.
  2. **Pull the latest Docker image**: The runner pulls the latest image from Docker Hub.
  3. **Start a Docker container**: The pulled Docker image is used to spin up a container on the EC2 instance.
  4. **Expose the application**: The application runs inside the container on **port 8080**.

## Nginx Setup:
- **Purpose**: Nginx is used to handle reverse proxy and redirect traffic from default ports (80 and 443) to the application's internal container running on port 8080.
- **Configuration**:
  - Requests coming to **port 80 (HTTP)** and **port 443 (HTTPS)** on the EC2 server are routed to the application running on port 8080 inside the Docker container.
  - Nginx handles SSL termination and routes traffic securely to the backend service.
