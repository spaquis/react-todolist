import { Component } from "react";

type RenderCountProps = {
  componentName: string;
};

/**
 * Calculate the number of rerender component
 */
class RenderCount extends Component<RenderCountProps> {
  count = 0;

  render() {
    this.count = this.count + 1;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log(`Render ${this.props.componentName} : ${this.count}`);
    }
    return null;
  }
}

export default RenderCount;
