import React from "react";

// Class component : OLD

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            counter: 0
        };

        console.log("Constructor");
    }

    componentDidMount() {
        console.log("[ComponentDidMount]: First Time");
    }

    componentDidUpdate(prevState) {
        console.log(prevState);
        if (prevState.value !== "") {
            console.log("[ComponentDiUpdate]: All The Time");
        }
    }

    componentWillUnmount() {
        //limpia memoria antes de que se destruya el componente
    }

    handleClick = () => {
        this.setState({value: "Hola"});
    }

    handleClick2 = () => {
        this.setState({counter: 1});
    }

    render() {
        return(
            <>
                <div>{this.state.value}</div>
                <div>{this.state.counter}</div>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.handleClick2}>Click Counter</button>
            </>
        )
    }
}

export default App;