(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=n(1),c=n(2),s=n(4),u=n(3),f=n(5),p=(n(15),n(6)),v=(n(16),n(17),function(e){var t=e.children,n=e.action;return r.a.createElement("button",{className:"button",onClick:function(){return n()}},t)}),m=function(e){var t=e.continueAction;return r.a.createElement(v,{action:t}," Continue ")},d=function(e){var t=e.restartAction;return r.a.createElement(v,{action:t}," Restart ",r.a.createElement("i",{className:"fa fa-refresh"})," ")},y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.winner,n=e.continueAction,a="player"===t?"You are a winner!":"You lose. Sorry :(";return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"info winner"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},a),r.a.createElement("div",{className:"info__content"},r.a.createElement(m,{continueAction:n})))))}}]),t}(r.a.Component),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).generateKey=function(){return Math.floor(1e6*Math.random())},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.field,a=t.winner;if(null===n)return null;a&&r.a.createElement("h1",null,"You win!",a);var i=n.map(function(t,n){return r.a.createElement("tr",{className:"game-field_row",key:e.generateKey()},t.map(function(t,a){return r.a.createElement(E,{cellData:t,playerMove:e.props.playerMove,coords:{rowIndex:n,cellIndex:a},key:e.generateKey()})}))});return r.a.createElement("div",{className:" col-lg-7  col-md-12"},r.a.createElement("table",{className:"game-field"},r.a.createElement("tbody",null,i)))}}]),t}(r.a.Component),E=function(e){var t=e.cellData,n=e.playerMove,a=e.coords;e.winSequence;return r.a.createElement("td",{className:"game-field__cell",onClick:function(){return n(a)}},t)},w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={field:null,fieldSize:12,countMoves:0,winner:null,winSequence:[]},n.gameRestart=function(){n.setState({field:null,fieldRender:[],fieldSize:12,countMoves:0,winner:null,winSequence:[]}),n.createGameField(),n.props.restartEnd()},n.createGameField=function(){for(var e=n.state.fieldSize,t=[],a=0;a<e+2;a++){t[a]=[];for(var r=0;r<e+2;r++)t[a].push(new S(a,r))}for(var i=0;i<e+2;i++)t[0][i]=new N,t[i][0]=new N,t[e+1][i]=new N,t[i][e+1]=new N;n.setState({field:t})},n.playerMove=function(e){var t=e.rowIndex,a=e.cellIndex,r=n.state.field;if(!n.isItStep(r[t+1][a+1])){var i=Object(p.a)(r);i[t+1][a+1]=new b("player",a+1,t+1),n.setState({field:i});for(var o=0;o<4;o++)n.calculateNextMove();n.props.changeCountMoves(),n.pcMove(),n.testWin("player")}},n.calculateNextMove=function(){for(var e=n.state,t=e.fieldSize,a=e.field,r=1;r<t+1;r++)for(var i=1;i<t+1;i++){var o=a[r][i];n.isItStep(o)&&n.searchPotentialIntersections(o)}},n.isItStep=function(e){return"emptyCell"!==e.type},n.isItBorder=function(e){return"border"===e.type},n.isItEmpty=function(e){return"emptyCell"===e.type},n.isHaveSameType=function(e,t){return e.type===t.type&&!n.isItEmpty(e)&&!n.isItEmpty(t)},n.isHaveOppositeType=function(e,t){return!(e.type===t.type||n.isItEmpty(e)||n.isItEmpty(t)||n.isItBorder(t)||n.isItBorder(e))},n.searchPotentialIntersections=function(e){n.state.field;n.getArrayNearCells(e).forEach(function(t,a){n.isItStep(t)&&((n.isHaveSameType(e,t)||n.isItBorder(t))&&n.recalculationPotentialIdenticalCells(e,t,a),n.isHaveOppositeType(e,t)&&e.stepPotential[a]<=-10&&n.recalculationPotentialOppositeTypeCells(e,t,a))})},n.recalculationPotentialOppositeTypeCells=function(e,t,n){var a=[4,5,6,7,0,1,2,3];console.log("\u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043a\u043b\u0435\u0442\u043a\u0438 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430",e.stepPotential[n]),console.log("\u043f\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u0441\u044f \u043a \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u0443 \u0446\u0435\u043f\u043e\u0447\u043a\u0438",e.stepPotential[a[n]]),e.stepPotential[n]=-100,e.stepPotential[a[n]]=-1},n.recalculationPotentialIdenticalCells=function(e,t,n){var a=[4,5,6,7,0,1,2,3];e.stepPotential[n];t.stepPotential[n]+=e.stepPotential[n],e.stepPotential[a[n]]+=t.stepPotential[a[n]],e.stepPotential[n]=0,t.stepPotential[a[n]]=0},n.getArrayNearCells=function(e){var t=e.y,a=e.x,r=n.state.field;return[r[t-1][a],r[t-1][a+1],r[t][a+1],r[t+1][a+1],r[t+1][a],r[t+1][a-1],r[t][a-1],r[t-1][a-1]]},n.pcMove=function(){var e=n.state.field,t=n.calculateCellPotential("player");e.slice();e[t.y][t.x]=new b("pc",t.x,t.y),n.setState({})},n.calculateCellPotential=function(e){for(var t=n.state,a=t.fieldSize,r=t.field,i=[],o=0;o<a+2;o++){i[o]=[];for(var l=0;l<a+2;l++)i[o].push(0)}for(var c=1;c<a+1;c++)for(var s=function(t){var a=r[c][t];n.isItStep(a)&&a.type===e&&n.getArrayNearCells(a).forEach(function(e,t){if(n.isItEmpty(e)){var r=[4,5,6,7,0,1,2,3],o=n.getNearCell(e,t),l=a.stepPotential[t],c=0;n.isItStep(o)&&!n.isItBorder(o)&&n.isHaveSameType(a,o)&&(c=o.stepPotential[r[t]]);var s=n.getArrayNearCells(e),u=0;s.forEach(function(t,i){n.isItStep(e)&&!n.isItBorder(t)&&n.isHaveSameType(a,t)&&t.stepPotential[r[i]]>=2&&u++});var f=u>=2?3:a.stepPotential[t];i[e.y][e.x]=Math.max(i[e.y][e.x],l+c+.5,f)}})},u=1;u<a+1;u++)s(u);return n.findMax(i)},n.findMax=function(e){n.state.fieldSize;var t=0,a={};return e.forEach(function(e,n){return e.forEach(function(e,r){e>t&&(t=e,a={y:n,x:r})})}),a},n.oneLineMatch=function(e,t,a,r){if(5===a)return r;var i=n.getNearCell(e,t);return n.isHaveSameType(e,i)?n.oneLineMatch(i,t,a+1,[].concat(Object(p.a)(r),[i])):null},n.fieldRender=function(){var e=n.state,t=e.field,a=e.fieldSize,i=e.winSequence;e.winner;if(!t)return[];var o=t.slice();i.forEach(function(e){o[e.y][e.x].win=!0});for(var l=[],c=1;c<a+1;c++){l[c-1]=[];for(var s=1;s<a+1;s++){var u=o[c][s],f=u.win?"mark-win":null;n.isItStep(u)?"player"===u.type?l[c-1].push(r.a.createElement("i",{className:"fa fa-times ".concat(f)})):l[c-1].push(r.a.createElement("i",{className:"fa fa-circle-o ".concat(f)})):l[c-1].push(" ")}}return l},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.createGameField()}},{key:"componentDidUpdate",value:function(e,t){!t.winner&&this.state.winner&&this.props.setWinner(this.state.winner),!1===e.restart&&!0===this.props.restart&&this.gameRestart()}},{key:"getNearCell",value:function(e,t){var n=e.x,a=e.y,r=this.state.field;switch(t){case 0:return r[a-1][n];case 1:return r[a-1][n+1];case 2:return r[a][n+1];case 3:return r[a+1][n+1];case 4:return r[a+1][n];case 5:return r[a+1][n-1];case 6:return r[a][n-1];case 7:return r[a-1][n-1]}}},{key:"testWin",value:function(e){for(var t=this.state,n=t.field,a=t.fieldSize,r=1;r<a+1;r++)for(var i=1;i<a+1;i++)this.findCrossesNeighbour(n[r][i])}},{key:"findCrossesNeighbour",value:function(e){var t=this;this.getArrayNearCells(e).forEach(function(n,a){if(t.isHaveSameType(e,n)){var r=t.oneLineMatch(n,a,2,[e,n]);r&&t.setState({winner:r[0].type,winSequence:r})}})}},{key:"render",value:function(){var e=this.state,t=e.countMoves,n=e.winner;e.winSequence,this.props.setWinner;return r.a.createElement(h,{field:this.fieldRender(),playerMove:this.playerMove,moves:t,winner:n})}}]),t}(r.a.Component),b=function e(t,n,a){Object(l.a)(this,e),this.stepPotential=[1,1,1,1,1,1,1,1],this.type=null,this.x=null,this.y=null,this.win=!1,this.type=t,this.x=n,this.y=a},N=function e(){Object(l.a)(this,e),this.type="border",this.stepPotential=[-1,-1,-1,-1,-1,-1,-1,-1]},S=function e(t,n){Object(l.a)(this,e),this.type="emptyCell",this.x=null,this.y=null,this.y=t,this.x=n},g=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={moves:0},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.restartAction,n=e.continueAction,a=(e.countMoves,e.playerWin),i=e.playerLose,o=e.winner,l=o?r.a.createElement(y,{winner:o,continueAction:n}):null;return r.a.createElement("div",{className:"col-lg-4  col-md-12"},l,r.a.createElement(d,{restartAction:t}),r.a.createElement("div",{className:"info__stats"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Moves"),r.a.createElement("div",{className:"info__content"},this.props.moves))),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Score"),r.a.createElement("div",{className:"info__content"},a," : ",i)))),r.a.createElement("div",{className:"info info--rules"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Rules"),r.a.createElement("div",{className:"info__content"},r.a.createElement("div",null,"1. You have field 15x15"),r.a.createElement("div",null,"2. You need to collect 5 crosses in a row (including vertical and diagonal axes)"),r.a.createElement("div",null,"3. AI will disturb you and seek to collect their 5 crosses"),r.a.createElement("div",null,"4. So go and win!")))))}}]),t}(r.a.Component)),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countMoves:0,playerWin:0,playerLose:0,winner:null,restart:!1},n.changeCountMoves=function(){n.setState(function(e){return{countMoves:e.countMoves+1}})},n.continueAction=function(){n.setState({countMoves:0,restart:!0,winner:null})},n.restartAction=function(){n.setState({countMoves:0,playerWin:0,playerLose:0,restart:!0})},n.restartEnd=function(){n.setState({restart:!1})},n.setWinner=function(e){"player"===e?n.setState(function(t){return{winner:e,playerWin:t.playerWin+1}}):n.setState(function(t){return{winner:e,playerLose:t.playerLose+1}})},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.countMoves,n=e.playerWin,a=e.playerLose,i=e.winner,o=e.restart,l=r.a.createElement(w,{changeCountMoves:this.changeCountMoves,setWinner:this.setWinner,restart:o,restartEnd:this.restartEnd}),c=r.a.createElement(g,{moves:t,playerWin:n,playerLose:a,winner:i,restartAction:this.restartAction,continueAction:this.continueAction});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("h1",{className:"title col-lg-1"},"TicTacToy")),r.a.createElement("div",{className:"row justify-content-center"},l,c))}}]),t}(r.a.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cccd595a.chunk.js.map