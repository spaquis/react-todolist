import { Component } from 'react';

type RenderCountProps = {
    componentName: string
}

/**
 * Calculate the number of rerender component
 */
const RenderCount = class extends Component<RenderCountProps> {
  count = 1;

  UNSAFE_componentWillUpdate() {
    this.count = this.count + 1;
  }

  render() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(`Render ${this.props.componentName} : ${this.count}`);
    }
    return null;
  }
};

export default RenderCount;
