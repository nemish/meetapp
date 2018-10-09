import * as React from "react";
import { pure, compose, withState, withHandlers, lifecycle } from "recompose";

export interface IGlobalProps {
  modalOpened: boolean;
}

const StateHandler: any = {
  listeners: [],
  _state: {
    modalOpened: false
  },

  get state() {
    return this._state;
  },

  set state(data) {
    this._state = data;
    this.listeners.forEach((fn: any) => fn(this.state));
  },

  queue(callback: any) {
    this.listeners.push(callback);
  },

  dequeue(callback: any) {
    this.listeners = this.listeners.filter((item: any) => item === callback);
  }
};

export const withGlobalState = (callback: (props: IGlobalProps) => any) => {
  return (OuterComponent: React.ComponentType<IGlobalProps>) => {
    return class GlobalStateComponent extends React.PureComponent<
      IGlobalProps
    > {
      componentDidMount() {
        // console.log("withGlobalState didmount", StateHandler.listeners.length);
        StateHandler.queue(this.updateState);
      }

      componentWillUnmount() {
        // console.log(
        //   "withGlobalState willunmount",
        //   StateHandler.listeners.length
        // );
        StateHandler.dequeue(this.updateState);
        // console.log(
        //   "withGlobalState willunmount after",
        //   StateHandler.listeners.length
        // );
      }

      updateState = (state: IGlobalProps) => {
        this.setState(callback(state));
      };

      render() {
        const inner = callback(StateHandler.state);
        // console.log("withGlobalState render", inner, StateHandler.state);
        return <OuterComponent {...this.props} {...inner} />;
      }
    };
  };
};

export const setGlobalState = (state: any) => {
  StateHandler.state = {
    ...StateHandler.state,
    ...state
  };
};

export const setModalShow = (modalOpened: boolean) => {
  setGlobalState({
    modalOpened
  });
};
