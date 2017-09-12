
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML)+n;

  }
}

function deepestChild() {

  var grandnode = [];
  grandnode = document.getElementById('grand-node').querySelectorAll('div')
  //console.log(grandnode)
  //var child_nodes = grandnode.childNodes;
  let next = []
  //debugger;

  //while (grandnode) {
    //debugger;
    //console.log(grandnode)
    for (let i = 0; i<=grandnode.length; i++) {
      debugger

      //console.log(grandnode[i])
      console.log(i)

      if (i === grandnode.length) {
        console.log('i get here')
        return grandnode[i-1].innerHTML;
      }
    //  next.push(grandnode[i])
    }

    }
