import React from 'react';
import './App.css';
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bkg: props.bkg };
    props.cellList.push(this);
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.changeBkg(), 1000);
  }
  changeBkg() {
    this.setState({
      bkg: serializeRGBtoString(
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 255
      )
    });
  }
  render() {
    //let nameOfClass="square";
    console.log("BKG " + this.state.bkg);

    return (
      <button
        style={{
          backgroundColor: this.state.bkg,
          width: "50px",
          height: "50px"
        }}
      >
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cellList: props.cellList };
  }
  render() {
    return (
      <div className="sub-grid">
        <div>
          {" "}
          <Square cellList={this.props.cellList} />
          <Square cellList={this.props.cellList} />
          <Square cellList={this.props.cellList} />
        </div>
        <div>
          {" "}
          <Square cellList={this.props.cellList} />
          <Square bkg="#fe45ae" cellList={this.props.cellList} />
          <Square cellList={this.props.cellList} />
        </div>
        <div>
          {" "}
          <Square cellList={this.props.cellList} />
          <Square cellList={this.props.cellList} />
          <Square cellList={this.props.cellList} />
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  cellList = [];
  constructor(props) {
    super(props);
  }
  changePattern() {
    this.cellList.forEach((elem) => {
      elem.setState({
        bkg: this.changeBkg(
          Math.random() * 255,
          Math.random() * 255,
          Math.random() * 255
        )
      });
    });
  }
  changeBkg(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  render() {
    return (
      <div>
        <div className="boards-row">
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
        </div>
        <div className="boards-row">
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
        </div>
        <div className="boards-row">
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
          <Board cellList={this.cellList} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <button onClick={this.changePattern.bind(this)}>change pattern</button>
      </div>
    );
  }
}

class PatterneDGrid{
  constructor(props){
    this.super(props);
    this.state={row:props.rows,col:props.col,
               cellSize:props.cellSize,
                patternFunction:props.patternFuntion
               }
  }
  /*render(){
    return (

    );
  }*/
}

function serializeRGBtoString(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

// ========================================

/*ReactDOM.render(<Game />, document.getElementById("root"));
console.log("Howdy from root");*/
