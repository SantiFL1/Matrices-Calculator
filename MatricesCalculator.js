const m11= document.getElementById('m11')
const m12= document.getElementById('m12')
const m21= document.getElementById('m21')
const m22= document.getElementById('m22')

const m1= document.getElementById('m1')
const m2= document.getElementById('m2')

const FullMatrices = document.getElementById('FullMatrices')
const FirstMatrixTable = document.getElementById('FirstMatrixTable')
const SecondMatrixTable = document.getElementById('SecondMatrixTable')
const Operation= document.getElementById('Operation')
const MatrixResult= document.getElementById('MatrixResult')


const Trigger = document.getElementById('Trigger')

const FirstFullMatrix = document.getElementById('FirstFullMatrix')
const SecondFuMatrix = document.getElementById('SecondFuMatrix')

const RunOperation = document.getElementById('RunOperation')

let Multipliables = true
let Addables = true
let Divisibles = true

let RowsM1 = []
let RowsM2 = []
let BoxesM1 = []
let BoxesM2 = []

let ColumnsM1 = []
let ColumnsM2 = []

Trigger.addEventListener('click',(c)=>{
    
    if (m11.valueAsNumber>9 || m11.value=='' || 
        m12.valueAsNumber>9 || m12.value=='' ||
        m21.valueAsNumber>9 || m21.value=='' ||
        m22.valueAsNumber>9 || m22.value=='' )
        {alert('Matrix dimensions must be 1-9')}
        else{

    RowsM1 = []
            RowsM2 = []
            BoxesM1 = []
            BoxesM2 = []
    MatrixResult.innerHTML=''
    FirstMatrixTable.innerHTML=''
    SecondMatrixTable.innerHTML=''
    
         {
        const NRows1 = m11.valueAsNumber
        const NColumns1 = m12.valueAsNumber

        const NRows2 = m21.valueAsNumber
        const NColumns2 = m22.valueAsNumber

        //Operations conditions
        
        if (NRows1!==NRows2 || NColumns1!==NColumns2){
            Addables=false
    }
        else {
            Addables=true
    }


        if (NColumns1!==NRows2){
            Multipliables=false
        }
        else {
            Multipliables=true
        }

        if (NRows2!==1 || NColumns2!==1){
            Divisibles=false
        }
        else {
            Divisibles=true
        }

        //FIRST MATRIX
        
        for (let i=0;i<NRows1;i++){
            const x = document.createElement('tr')
            x.setAttribute('id',`Row${i}`)
            FirstMatrixTable.append(x)
            RowsM1.push(x)
            
            
            
            for (let j=0;j<NColumns1;j++){
                const y = document.createElement('input')
                y.setAttribute('type','number')
                y.setAttribute('id',`ID${j}`)
                y.setAttribute('name',`${j}`)
                x.prepend(y)
                BoxesM1.push(y)

            }    
        }
        console.log(FirstMatrixTable)
        
        //SECOND MATRIX

        for (let i=0;i<NRows2;i++){
            const x = document.createElement('tr')
            x.setAttribute('id',`Row${i}`)
            SecondMatrixTable.append(x)
            RowsM2.push(x)
            
            for (let j=0;j<NColumns2;j++){
                const y = document.createElement('input')
                y.setAttribute('type','number')
                y.setAttribute('id',`${j}`)
                y.setAttribute('class',`${j}`)
                x.prepend(y)
                BoxesM2.push(y)
            }    
        }
        console.log(SecondMatrixTable)
        FullMatrices.setAttribute('style','display:flex;')
        RunOperation.setAttribute('style','display:flex;')

        //Operations




        RunOperation.addEventListener('click',(c)=>{

            
            for (let i = 0; i<BoxesM1.length ; i++){
                if (BoxesM1[i].value===''){BoxesM1[i].value='0'} else {}}
            for (let i = 0; i<BoxesM2.length ; i++){
                if (BoxesM2[i].value===''){BoxesM2[i].value='0'}}

            const Rows1 = FirstMatrixTable.children
            const Rows2 = SecondMatrixTable.children

            let BoxesResult = []
            let NumbersResult = []

            MatrixResult.innerHTML=''

            switch (Operation.value){

                    //Addition
                
                case '+':{
                    switch (Addables){
                        case false: alert("Can't add matrices with different dimensions"); break;
                        case true: {
                            //Additions

                            for (let i = 0; i<BoxesM1.length ; i++){
                                if (BoxesM1[i].value===''){BoxesM1[i].value='0'} else {}
                                if (BoxesM2[i].value===''){BoxesM2[i].value='0'}
                                
                                let BoxesAddition = parseFloat(BoxesM1[i].value) + parseFloat(BoxesM2[i].value)
                                NumbersResult.push(BoxesAddition)}
                                
                            //Creating result matrix dimensions
                            for (let i = 0; i<RowsM1.length; i++){
                                const RowResult = document.createElement('tr')
                                RowResult.setAttribute('id',`FR${i}`)
                                MatrixResult.appendChild(RowResult)
 
                                for (let j=0;j<RowsM1[0].children.length;j++){
                                    const y = document.createElement('th')
                                    RowResult.prepend(y)    
                                    BoxesResult.push(y)}
                            }

                            for (Box of BoxesResult){
                                Box.textContent=NumbersResult[BoxesResult.indexOf(Box)]
                               
                            } 
                            break;}
                    }
                    
                break;}

                //Substractions
                
                case '-':{

                    switch (Addables){
                        case false: alert("Can't substract matrices with different dimensions"); break;
                        case true: {
                            //Substractionss
                            for (let i = 0; j<BoxesM1.length ; i++){
                                if (BoxesM1[i].value===''){BoxesM1[i].value='0'} else {}
                                if (BoxesM2[i].value===''){BoxesM2[i].value='0'}
                                
                                let BoxesAddition = parseFloat(BoxesM1[i].value) - parseFloat(BoxesM2[i].value)
                                NumbersResult.push(BoxesAddition)}
                                
                            //Create result matrix dimensions
                            for (let i = 0; i<RowsM1.length; i++){
                                const RowResult = document.createElement('tr')
                                RowResult.setAttribute('id',`FR${i}`)
                                MatrixResult.appendChild(RowResult)
 
                                for (let j=0;j<RowsM2[0].children.length;j++){
                                    const y = document.createElement('th')
                                    RowResult.prepend(y)    
                                    BoxesResult.push(y)}
                            }

                            for (Box of BoxesResult){
                                Box.textContent=NumbersResult[BoxesResult.indexOf(Box)]
                          } 
                            break;}
                    }

                    break;
                }

                //MULTIPLICATION

                case 'X':{
                    
                    switch (Multipliables){
                        
                        case false:alert("Can't multiply if the number of columns of the first matrix and the number of rows of the second matrix aren't the same"); break;
                        case true: {
                            
                            let NumberOfColumns = RowsM2[0].children.length
                            
                                for (let i = 0 ; i<NumberOfColumns ; i++){
                                    let Column = document.getElementsByClassName(`${i}`)
                                    ColumnsM2.push(Column)
                            }
                           
                            
                            // CREATE RESULT MATRIX
                             for (let i=0;i<RowsM1.length;i++){
                                 const RowResult = document.createElement('tr')
                                 RowResult.setAttribute('id',`FR${i}`)
                                 MatrixResult.appendChild(RowResult)
                                 for (let j = 0 ; j<RowsM2[0].children.length; j++){
                                     const y = document.createElement('th')
                                     y.setAttribute('id',`${i}${j}`)
                                     y.textContent='japi'
                                     RowResult.prepend(y)    
                                     BoxesResult.push(y)

                        }
                        for (let i=0 ; i<RowsM1.length ; i++){
                            
                    }}
                    
                            for (let i=0 ; i<BoxesResult.length ; i++){
                                let ResultBox = 0
                                let RowM = RowsM1[BoxesResult[i].id[0]].children
                                let ColumnM = ColumnsM2[BoxesResult[i].id[1]]
                                
                                for (let i=0 ; i<ColumnsM2[0].length ; i++){
                                    ResultBox +=parseFloat(RowM[i].value)*parseFloat(ColumnM[i].value)
                                }
                         
                                BoxesResult[i].textContent=ResultBox
                            }
                }
                    }
                    break;
                
                }
                case '/':{
                    switch (Divisibles){
                        case false: alert("You just can divide a matrix by a number; the second matrix dimensions must be 1x1");break 
                        case true:{
                            console.log(NColumns1)
                            // CREATE RESULT MATRIX
                            for (let i = 0; i<RowsM1.length; i++){
                                const RowResult = document.createElement('tr')
                                RowResult.setAttribute('id',`FR${i}`)
                                MatrixResult.appendChild(RowResult)
 
                                for (let j=0;j<RowsM1[0].children.length;j++){
                                    const y = document.createElement('th')
                                    RowResult.prepend(y)    
                                    BoxesResult.push(y)}
                            }
                            
                            //Operations
                            console.log(BoxesResult)
                            for (x in BoxesM1){
                                BoxesResult[x].textContent = parseFloat(BoxesM1[x].value)/parseFloat(BoxesM2[0].value)
                            }

                        }
                    }

                }
            }        
        })

}}})