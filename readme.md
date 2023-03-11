# First Electron App 🧑‍💻

This is a simple Electron app that shows how to use Electron to build a desktop app.

---

## Basics: 🧑‍🎓

- '**main.js**' is the **entry point for the app**.
- 'index.html' is the main page of the app. We write our HTML, CSS and JS here (or split in multiple files).

- But, since it's not a web page, but an app, so we would need to use Node.js to access the file system, etc.
- But, **the 'main.js' process is a different process from the 'index.html' process. We can use file system in 'main.js' but not in 'index.html'**.
- To handle this, we use '***preload.js***' which has access to both the 'main.js' and 'index.html' processes.

- '**renderer.js**' file is just a normal JS file that we are using to write our JS code for the html page.

```js
//  while creating the window, we need to pass the file name to the 'preload' property of the 'webPreferences' object.

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// and load the index.html of the app.
	mainWindow.loadFile('index.html');

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()
};
```

---

## Auto reload: 🔄

- We will use nodemon package to auto reload the app when we make changes to the code.

```sh
# install nodemon as a dev dependency
npm i nodemon -D
```
- In package.json, we will add a script to run the app using nodemon.

```json
"scripts": {
	"start": "electron .",
	"watch": "nodemon --exec electron ."
},
```

- Now, we can run the app using `npm run watch`.

---

## How to run: 🏃‍♂️

```js
npm i
npm start
```
