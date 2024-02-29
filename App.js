import { Component } from "react";

class App  extends Component{
  constructor(props){
    super(props);
    this.state = {
      person : {
        fullName: "John Doe",
        bio: "Passionné par tout ce qui fait bip.",
        imgSrc: "https://img.freepik.com/photos-gratuite/gros-plan-homme-affaires-debout-dehors-projection-blanc-blanc-carte-affaires_23-2148026638.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1706400000&semt=ais",
        profession: "Software developper"
      },
      show: false,
      elapsedTime: 0,
  }
}
componentDidMount() {
  this.intervalId = setInterval(() => {
    this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.intervalId);
}

toggleShow = () => {
  this.setState((prevState) => ({ show: !prevState.show }));
};
render() {
  const { person, show, elapsedTime } = this.state;

  return (
    <div>
      <h1>Profile App</h1>
      <button onClick={this.toggleShow}>Toggle Profile</button>
      
      {show && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt={person.fullName} />
          <p>Profession: {person.profession}</p>
        </div>
      )}

      <p>Elapsed Time: {elapsedTime} seconds</p>
    </div>
  );
}
}

export default App;