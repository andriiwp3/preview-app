# Link Preview Application

## Overview

Link Preview is a web application that allows users to create customized link previews for sharing on social media platforms like LinkedIn and Twitter. The application also supports link redirects, enhancing the user experience.

## Features

- Create customizable link previews.
- Support for link previews on LinkedIn and Twitter.
- Redirect links to custom URLs.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- Docker
- PostgreSQL
- Sequelize

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x recommended)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/link-preview-app.git
   ```

2. Change to the project directory:

   ```bash
   cd link-preview-app
   ```

3. Run Docker Compose to start the PostgreSQL database:

   ```bash
   docker-compose up
   ```

4. The application should be running at http://localhost:3000.

## Usage

1. Create a link preview:

   Send a POST request to `http://localhost:3000/api/create-link-preview` with JSON payload containing the link details (url, description, image).

   Example:

   ```json
   {
    "image": "https://media.istockphoto.com/id/1049869360/photo/cool-dog.jpg?s=612x612&w=0&k=20&c=J3GFEVyVxJW9JT7iAoqHTASmbKp4Zz4IleB6HP9Szho=",
    "description": "hello",
    "url": "test-url",
    "redirectURL": "https://google.com",
    "title": "test title"
   }
   ```

2. Redirect link:

   Click on the generated link or send it to others. The link will redirect to a custom URL.

## Database

The application uses PostgreSQL for data storage. You can find the database configuration in the `docker-compose.yml` file.
