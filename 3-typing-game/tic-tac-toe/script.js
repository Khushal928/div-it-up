let startbutton = document.getElementById('start button');
startbutton.addEventListener(
    'click', () => {
        let counter = 0;
        var cell1 = {
            id: 'A011',
            cellid:'A11',
            value: null,
        }
        var cell2 = {
            id: 'A012',
            cellid:'A12',
            value: null,
        }
        var cell3 = {
            id: 'A013',
            cellid:'A13',
            value: null,
        }
        var cell4 = {
            id: 'A021',
            cellid:'A21',
            value: null,
        }
        var cell5 = {
            id: 'A022',
            cellid:'A22',   
            value: null,
        }
        var cell6 = {
            id: 'A023',
            cellid:'A23',
            value: null,
        }
        var cell7 = {
            id: 'A031',
            cellid:'A31',
            value: null,
        }
        var cell8 = {
            id: 'A032',
            cellid:'A32',
            value: null,
        }
        var cell9 = {
            id: 'A033',
            cellid:'A33',
            value: null,
        }
        let cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
        for (let i=0; i<9; i++){
            cells[i].c=document.getElementById(cells[i].id);
            cells[i].c1=document.getElementById(cells[i].cellid);
        }

        
        for (let i=0; i<9; i++){
            cells[i].c.addEventListener('click', () => {
                if (counter % 2 == 0) {
                    cells[i].value = 'X';
                    console.log(counter)
                    addX(cells[i].c);
                    check1();
                } else {
                    cells[i].value = 'O';
                    console.log(counter)
                    addO(cells[i].c);
                    check1();
                }
                counter++;
                
            }
            );
        }

        function addX(input){
            for(let i = 0; i < 9; i++){
                if (input == cells[i].c){
                    cells[i].c1.innerHTML = 'X';
                }
            }
        }

        function addO(input){
            for(let i = 0; i < 9; i++){
                if (input == cells[i].c){
                    cells[i].c1.innerHTML = 'O';
                }
            }
        }


        function check1(){
            win = [[cell1,cell2,cell3],[cell4,cell5,cell6],[cell7,cell8,cell9],[cell1,cell4,cell7],[cell2,cell5,cell8],[cell3,cell6,cell9],[cell1,cell5,cell9],[cell3,cell5,cell7]];
            for (let i=0; i<8; i++){
                if (win[i][0].value == 'X' && win[i][1].value == 'X' && win[i][2].value == 'X'){
                    alert('X wins');
                }
                if (win[i][0].value == 'O' && win[i][1].value == 'O' && win[i][2].value == 'O'){
                    alert('O wins');
                }
            }
        }     
    });































let listofkeys = ['A011','A012','A013','A021','A022','A023','A031','A032','A033' ];