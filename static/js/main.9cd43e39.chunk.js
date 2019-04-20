(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(1),c=a(2),s=a(4),u=a(3),f=a(5),m=(a(15),a(8)),d=(a(16),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).generateKey=function(){return Math.floor(1e6*Math.random())},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.field;if(null===t)return null;var a=t.map(function(t,a){return r.a.createElement("tr",{className:"game-field_row",key:e.generateKey()},t.map(function(t,n){return r.a.createElement(p,{cellData:t,playerMove:e.props.playerMove,coords:{rowIndex:a,cellIndex:n},key:e.generateKey()})}))});return r.a.createElement("table",{className:"game-field col-lg-9  col-md-12"},r.a.createElement("tbody",null,a))}}]),t}(r.a.Component)),p=function(e){var t=e.cellData,a=e.playerMove,n=e.coords;return r.a.createElement("td",{className:"game-field__cell",onClick:function(){return a(n)}},t)},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={field:null,fieldRender:[],fieldSize:12,countMoves:0},a.createGameField=function(){for(var e=a.state.fieldSize,t=[],n=0;n<e+2;n++){t[n]=[];for(var r=0;r<e+2;r++)t[n].push(new b(n,r))}for(var i=0;i<e+2;i++)t[0][i]=new h,t[i][0]=new h,t[e+1][i]=new h,t[i][e+1]=new h;return a.setState({field:t}),a.fieldRender(),t},a.playerMove=function(e){var t=e.rowIndex,n=e.cellIndex,r=a.state.field;if(!a.isItStep(r[t+1][n+1])){var i=Object(m.a)(r);i[t+1][n+1]=new y("player",n+1,t+1),a.setState({field:i});for(var l=0;l<4;l++)a.calculateNextMove();a.props.changeCountMoves(),a.pcMove()}},a.calculateNextMove=function(){for(var e=a.state,t=e.fieldSize,n=e.field,r=1;r<t+1;r++)for(var i=1;i<t+1;i++){var l=n[r][i];a.isItStep(l)&&a.searchPotencialIntersections(l)}},a.isItStep=function(e){return"emptyCell"!==e.type},a.isItBorder=function(e){return"border"===e.type},a.searchPotencialIntersections=function(e){a.state.field;a.getArrayNearCells(e).forEach(function(t,n){a.isItStep(t)&&a.isHaveSameType(e,t)&&a.recalculationPotencialRelatedCells(e,t,n)})},a.recalculationPotencialRelatedCells=function(e,t,a){var n=[4,5,6,7,0,1,2,3];e.stepPotential[a];t.stepPotential[a]+=e.stepPotential[a],e.stepPotential[n[a]]+=t.stepPotential[n[a]],e.stepPotential[a]=0,t.stepPotential[n[a]]=0},a.isHaveSameType=function(e,t){return e.type===t.type||"border"===t.type},a.getArrayNearCells=function(e){var t=a.state.field;return[t[e.y-1][e.x],t[e.y-1][e.x+1],t[e.y][e.x+1],t[e.y+1][e.x+1],t[e.y+1][e.x],t[e.y+1][e.x-1],t[e.y][e.x-1],t[e.y-1][e.x-1]]},a.pcMove=function(){var e=a.state.field,t=a.calculateCellPotential("player"),n=e.slice();e[t.y][t.x]=new y("pc",t.x,t.y),console.log(n),a.setState({})},a.calculateCellPotential=function(e){for(var t=a.state,n=t.fieldSize,r=t.field,i=[],l=0;l<n+2;l++){i[l]=[];for(var o=0;o<n+2;o++)i[l].push(0)}for(var c=1;c<n+1;c++)for(var s=function(t){var n=r[c][t];a.isItStep(n)&&n.type===e&&a.getArrayNearCells(n).forEach(function(e,t){if(!a.isItStep(e)&&!a.isItBorder(e)){var r=a.getArrayNearCells(e)[t],l=n.stepPotential[t],o=0;a.isItStep(r)&&!a.isItBorder(r)&&(o=r.stepPotential[[4,5,6,7,0,1,2,3][t]]),i[e.y][e.x]=Math.max(i[e.y][e.x],l+o)}})},u=1;u<n+1;u++)s(u);return a.findMax(i)},a.findMax=function(e){a.state.fieldSize;var t=0,n={};return e.forEach(function(e,a){return e.forEach(function(e,r){e>t&&(t=e,n={y:a,x:r})})}),console.log(t,n),n},a.fieldRender=function(){var e=a.state,t=e.field,n=(e.fieldRender,e.fieldSize);if(!t)return[];for(var i=[],l=1;l<n+1;l++){i[l-1]=[];for(var o=1;o<n+1;o++){var c=t[l][o];a.isItStep(c)?"player"===c.type?i[l-1].push(r.a.createElement("i",{className:"fa fa-times"})):i[l-1].push(r.a.createElement("i",{className:"fa fa-circle-o"})):i[l-1].push(" ")}}return i},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.createGameField()}},{key:"findSumPotintialNearCells",value:function(e){}},{key:"render",value:function(){var e=this.state.countMoves;return r.a.createElement(d,{field:this.fieldRender(),playerMove:this.playerMove,moves:e})}}]),t}(r.a.Component),y=function e(t,a,n){Object(o.a)(this,e),this.stepPotential=[1,1,1,1,1,1,1,1],this.type=null,this.x=null,this.y=null,this.type=t,this.x=a,this.y=n},h=function e(){Object(o.a)(this,e),this.type="border",this.stepPotential=[-1,-1,-1,-1,-1,-1,-1,-1]},b=function e(t,a){Object(o.a)(this,e),this.type="emptyCell",this.x=null,this.y=null,this.y=t,this.x=a},E=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={moves:0,playerWin:0,playerLose:0},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.moves,e.playerWin),a=e.playerLose;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-lg-4  col-md-12"},r.a.createElement("button",{className:"info__button-restart"},"Restart ",r.a.createElement("i",{className:"fa fa-refresh"})),r.a.createElement("div",{className:"info__stats"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Moves"),r.a.createElement("div",{className:"info__content"},this.props.moves))),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Score"),r.a.createElement("div",{className:"info__content"},t," : ",a)))),r.a.createElement("div",{className:"info info--rules"},r.a.createElement("div",{className:"info__block"},r.a.createElement("div",{className:"info__title"},"Rules"),r.a.createElement("div",{className:"info__content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at commodi, delectus dolores maiores molestiae officia. Adipisci assumenda explicabo facere fugiat fugit labore necessitatibus omnis quaerat sed tenetur, velit!")))))}}]),t}(r.a.Component)),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={countMoves:0},a.changeCountMoves=function(){a.setState(function(e){return{countMoves:e.countMoves+1}})},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.countMoves;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("h1",{className:"title col-lg-1"},"TicTacToy")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(v,{changeCountMoves:this.changeCountMoves}),r.a.createElement(E,{moves:e})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.9cd43e39.chunk.js.map