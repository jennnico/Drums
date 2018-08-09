class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      on: false,
      display: "Note: ",
      sounds: [
        "http://orteil.dashnet.org/cookieclicker/snd/smallCymbalCrash.mp3",
        "http://www.denhaku.com/r_box/drumtraks/cowbell.wav",
        "http://www.randomthink.net/labs/html5drums/drumkit/Crash%20Cymbal.wav",
        "http://s1download-universal-soundbank.com/mp3/sounds/4394.mp3",
       "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Drum%20Kick-5007-Free-Loops.com.mp3", "http://machines.hyperreal.org/machines/manufacturers/Sequential/Drumtraks/samples/tmp/Drumtraks/DT_Rimshot.wav",
        "http://www.denhaku.com/r_box/tr707/bd1.wav",
        "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Kick%203-3174-Free-Loops.com.mp3",
        "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Breakbeat%20Bass%20Drum-1032-Free-Loops.com.mp3"
      ]
    };
    this.drumOn = this.drumOn.bind(this)
  }
  
  //Turn drum on/off
  drumOn(){
    this.setState({
      on: !this.state.on
    });
  }
  
  //Play sounds
  playAudio(URL, id){
    if(this.state.on === true){
      let audio = new Audio(URL)
      audio.play()
      
      this.setState({
        display: "Note: " + id
    });
    }
  }

  //Switch Audio
  //make a function that resets the sounds array to a new array of new sounds
  //use this.setstate!
  
  render() {
    const {sounds} = this.state;
    return (
      <div>
        <div className="flex-container" id="drum-machine">
          
       <div>
        <div className="board-row">
          <button className="drum-pad" id="q" onClick={() => this.playAudio(sounds[0], "Q")}>Q </button>
          <button className="drum-pad" id="w" onClick={() => this.playAudio(sounds[1], "W")}>W</button>
          <button className="drum-pad" id="e" onClick={() => this.playAudio(sounds[2], "E")}>E</button>
        </div>
        <div className="board-row">
          <button className="drum-pad" id="a" onClick={() => this.playAudio(sounds[3], "A")}>A</button>
          <button className="drum-pad" id="s" onClick={() => this.playAudio(sounds[4], "S")}>S</button>
          <button className="drum-pad" id="d" onClick={() => this.playAudio(sounds[5], "D")}>D</button>
        </div>
        <div className="board-row">
          <button className="drum-pad" id="z" onClick={() => this.playAudio(sounds[6], "Z")}>Z</button>
          <button className="drum-pad" id="x" onClick={() => this.playAudio(sounds[7], "X")}>X</button>
          <button className="drum-pad" id="c" onClick={() => this.playAudio(sounds[8], "C")}>C</button>
        </div>
       </div>
          
       <div>
         <div className="flex-container">
           <p>OFF</p>
           <label className="switch">
             <input type="checkbox"  id ="checkB" onClick={this.drumOn}/>
             <span className="slider" id="slide" ></span>
           </label>
           <p>ON</p>
         </div>
            
            
         <p type="text" id="display">{this.state.display}</p>
            <p>Add Volume Control</p>
         
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
