(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=n(1),o=n(2),s=n(4),u=n(3),f=n(5),p=(n(15),n(16),function(e){var t=e.children,n=e.action;return r.a.createElement("button",{className:"button",onClick:function(){return n()}},t)}),d=function(e){var t=e.continueAction;return r.a.createElement(p,{action:t}," Continue ")},m=function(e){var t=e.restartAction;return r.a.createElement(p,{action:t}," Restart ",r.a.createElement("i",{className:"fa fa-refresh"})," ")},v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.winner,n=e.continueAction,a="player"===t?"You are a winner!":"You lose. Sorry :(";return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"info winner"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},a),r.a.createElement("div",{className:"info__content"},r.a.createElement(d,{continueAction:n})))))}}]),t}(r.a.Component),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={moves:0},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.restartAction,n=e.continueAction,a=(e.countMoves,e.playerWin),i=e.playerLose,c=e.winner,l=c?r.a.createElement(v,{winner:c,continueAction:n}):null;return r.a.createElement("div",{className:"col-lg-4  col-md-12"},l,r.a.createElement(m,{restartAction:t}),r.a.createElement("div",{className:"info__stats"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Moves"),r.a.createElement("div",{className:"info__content"},this.props.moves))),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Score"),r.a.createElement("div",{className:"info__content"},a," : ",i)))),r.a.createElement("div",{className:"info info--rules"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Rules"),r.a.createElement("div",{className:"info__content"},r.a.createElement("div",null,"1. You have field 15x15"),r.a.createElement("div",null,"2. You need to collect 5 crosses in a row (including vertical and diagonal axes)"),r.a.createElement("div",null,"3. AI will disturb you and seek to collect their 5 crosses"),r.a.createElement("div",null,"4. So go and win!")))))}}]),t}(r.a.Component),y=n(8),w=function(e){return"emptyCell"!==e.type},E=function(e){return"border"===e.type},g=function(e){return"emptyCell"===e.type},b=function(e,t){return e.type===t.type&&!g(e)&&!g(t)},N=function(e,t){return!(e.type===t.type||g(e)||g(t)||E(t)||E(e))},S=function(){function e(t){var n=this;Object(l.a)(this,e),this.field=[],this.fieldSize=0,this.winner=null,this.winSequence=[],this.createGameField=function(){var e=n.field,t=n.fieldSize;n.winner=null,n.winSequence=[];for(var a=0;a<t+2;a++){e[a]=[];for(var r=0;r<t+2;r++)e[a].push(new j(a,r))}for(var i=0;i<t+2;i++)e[0][i]=new O,e[i][0]=new O,e[t+1][i]=new O,e[i][t+1]=new O;return e},this.playerMove=function(e,t){var a=n.field;if(w(a[e+1][t+1]))return null;a[e+1][t+1]=new M("player",t+1,e+1);for(var r=0;r<5;r++)n.calculateNextMove();return n.pcMove(),n.testWin(),{field:a,winner:n.winner,winSequence:n.winSequence}},this.calculateNextMove=function(){for(var e=n.field,t=n.fieldSize,a=1;a<t+1;a++)for(var r=1;r<t+1;r++){var i=e[a][r];w(i)&&n.searchPotentialIntersections(i)}},this.searchPotentialIntersections=function(e){n.getArrayNearCells(e).forEach(function(t,a){w(t)&&((b(e,t)||E(t))&&n.recalculationPotentialIdenticalCells(e,t,a),N(e,t)&&e.stepPotential[a]<=-10&&n.recalculationPotentialOppositeTypeCells(e,t,a))})},this.recalculationPotentialOppositeTypeCells=function(e,t,n){e.stepPotential[n]=-100,e.stepPotential[[4,5,6,7,0,1,2,3][n]]=-1},this.recalculationPotentialIdenticalCells=function(e,t,n){var a=[4,5,6,7,0,1,2,3];e.stepPotential[n];t.stepPotential[n]+=e.stepPotential[n],e.stepPotential[a[n]]+=t.stepPotential[a[n]],e.stepPotential[n]=0,t.stepPotential[a[n]]=0},this.getArrayNearCells=function(e){var t=e.y,a=e.x,r=n.field;return[r[t-1][a],r[t-1][a+1],r[t][a+1],r[t+1][a+1],r[t+1][a],r[t+1][a-1],r[t][a-1],r[t-1][a-1]]},this.pcMove=function(){var e=n.field,t=n.calculateCellPotential("player"),a=n.calculateCellPotential("pc");t.potential-1<a.potential&&a.potential>=1&&(t=a),e[t.coords.y][t.coords.x]=new M("pc",t.coords.x,t.coords.y)},this.calculateCellPotential=function(e){for(var t=n.field,a=n.fieldSize,r=[],i=0;i<a+2;i++){r[i]=[];for(var c=0;c<a+2;c++)r[i].push(0)}for(var l=1;l<a+1;l++)for(var o=function(a){var i=t[l][a];w(i)&&i.type===e&&n.getArrayNearCells(i).forEach(function(e,t){if(g(e)){var a=[4,5,6,7,0,1,2,3],c=n.getNearCell(e,t),l=i.stepPotential[t],o=0;w(c)&&!E(c)&&b(i,c)&&(o=c.stepPotential[a[t]]);var s=n.getArrayNearCells(e),u=0;s.forEach(function(t,n){w(e)&&!E(t)&&b(i,t)&&t.stepPotential[a[n]]>=2&&u++});var f=u>=2?3:i.stepPotential[t];r[e.y][e.x]=Math.max(r[e.y][e.x],l+o,f)}})},s=1;s<a+1;s++)o(s);return n.findMax(r)},this.findMax=function(e){var t=0,n={},a=0;return e.forEach(function(e,r){return e.forEach(function(e,i){e>t&&(n={y:r,x:i},a=t=e)})}),{coords:n,potential:a}},this.oneLineMatch=function(e,t,a,r){if(5===a)return r;var i=n.getNearCell(e,t);return b(e,i)?n.oneLineMatch(i,t,a+1,[].concat(Object(y.a)(r),[i])):null},this.fieldRender=function(){var e=n.state,t=e.winSequence,a=e.readyField,i=(n.field,n.fieldSize);if(!a)return[];var c=a.slice();t.forEach(function(e){c[e.y][e.x].win=!0});for(var l=[],o=1;o<i+1;o++){l[o-1]=[];for(var s=1;s<i+1;s++){var u=c[o][s],f=u.win?"mark-win":null;w(u)?"player"===u.type?l[o-1].push(r.a.createElement("i",{className:"fa fa-times ".concat(f)})):l[o-1].push(r.a.createElement("i",{className:"fa fa-circle-o ".concat(f)})):l[o-1].push(" ")}}return l},this.field=[],this.fieldSize=t}return Object(o.a)(e,[{key:"getNearCell",value:function(e,t){var n=e.x,a=e.y,r=this.field;switch(t){case 0:return r[a-1][n];case 1:return r[a-1][n+1];case 2:return r[a][n+1];case 3:return r[a+1][n+1];case 4:return r[a+1][n];case 5:return r[a+1][n-1];case 6:return r[a][n-1];case 7:return r[a-1][n-1]}}},{key:"testWin",value:function(){for(var e=this.field,t=this.fieldSize,n=1;n<t+1;n++)for(var a=1;a<t+1;a++)this.findCrossesNeighbour(e[n][a])}},{key:"findCrossesNeighbour",value:function(e){var t=this;this.getArrayNearCells(e).forEach(function(n,a){if(b(e,n)){var r=t.oneLineMatch(n,a,2,[e,n]);r&&(t.winner=r[0].type,t.winSequence=r)}})}}]),e}(),M=function e(t,n,a){Object(l.a)(this,e),this.stepPotential=[1,1,1,1,1,1,1,1],this.type=null,this.x=null,this.y=null,this.win=!1,this.type=t,this.x=n,this.y=a},O=function e(){Object(l.a)(this,e),this.type="border",this.stepPotential=[-1,-1,-1,-1,-1,-1,-1,-1]},j=function e(t,n){Object(l.a)(this,e),this.type="emptyCell",this.x=null,this.y=null,this.y=t,this.x=n},C=(n(17),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).generateKey=function(){return Math.floor(1e6*Math.random())},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.field;if(t===[])return null;var n=t.map(function(t,n){return r.a.createElement("tr",{className:"game-field_row",key:e.generateKey()},t.map(function(t,a){return r.a.createElement(_,{cellData:t,playerMove:e.props.playerMove,coords:{rowIndex:n,cellIndex:a},key:e.generateKey()})}))});return r.a.createElement("div",{className:" col-lg-7  col-md-12"},r.a.createElement("table",{className:"game-field"},r.a.createElement("tbody",null,n)))}}]),t}(r.a.Component)),_=function(e){var t=e.cellData,n=e.playerMove,a=e.coords;return r.a.createElement("td",{className:"game-field__cell",onClick:function(){return n(a)}},t)},x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={field:null,fieldSize:12,winner:null,winSequence:[],gameEnd:!1},n.gameLogic=new S(n.state.fieldSize),n.componentDidMount=function(){n.setState({field:n.gameLogic.createGameField()})},n.gameRestart=function(){n.gameLogic=new S(n.state.fieldSize),n.setState({field:n.gameLogic.createGameField(),fieldSize:12,winner:null,winSequence:[],gameEnd:!1}),n.props.restartEnd()},n.playerMove=function(e){var t=e.rowIndex,a=e.cellIndex;if(!n.state.gameEnd){var r=n.gameLogic.playerMove(t,a);r&&(n.setState({field:r.field}),r.winner&&(n.setState({winner:r.winner,winSequence:r.winSequence,gameEnd:!0}),n.props.setWinner(r.winner)),n.props.changeCountMoves())}},n.fieldRender=function(){var e=n.state,t=e.fieldSize,a=e.winSequence,i=e.field;if(!i)return[];var c=i.slice();a.forEach(function(e){c[e.y][e.x].win=!0});for(var l=[],o=1;o<t+1;o++){l[o-1]=[];for(var s=1;s<t+1;s++){var u=c[o][s],f=u.win?"mark-win":null;w(u)?"player"===u.type?l[o-1].push(r.a.createElement("i",{className:"fa fa-times ".concat(f)})):l[o-1].push(r.a.createElement("i",{className:"fa fa-circle-o ".concat(f)})):l[o-1].push(" ")}}return l},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){!1===e.restart&&!0===this.props.restart&&this.gameRestart()}},{key:"render",value:function(){return r.a.createElement(C,{field:this.fieldRender(),playerMove:this.playerMove})}}]),t}(r.a.Component),P=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countMoves:0,playerWin:0,playerLose:0,winner:null,restart:!1},n.changeCountMoves=function(){n.setState(function(e){return{countMoves:e.countMoves+1}})},n.continueAction=function(){n.setState({countMoves:0,restart:!0,winner:null})},n.restartAction=function(){n.setState({countMoves:0,playerWin:0,playerLose:0,restart:!0})},n.restartEnd=function(){n.setState({restart:!1})},n.setWinner=function(e){"player"===e?n.setState(function(t){return{winner:e,playerWin:t.playerWin+1}}):n.setState(function(t){return{winner:e,playerLose:t.playerLose+1}})},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.countMoves,n=e.playerWin,a=e.playerLose,i=e.winner,c=e.restart,l=r.a.createElement(x,{changeCountMoves:this.changeCountMoves,setWinner:this.setWinner,restart:c,restartEnd:this.restartEnd}),o=r.a.createElement(h,{moves:t,playerWin:n,playerLose:a,winner:i,restartAction:this.restartAction,continueAction:this.continueAction});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("h1",{className:"title col-lg-1"},"TicTacToy")),r.a.createElement("div",{className:"row justify-content-center"},l,o))}}]),t}(r.a.Component));c.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cf6ef6ce.chunk.js.map