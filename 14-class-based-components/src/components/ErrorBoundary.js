import { Component } from "react";

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        this.setState({ hasError: true });
    }
 
    render() {
        if (this.state.hasError){
            return <p>Something went wrong. Please try again later.</p>;
        }

        // If no error, render the children components
        return this.props.children;
    }
}

export default ErrorBoundary;