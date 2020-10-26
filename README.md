This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This tools is for teachers to **author curriculum** for a subject. I have use Reactjs to implement it.

This app is deployed at netlify and check it out [here.](https://authoring-app.purnimagupta.xyz)

### Things that I have implemented:
- Row actions - Indent/Outdent/Delete/Move
- Preseve parent-child relations between nodes while moving, deleting etc
  _Eg_: 
    - Moving a parent will move it's children as well
    - Deleting a node will also delete it's associated children if any
- The text in each row is editable when clicked
- Load/Save functionality to save/download the JSON output and upload JSON file which will again
  create the structure again

## To run the project:

- Clone the app repo and `cd` to this directory.
- `npm install` to install dependencies.
- `npm start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

