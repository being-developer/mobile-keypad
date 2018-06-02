export class KeypadController {
  constructor (moment) {
    'ngInject';

    this.typedChar = '';
    this.keypadMap = [];
    this.prevTypedBtn = undefined;
    this.prevClickTime = undefined;
    this.btnClicked = 0;
    this.init();
    this.moment = moment;
  }
  init(){
   this.keypadMap = [{
      key:1,
      char: ['.',',','!']
    },{
      key:2,
      char: ['a','b','c']
    },
    {
      key:3,
      char: ['d','e','f']
    },
    {
      key:4,
      char: ['g','h','i']
    },
    {
      key:5,
      char: ['j','k','l']
    },
    {
      key:6,
      char: ['m','n','o']
    },
    {
      key:7,
      char: ['p','q','r','s']
    },
    {
      key:8,
      char: ['t','u','v']
    },
    {
      key:9,
      char: ['w','x','y','z']
    },
    {
      key:'*',
      char: ['*']
    },
    {
      key:0,
      char: [0]
    },
    {
      key:'#',
      char: ['#']
    }];
  }
  handleKeypadClick(index){
    const char = this.keypadMap[index].char || [];
    let typeChar = '';
    const moment = this.moment;
    const currTime = moment();
    this.btnClicked++;
    const timeTaken = currTime.diff(this.prevClickTime,'seconds');
    if(this.prevTypedBtn === index  &&  (timeTaken < 2 && timeTaken >= 0 && angular.isDefined(this.prevClickTime) )) {
      if(char.length > 1){
        typeChar = char[this.btnClicked % char.length];
        this.typedChar = this.typedChar.slice(0,-1);
      }else {
        typeChar = char[0];
      }
      this.typedChar += typeChar;
    }else {
      this.typedChar += char[0];
      this.btnClicked = 0;
    }
    this.prevTypedBtn = index;
    this.prevClickTime = moment();
  }
  clearAllInput(){
    this.typedChar = '';
    this.prevTypedBtn = undefined;
    this.prevClickTime = undefined;
    this.btnClicked = 0;
  }
  clearInput(){
    this.typedChar = this.typedChar.slice(0,-1);
    this.prevTypedBtn = undefined;
    this.prevClickTime = undefined;
    this.btnClicked = 0;
  }
}
