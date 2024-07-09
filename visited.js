if (localStorage.visited === undefined){
    localStorage.visited = 0
}

localStorage.visited = +localStorage.visited + 1
alert(+localStorage.visited)