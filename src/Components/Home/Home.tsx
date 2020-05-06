import * as React from 'react';

export interface IHomeProps {
}

export interface IHomeState {
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>nergy - Ovo/Octopus Agile Comparison</h1>
        <p>
          Simple way to compare my energy usage on OVO to the Octopus Agile Tarrif. Is it going to be cheaper!
        </p>
        <h1>Github</h1>
        <a href='https://github.com/christoefar/nergy'>https://github.com/christoefar/nergy</a>
        <h1>Contact</h1>
        <p>
          Send me spams: chris.child (at) gmail.com
        </p>
      </div>
    );
  }
}
