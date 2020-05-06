import * as React from 'react';

export interface IYearlyProps {
}

export interface IYearlyState {
}

export default class Yearly extends React.Component<IYearlyProps, IYearlyState> {
  constructor(props: IYearlyProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>Yearly</h1>
      </div>
    );
  }
}