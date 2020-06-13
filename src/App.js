import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Addname from './Addname';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => { this.setState({ Robots: users }) });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    onAddingData = (event) => {
        this.setState({
            Robots: this.state.Robots.concat({
                name: this.state.searchField,
                email: this.state.searchField,
                id: this.state.Robots.length + 1
            })
        });
    }

    render() {
        const filtRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if (this.state.Robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Addname addData={this.onAddingData} />
                    <Scroll>
                        <CardList Robots={filtRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;