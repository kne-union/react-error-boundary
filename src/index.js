import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  static propTypes = {
    onError: PropTypes.func,
    children: PropTypes.node,
    errorComponent: PropTypes.elementType,
    errorRender: PropTypes.func
  }
  static defaultProps = {
    onError() {
    }
  }
  state = {
    error: null,
  }

  componentDidCatch(error) {
    this.setState(() => ({error}))
    this.props.onError(error)
  }

  render() {
    const {errorComponent: ErrorComponent, errorRender} = this.props;
    if (this.state.error) {
      if (ErrorComponent) {
        return <ErrorComponent error={this.state.error}/>
      }
      if (errorRender) {
        return errorRender(this.state.error);
      }
      console.error(this.state.error);
      return null;
    }

    return this.props.children;
  }
}