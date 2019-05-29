import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static("build"));

    // Express will serve up the front-end index.html file if it doesn't recognize the route
    app.get("*", (req, res) =>
        res.sendFile(path.resolve("build", "index.html"))
    );
}

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
