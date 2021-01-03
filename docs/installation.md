---
id: installation
title: Installation
---


### Intro

Congratiolation, You are about to start using Fudge!
The installation is very easy and to be done in few types.
Installation script is based on npm and installs node modules into your project.

### Preconditions

1. node.js is installed, if not, visit https://nodejs.org/
2. MongoDB is installed, if not, visit https://mongodb.com/

Make sure you downloaded the .zip file and extracted it with the password given to a desired path.

### Getting started

:::note
For this guide, assume the extracted files are at 'C:\fudgeProject'
:::

1. Navigate to the path where you extracted the .zip to and make sure the following files and folders exists (depending the license you've purchased)

    1. case of Basic Licence - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
    2. case of Premium Licence - 3 Folders: client, server, mockdata. 2 Files: init.js, package.json.
    3. case of Extended Licence - 4 Folders: admin, client, server, mockdata. 2 Files: init.js, package.json.

2. Open cmd and navigate to the specific, for ex. to 'C:\fudgeProject'

3. Type ```npm i``` and press Enter.

4. The installation will start.

    1. First step - initializing the database with mock data.
    2. Second step - installing node.js modules.

5. Once the installation completed, open another cmd window and navigate to the same path.

6. Through one of the windows navigate to server folder 'C:\fudgeProject\server', type ```npm run dev``` and press Enter.
    The server is now up and you can see the line says 'Server running on port 4000'

7. Through one of the windows navigate to client folder 'C:\fudgeProject\client', type ```npm start``` and press Enter.
    The client side is now up and you can see the line says 'Localhost: http://localhost:3000'

8. With your browser navigate to 'http://localhost:3000' to see client side.

9. With you favourite IDE supporting JavaScript open the root folder 'C:\fudgeProject' and start editing your application.
        