(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),o=n(1),c=n(2),s=n(4),u=n(3),f=n(5),p=(n(15),n(8)),d=(n(16),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).generateKey=function(){return Math.floor(1e6*Math.random())},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.field;if(null===t)return null;var n=t.map(function(t,n){return r.a.createElement("tr",{className:"game-field_row table-dark",key:e.generateKey()},t.map(function(t,a){return r.a.createElement(y,{cellData:t,playerMove:e.props.playerMove,coords:{rowIndex:n,cellIndex:a},key:e.generateKey()})}))});return r.a.createElement(r.a.Fragment,null,n)}}]),t}(r.a.Component)),y=function(e){var t=e.cellData,n=e.playerMove,a=e.coords;return r.a.createElement("td",{className:"game-field__cell",onClick:function(){return n(a)}},t)},v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={field:null,fieldRender:[],fieldSize:12},n.createGameField=function(){for(var e=n.state.fieldSize,t=[],a=0;a<e+2;a++){t[a]=[];for(var r=0;r<e+2;r++)t[a].push(new b(a,r))}for(var l=0;l<e+2;l++)t[0][l]=new m,t[l][0]=new m,t[e+1][l]=new m,t[l][e+1]=new m;return n.setState({field:t}),n.fieldRender(),t},n.playerMove=function(e){var t=e.rowIndex,a=e.cellIndex,r=Object(p.a)(n.state.field);r[t+1][a+1]=new h("player",a+1,t+1),n.setState({field:r});for(var l=0;l<4;l++)n.calculateNextMove();n.pcMove()},n.calculateNextMove=function(){for(var e=n.state,t=e.fieldSize,a=e.field,r=1;r<t+1;r++)for(var l=1;l<t+1;l++){var i=a[r][l];n.isItStep(i)&&n.searchPotencialIntersections(i)}},n.isItStep=function(e){return"emptyCell"!==e.type},n.isItBorder=function(e){return"border"===e.type},n.searchPotencialIntersections=function(e){n.state.field;n.getArrayNearCells(e).forEach(function(t,a){n.isItStep(t)&&n.isHaveSameType(e,t)&&n.recalculationPotencialRelatedCells(e,t,a)})},n.recalculationPotencialRelatedCells=function(e,t,n){var a=[4,5,6,7,0,1,2,3];e.stepPotential[n];t.stepPotential[n]+=e.stepPotential[n],e.stepPotential[a[n]]+=t.stepPotential[a[n]],e.stepPotential[n]=0,t.stepPotential[a[n]]=0},n.isHaveSameType=function(e,t){return e.type===t.type||"border"===t.type},n.getArrayNearCells=function(e){var t=n.state.field;return[t[e.y-1][e.x],t[e.y-1][e.x+1],t[e.y][e.x+1],t[e.y+1][e.x+1],t[e.y+1][e.x],t[e.y+1][e.x-1],t[e.y][e.x-1],t[e.y-1][e.x-1]]},n.pcMove=function(){var e=n.state.field,t=n.calculateCellPotential("player"),a=e.slice();e[t.y][t.x]=new h("pc",t.x,t.y),console.log(a),n.setState({})},n.calculateCellPotential=function(e){for(var t=n.state,a=t.fieldSize,r=t.field,l=[],i=0;i<a+2;i++){l[i]=[];for(var o=0;o<a+2;o++)l[i].push(0)}for(var c=1;c<a+1;c++)for(var s=function(t){var a=r[c][t];n.isItStep(a)&&a.type===e&&n.getArrayNearCells(a).forEach(function(e,t){if(!n.isItStep(e)&&!n.isItBorder(e)){var r=n.getArrayNearCells(e)[t],i=a.stepPotential[t],o=0;n.isItStep(r)&&!n.isItBorder(r)&&(o=r.stepPotential[[4,5,6,7,0,1,2,3][t]]),l[e.y][e.x]=Math.max(l[e.y][e.x],i+o)}})},u=1;u<a+1;u++)s(u);return n.findMax(l)},n.findMax=function(e){n.state.fieldSize;var t=0,a={};return e.forEach(function(e,n){return e.forEach(function(e,r){e>t&&(t=e,a={y:n,x:r})})}),console.log(t,a),a},n.fieldRender=function(){var e=n.state,t=e.field,a=(e.fieldRender,e.fieldSize);if(!t)return[];for(var l=[],i=1;i<a+1;i++){l[i-1]=[];for(var o=1;o<a+1;o++){var c=t[i][o];n.isItStep(c)?"player"===c.type?l[i-1].push(r.a.createElement("i",{className:"fa fa-times"})):l[i-1].push(r.a.createElement("i",{className:"fa fa-circle-o"})):l[i-1].push(" ")}}return l},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.createGameField()}},{key:"findSumPotintialNearCells",value:function(e){}},{key:"render",value:function(){return r.a.createElement(d,{field:this.fieldRender(),playerMove:this.playerMove})}}]),t}(r.a.Component),h=function e(t,n,a){Object(o.a)(this,e),this.stepPotential=[1,1,1,1,1,1,1,1],this.type=null,this.x=null,this.y=null,this.type=t,this.x=n,this.y=a},m=function e(){Object(o.a)(this,e),this.type="border",this.stepPotential=[-1,-1,-1,-1,-1,-1,-1,-1]},b=function e(t,n){Object(o.a)(this,e),this.type="emptyCell",this.x=null,this.y=null,this.y=t,this.x=n},x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"TicTacToy"),r.a.createElement("table",{className:"game-field table"},r.a.createElement("tbody",null,r.a.createElement(v,null))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(x,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.46f84e85.chunk.js.map