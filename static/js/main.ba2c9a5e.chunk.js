(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(7),i=r.n(a),c=(r(13),r(14),r(2)),u=r(3),o=r(5),l=r(4),h=r(0);var j=function(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},d=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(h.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.a.Component),b=r(8);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(b.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}var x=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(u.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[this.state.stepNumber].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares),a=r.map((function(e,r){var s=r?"Go to move No."+r:"Go to game start";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(d,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{children:e}),Object(h.jsx)("ol",{children:a})]})]})}}]),r}(n.a.Component);var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.ba2c9a5e.chunk.js.map