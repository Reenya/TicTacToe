(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=n(1),s=n(2),l=n(4),u=n(3),f=n(5),p=(n(15),n(6)),m=(n(16),n(17),function(e){var t=e.children,n=e.action;return r.a.createElement("button",{className:"button",onClick:function(){return n()}},t)}),v=function(e){var t=e.continueAction;return r.a.createElement(m,{action:t}," Continue ")},d=function(e){var t=e.restartAction;return r.a.createElement(m,{action:t}," Restart ",r.a.createElement("i",{className:"fa fa-refresh"})," ")},y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.winner,n=e.continueAction,a="player"===t?"You are a winner! Congrats!":"You lose. Sorry :(";return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"info winner"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},a),r.a.createElement("div",{className:"info__content"},r.a.createElement(v,{continueAction:n})))))}}]),t}(r.a.Component),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).generateKey=function(){return Math.floor(1e6*Math.random())},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.field,a=t.winner;if(null===n)return null;a&&r.a.createElement("h1",null,"You win!",a);var i=n.map(function(t,n){return r.a.createElement("tr",{className:"game-field_row",key:e.generateKey()},t.map(function(t,a){return r.a.createElement(E,{cellData:t,playerMove:e.props.playerMove,coords:{rowIndex:n,cellIndex:a},key:e.generateKey()})}))});return r.a.createElement("div",{className:" col-lg-7  col-md-12"},r.a.createElement("table",{className:"game-field"},r.a.createElement("tbody",null,i)))}}]),t}(r.a.Component),E=function(e){var t=e.cellData,n=e.playerMove,a=e.coords;e.winSequence;return r.a.createElement("td",{className:"game-field__cell",onClick:function(){return n(a)}},t)},w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={field:null,fieldSize:12,countMoves:0,winner:null,winSequence:[]},n.gameRestart=function(){n.setState({field:null,fieldRender:[],fieldSize:12,countMoves:0,winner:null,winSequence:[]}),n.createGameField(),n.props.restartEnd()},n.createGameField=function(){for(var e=n.state.fieldSize,t=[],a=0;a<e+2;a++){t[a]=[];for(var r=0;r<e+2;r++)t[a].push(new S(a,r))}for(var i=0;i<e+2;i++)t[0][i]=new N,t[i][0]=new N,t[e+1][i]=new N,t[i][e+1]=new N;n.setState({field:t})},n.playerMove=function(e){var t=e.rowIndex,a=e.cellIndex,r=n.state.field;if(!n.isItStep(r[t+1][a+1])){var i=Object(p.a)(r);i[t+1][a+1]=new b("player",a+1,t+1),n.setState({field:i});for(var c=0;c<4;c++)n.calculateNextMove();n.props.changeCountMoves(),n.pcMove(),n.testWin("player")}},n.calculateNextMove=function(){for(var e=n.state,t=e.fieldSize,a=e.field,r=1;r<t+1;r++)for(var i=1;i<t+1;i++){var c=a[r][i];n.isItStep(c)&&n.searchPotencialIntersections(c)}},n.isItStep=function(e){return"emptyCell"!==e.type},n.isItBorder=function(e){return"border"===e.type},n.isItEmpty=function(e){return"emptyCell"===e.type},n.searchPotencialIntersections=function(e){n.state.field;n.getArrayNearCells(e).forEach(function(t,a){n.isItStep(t)&&(n.isHaveSameType(e,t)||n.isItBorder(t))&&n.recalculationPotencialRelatedCells(e,t,a)})},n.recalculationPotencialRelatedCells=function(e,t,n){var a=[4,5,6,7,0,1,2,3];e.stepPotential[n];t.stepPotential[n]+=e.stepPotential[n],e.stepPotential[a[n]]+=t.stepPotential[a[n]],e.stepPotential[n]=0,t.stepPotential[a[n]]=0},n.isHaveSameType=function(e,t){return e.type===t.type&&!n.isItEmpty(e)&&!n.isItEmpty(t)},n.getArrayNearCells=function(e){var t=e.y,a=e.x,r=n.state.field;return[r[t-1][a],r[t-1][a+1],r[t][a+1],r[t+1][a+1],r[t+1][a],r[t+1][a-1],r[t][a-1],r[t-1][a-1]]},n.pcMove=function(){var e=n.state.field,t=n.calculateCellPotential("player");e.slice();e[t.y][t.x]=new b("pc",t.x,t.y),n.setState({})},n.calculateCellPotential=function(e){for(var t=n.state,a=t.fieldSize,r=t.field,i=[],c=0;c<a+2;c++){i[c]=[];for(var o=0;o<a+2;o++)i[c].push(0)}for(var s=1;s<a+1;s++)for(var l=function(t){var a=r[s][t];n.isItStep(a)&&a.type===e&&n.getArrayNearCells(a).forEach(function(e,t){if(!n.isItStep(e)&&!n.isItBorder(e)){var r=n.getArrayNearCells(e)[t],c=a.stepPotential[t],o=0;n.isItStep(r)&&!n.isItBorder(r)&&(o=r.stepPotential[[4,5,6,7,0,1,2,3][t]]),i[e.y][e.x]=Math.max(i[e.y][e.x],c+o)}})},u=1;u<a+1;u++)l(u);return n.findMax(i)},n.findMax=function(e){n.state.fieldSize;var t=0,a={};return e.forEach(function(e,n){return e.forEach(function(e,r){e>t&&(t=e,a={y:n,x:r})})}),a},n.oneLineMatch=function(e,t,a,r){if(5===a)return r;var i=n.getNearCell(e,t);return n.isHaveSameType(e,i)?n.oneLineMatch(i,t,a+1,[].concat(Object(p.a)(r),[i])):null},n.fieldRender=function(){var e=n.state,t=e.field,a=e.fieldSize,i=e.winSequence;if(!t)return[];var c=t.slice();i.forEach(function(e){console.log("hah",c[e.y][e.x].win),c[e.y][e.x].win=!0});for(var o=[],s=1;s<a+1;s++){o[s-1]=[];for(var l=1;l<a+1;l++){var u=c[s][l],f=u.win?"mark-win":null;n.isItStep(u)?"player"===u.type?o[s-1].push(r.a.createElement("i",{className:"fa fa-times ".concat(f)})):o[s-1].push(r.a.createElement("i",{className:"fa fa-circle-o ".concat(f)})):o[s-1].push(" ")}}return o},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.createGameField()}},{key:"componentDidUpdate",value:function(e,t){!1===e.restart&&!0===this.props.restart&&this.gameRestart()}},{key:"getNearCell",value:function(e,t){var n=e.x,a=e.y,r=this.state.field;switch(t){case 0:return r[a-1][n];case 1:return r[a-1][n+1];case 2:return r[a][n+1];case 3:return r[a+1][n+1];case 4:return r[a+1][n];case 5:return r[a+1][n-1];case 6:return r[a][n-1];case 7:return r[a-1][n-1]}}},{key:"findSumPotintialNearCells",value:function(e){}},{key:"testWin",value:function(e){for(var t=this.state,n=t.field,a=t.fieldSize,r=1;r<a+1;r++)for(var i=1;i<a+1;i++)this.findCrossesNeighbour(n[r][i])}},{key:"findCrossesNeighbour",value:function(e){var t=this;this.getArrayNearCells(e).forEach(function(n,a){if(t.isHaveSameType(e,n)){var r=t.oneLineMatch(n,a,2,[e,n]);r&&(t.setState({winner:r[0].type,winSequence:r}),console.log(t.state.win),t.props.setWinner(r[0].type))}})}},{key:"render",value:function(){var e=this.state,t=e.countMoves,n=e.winner;e.winSequence,this.props.setWinner;return r.a.createElement(h,{field:this.fieldRender(),playerMove:this.playerMove,moves:t,winner:n})}}]),t}(r.a.Component),b=function e(t,n,a){Object(o.a)(this,e),this.stepPotential=[1,1,1,1,1,1,1,1],this.type=null,this.x=null,this.y=null,this.win=!1,this.type=t,this.x=n,this.y=a},N=function e(){Object(o.a)(this,e),this.type="border",this.stepPotential=[-1,-1,-1,-1,-1,-1,-1,-1]},S=function e(t,n){Object(o.a)(this,e),this.type="emptyCell",this.x=null,this.y=null,this.y=t,this.x=n},g=(n(18),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={moves:0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.restartAction,n=e.continueAction,a=(e.countMoves,e.playerWin),i=e.playerLose,c=e.winner,o=c?r.a.createElement(y,{winner:c,continueAction:n}):null;return r.a.createElement("div",{className:"col-lg-4  col-md-12"},o,r.a.createElement(d,{restartAction:t}),r.a.createElement("div",{className:"info__stats"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Moves"),r.a.createElement("div",{className:"info__content"},this.props.moves))),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Score"),r.a.createElement("div",{className:"info__content"},a," : ",i)))),r.a.createElement("div",{className:"info info--rules"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Rules"),r.a.createElement("div",{className:"info__content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at commodi, delectus dolores maiores molestiae officia. Adipisci assumenda explicabo facere fugiat fugit labore necessitatibus omnis quaerat sed tenetur, velit!"))))}}]),t}(r.a.Component)),M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countMoves:0,playerWin:0,playerLose:0,winner:null,restart:!1},n.changeCountMoves=function(){n.setState(function(e){return{countMoves:e.countMoves+1}})},n.continueAction=function(){n.setState({countMoves:0,restart:!0,winner:null})},n.restartAction=function(){n.setState({countMoves:0,playerWin:0,playerLose:0,restart:!0})},n.restartEnd=function(){n.setState({restart:!1})},n.setWinner=function(e){console.log("\u0447\u0442\u043e \u0437\u0430 \u0445\u0443\u0439\u043d\u044f"),"player"===e?n.setState(function(t){return{winner:e,playerWin:t.playerWin+1}}):n.setState(function(t){return{winner:e,playerLose:t.playerLose+1}})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.countMoves,n=e.playerWin,a=e.playerLose,i=e.winner,c=e.restart,o=r.a.createElement(w,{changeCountMoves:this.changeCountMoves,setWinner:this.setWinner,restart:c,restartEnd:this.restartEnd}),s=r.a.createElement(g,{moves:t,playerWin:n,playerLose:a,winner:i,restartAction:this.restartAction,continueAction:this.continueAction});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("h1",{className:"title col-lg-1"},"TicTacToy")),r.a.createElement("div",{className:"row justify-content-center"},o,s))}}]),t}(r.a.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.95405fb1.chunk.js.map