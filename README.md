Step 1: To get started, we need to open a command prompt.

Step 2: Create a project folder named reactproject1:

mkdir reactproject1

Step 3: Move to the project folder, using cd reactproject1, so we can install React into it.

cd reactproject1

Step 4: Create a package.json file, the following command will walk you through creating a package.json file.

npm init

Step 5: Install React and other modules using npm install — save react, thiswill install React into your project and update the package.json file with dependencies.

npm install --save react

We can install additional packages using npm install — save and the name of the package we want to install. Here we are installing react-dom: npm install — save react-dom

npm install --save react-dom

npm install -g create-react-app
Create-React-App is installed in the following location: C:\Users\<username>\AppData\Roaming\npm\node_modules\create-react-app\

Step 2: To create a new project and deploy React into it, we run create-react-app <project_name>. Let’s do this to create reactproject2.

create-react-app reactproject2

cd reactproject2

And npm start will run the project application.

