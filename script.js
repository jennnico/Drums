class Drums extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      on: false,
      display: "Note: ",
      drums: true,
      volume: .50,
      sounds: [
        "http://orteil.dashnet.org/cookieclicker/snd/smallCymbalCrash.mp3",
        "http://www.denhaku.com/r_box/drumtraks/cowbell.wav",
        "http://www.randomthink.net/labs/html5drums/drumkit/Crash%20Cymbal.wav",
        "http://s1download-universal-soundbank.com/mp3/sounds/4394.mp3",
        "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Drum%20Kick-5007-Free-Loops.com.mp3", 
        "http://machines.hyperreal.org/machines/manufacturers/Sequential/Drumtraks/samples/tmp/Drumtraks/DT_Rimshot.wav",
        "http://www.denhaku.com/r_box/tr707/bd1.wav",
        "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Kick%203-3174-Free-Loops.com.mp3",
        "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Breakbeat%20Bass%20Drum-1032-Free-Loops.com.mp3"
      ]
    };
    this.drumOn = this.drumOn.bind(this)
    this.switchInstrument = this.switchInstrument.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
    this.keydown = this.keydown.bind(this)
  }
  
  //Turn drum on/off
  drumOn(){
    this.setState({
      on: !this.state.on
    });
  }
  
  //Play sounds and display note, IF the machine is on
  playAudio(URL, id){
    if(this.state.on === true){
      let audio = new Audio(URL)
      audio.play()
      
      this.setState({
        display: "Note: " + id
    });
      audio.volume = this.state.volume
    }
  }
  
  //Switch between guitar and drums
  //Array of drum sounds is repeated here... refactor to make code DRY
  switchInstrument(){
    if(this.state.drums === true){
      //Play guitar sounds
      this.setState({
        drums: false,
        sounds: [
          "http://lapoc.de/samples/telshow-tele/cleandiskant-D01-twang.wav",
          "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Guitar%20Harmonics-13626-Free-Loops.com.mp3",
          "http://lapoc.de/samples/telshow-tele/cleandiskant-D04-double.wav",
          "http://moodle.uca.es/mod/chat/beep.wav",
          "http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/GTRSLIDE.WAV",
          "http://www.adrianrose.co.uk/soundbytes/quantum_drive.mp3",
          "http://www.sounds.beachware.com/2illionzayp3may/illwavul/BWEE.mp3",
          "http://lapoc.de/samples/telshow-tele/cleanriff-A-03-12.wav",
          "http://lapoc.de/samples/telshow-tele/cleanmidbass-B01-slap.wav"
        ]
      })
    } else{
      //Play drum sounds
      this.setState({
        drums: true,
        //Repeated Array 
        sounds: [
          "http://orteil.dashnet.org/cookieclicker/snd/smallCymbalCrash.mp3",
          "http://www.denhaku.com/r_box/drumtraks/cowbell.wav",
          "http://www.randomthink.net/labs/html5drums/drumkit/Crash%20Cymbal.wav",
          "http://s1download-universal-soundbank.com/mp3/sounds/4394.mp3",
          "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Drum%20Kick-5007-Free-Loops.com.mp3",                 
          "http://machines.hyperreal.org/machines/manufacturers/Sequential/Drumtraks/samples/tmp/Drumtraks/DT_Rimshot.wav",
          "http://www.denhaku.com/r_box/tr707/bd1.wav",
          "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Kick%203-3174-Free-Loops.com.mp3",
          "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Breakbeat%20Bass%20Drum-1032-Free-Loops.com.mp3"
        ]
      })
    }
  }
  
  changeVolume(v){
    console.log(v)
    this.setState({
      volume: v
    });
  }
 
//first attempt to make keyboard play notes.  
keydown = (event) => {
  if(event.key === 'q'){
    alert('enter press here! ');
    this.Drums.prototype.playAudio(sounds[0], "Q")
  }
}
  
  render() {
    const {sounds} = this.state;
    return (
      <div>
        <div className="flex-container" id="drum-machine">
         {/* Trying to make keyboard play sounds...
          <input type="text" onKeyPress={() => this.keydown(event)} /> */} 
        
       {/*Audio buttons*/}
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
         
         {/*On/Off switch*/}
         <div className="flex-container">
           <p>OFF</p>
           <label className="switch">
             <input type="checkbox"  id ="checkB" onClick={this.drumOn}/>
             <span className="slider" id="slide" ></span>
           </label>
           <p>ON</p>
         </div>
            
         {/*Music note display*/}   
         <p type="text" id="display">{this.state.display}</p>
         
         {/*Volume Control... to be added*/}
         <p>Volume: {(this.state.volume)*100}</p>
         <div className="slidecontainer">
           <input type="range" className="slides" id="vol" onInput={() => this.changeVolume((vol.value/100))}></input>
        </div>
         
         {/*Drum/Guitar switch*/}
         <div className="flex-container">
           <p>Drum</p>
           <label className="switch">
             <input type="checkbox"  id ="checkB" onClick={this.switchInstrument}/>
             <span className="slider" id="slide"></span>
           </label>
           <p>Guitar</p>
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
