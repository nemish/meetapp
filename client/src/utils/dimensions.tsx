import * as React from "react";

interface IState {
  width: number;
  height: number;
}

const DimensionsContext = React.createContext({
  width: 0,
  height: 0
});

export class DimensionsProvider extends React.PureComponent<{}, IState> {
  state = {
    width: 0,
    height: 0
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log("onResize", width, height);
    this.setState({ width, height });
  };

  render() {
    return (
      <DimensionsContext.Provider value={this.state}>
        {this.props.children}
      </DimensionsContext.Provider>
    );
  }
}

export const withDimensions = (Component: any) => {
  return (props: any) => (
    <DimensionsContext.Consumer>
      {dimensions => {
        console.log("in render", dimensions);
        return <Component dimensions={dimensions} {...props} />;
      }}
    </DimensionsContext.Consumer>
  );
};
