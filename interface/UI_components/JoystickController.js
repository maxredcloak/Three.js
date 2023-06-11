export default class JoystickController{
  constructor(document){
    this.joyManager = undefined;
    this.forward = 0;
    this.turn =0;
    this.createJoystick(document.getElementById('joystickWrapper1'));
  //  this.createButton();
  }
  getDirection(){
    return {forward:this.forward,turn:this.turn};
  }
  createJoystick(element) {
     const options = {
       zone: element,
       size: 120,
       multitouch: true,
       maxNumberOfNipples: 2,
       mode: 'static',
       restJoystick: true,
       shape: 'circle',
       position: { top: '200px', left: '200px' },
       dynamicPage: true,
     }
     this.joyManager = nipplejs.create(options);
     this.joyManager['0'].on('move', (evt, data) => {
       this.forward = data.vector.y;
       this.turn = data.vector.x;
     });
     this.joyManager['0'].on('end', (evt) => {
       this.forward = 0;
       this.turn = 0;
     });
   }
}