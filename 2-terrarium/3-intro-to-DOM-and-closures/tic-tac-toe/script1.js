let startbutton = document.getElementById('start button');


startbutton.addEventListener(
    
    'click', () => {


        function point(){
            
            cells[t].c1.style.borderColor = 'black';
            cells[t].c1.style.borderWidth = '6px';
            
        }

        function removehighlight(){
            cells[t].c1.style.borderWidth = '0px';
        }




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


        t=0 // t is where pointer points to
        

        point();

        document.addEventListener('keydown', function(event) {
            if (counter % 2 == 0) {
               
                if (event.key == 'x') {
                    cells[t].value = 'X';
                    counter++;
                    addX(cells[t].c);
                    cells[t].value = 'X';
                    check1();
            }
            };
            if (counter % 2 == 1) {
               
                if (event.key == 'o') {
                    cells[t].value = 'O';
                    counter++;
                    addO(cells[t].c);
                    cells[t].value = 'O';
                    check1();
            }
            };
            if(event.key == 'ArrowDown'){
                if(t<6){
                    removehighlight();
                    t=t+3;
                    point();
                }
            };
            if(event.key == 'ArrowUp'){
                if(t>2){
                    removehighlight();
                    t=t-3;
                    point();
                }
            };
            if(event.key == 'ArrowLeft'){
                if(t!=0 && t!=3 && t!=6){
                    removehighlight();
                    t=t-1;
                    point();
                }
            };
            if(event.key == 'ArrowRight'){
                if(t!=2 && t!=5 && t!=8){
                    removehighlight();
                    t=t+1;
                    point();
                }
            };
            
                
            
          });

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
                    document.getElementById('message').innerHTML='X won!!';
                    alert('x');
                }
                else if (win[i][0].value == 'O' && win[i][1].value == 'O' && win[i][2].value == 'O'){
                    alert('O wins');
                    document.getElementById('message').innerHTML='O won!!';
                }
            }
            for(let i = 0; i < 9; i++){
                if(cells[i].value=='X' || cells[i].value=='O'){
                    
                }
                else{break;}
            }
        }
        
    
        }
    );