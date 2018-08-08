class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <div className="flex-container" id="main">
          
       <div>
        <div className="board-row">
          <button className="drum">Q</button>
          <button className="drum">W</button>
          <button className="drum">E</button>
        </div>
        <div className="board-row">
          <button className="drum">A</button>
          <button className="drum">S</button>
          <button className="drum">D</button>
        </div>
        <div className="board-row">
          <button className="drum">Z</button>
          <button className="drum">X</button>
          <button className="drum">C</button>
        </div>
       </div>
          
       <div>
         <div className="flex-container">
           <p>OFF</p>
           <label className="switch">
             <input type="checkbox"  id ="checkB" onclick="gameOn()" />
             <span className="slider" id="slide"></span>
           </label>
           <p>ON</p>
         </div>
            
            <input type="text" id="count" placeholder = 'Display' disabled />
            <p>Volume</p>
            
         <div className="flex-container">
           <p>Type 1</p>
           <label className="switch">
             <input type="checkbox"  id ="checkB" onclick="gameOn()" />
             <span className="slider" id="slide"></span>
           </label>
           <p>Type 2</p>
         </div>
         
          </div>
          
        </div>
      </div>
    )
  }
}
  

ReactDOM.render(
  <div>
    <Drums></Drums>
  </div>, document.getElementById('root'))
