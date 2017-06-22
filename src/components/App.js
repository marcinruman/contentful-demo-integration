import { h , Component } from 'preact';
import { Router } from 'preact-router';

import Home from './Home';
import Error from './Error';

export class App extends Component {
    render() {
        return (
            <div class="app">
                <Router>
                    <Home path="/" />
                    <Error default />
                </Router>
            </div>
        )
    };
}

export default App;