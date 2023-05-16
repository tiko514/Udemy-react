import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasErrors: false };
    }

    componentDidCatch(error) {
        this.setState({ hasErrors: true });
    }

    render() {
        if (this.state.hasErrors) {
            return <p>Something went wrong!</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;