let TheArray = [
    {
        semesterGPA : 3.4,
        slices : [
            {
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },
        ]
    },{
        semesterGPA : 4,
        slices : [
            {
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },
        ]
    },{
        semesterGPA : 2.4,
        slices : [
            {
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },{
                grade: 'B+',
                credit: 3,
                isAgain: null,
            },
        ]
    },{
        semesterGPA : 0,
        slices : [
            {
                grade: '##',
                credit: 0,
                isAgain: null,
            },{
                grade: '##',
                credit: 0,
                isAgain: null,
            },{
                grade: '##',
                credit: 0,
                isAgain: null,
            }
        ]
    },
];

const grades={
    'A':4,
    'A-':3.7,
    'B+':3.3,
    'B':3,
    'B-':2.7,
    'C+':2.3,
    'C':2,
    'C-':1.7,
    'D+':1.3,
    'D':1,
    'D-':0.7,
    'F':0,
}

let finalGPA = document.getElementById('finalGPA');
let pastHours = document.getElementById('pastHours');
let pastGPA = document.getElementById('pastGPA');
let blockes = document.querySelector('.blockes');
let buttons = document.querySelectorAll('button');

addEventListener('DOMContentLoaded',()=>{
    update();
});


function buttonListener(){
    buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            update();
        });
    });
};

console.log(TheArray);

function addSemesterBlock(){
    let newObj = {
        semesterGPA : 0,
        slices : [
            {
                grade: '##',
                credit: 0,
                isAgain: null,
            },{
                grade: '##',
                credit: 0,
                isAgain: null,
            },{
                grade: '##',
                credit: 0,
                isAgain: null,
            }
        ]
    };
    TheArray.push(newObj);
    console.log(TheArray);
};

function addSlice(blockNum){
    TheArray[blockNum].slices.push(
        {
            grade: '##',
            credit: 0,
            isAgain: null,
        }
    );
    console.log(TheArray);
};

function update(){
    let theHTML='';
    for (let [semesterIndex, element] of TheArray.entries()){
        let sliceesHTML='';
        let semesterGPA=0;



















        for (let [sliceIndex, slice] of Object.entries(element.slices)){
            // console.log(sliceIndex);
            sliceesHTML=sliceesHTML+`
            <div class="slice">
                <div class="corceNum">#${(Number(sliceIndex)+1)}</div>
                <p class="prevew" style="left: 26px;">
                ${TheArray[Number(semesterIndex)].slices[Number(sliceIndex)].grade}
                </p>
                <input type="checkbox" name="grade" id="checkboxGrade">
                
                <div class="gradePOPup POPup">
                    <button onclick="clickingGrades('A',${Number(semesterIndex)},${Number(sliceIndex)})">A</button>
                    <button onclick="clickingGrades('A-',${Number(semesterIndex)},${Number(sliceIndex)})">A-</button>
                    <button onclick="clickingGrades('B+',${Number(semesterIndex)},${Number(sliceIndex)})">B+</button>
                    <button onclick="clickingGrades('B',${Number(semesterIndex)},${Number(sliceIndex)})">B</button>
                    <button onclick="clickingGrades('B-',${Number(semesterIndex)},${Number(sliceIndex)})">B-</button>
                    <button onclick="clickingGrades('C+',${Number(semesterIndex)},${Number(sliceIndex)})">C+</button>
                    <button onclick="clickingGrades('C',${Number(semesterIndex)},${Number(sliceIndex)})">C</button>
                    <button onclick="clickingGrades('C-',${Number(semesterIndex)},${Number(sliceIndex)})">C-</button>
                    <button onclick="clickingGrades('D+',${Number(semesterIndex)},${Number(sliceIndex)})">D+</button>
                    <button onclick="clickingGrades('D',${Number(semesterIndex)},${Number(sliceIndex)})">D</button>
                    <button onclick="clickingGrades('D-',${Number(semesterIndex)},${Number(sliceIndex)})">D-</button>
                    <button onclick="clickingGrades('F',${Number(semesterIndex)},${Number(sliceIndex)})">F</button>
                </div>
                <!-- جبت كام -->

                <p class="prevew" style="left:52px;">
                ${TheArray[Number(semesterIndex)].slices[Number(sliceIndex)].credit}
                </p>
                <input type="checkbox" name="credit" id="checkboxCredit"> 
                <div class="creditPOPup POPup">
                    <button onclick="clickingCredit(1,${Number(semesterIndex)},${Number(sliceIndex)})">1</button>
                    <button onclick="clickingCredit(2,${Number(semesterIndex)},${Number(sliceIndex)})">2</button>
                    <button onclick="clickingCredit(3,${Number(semesterIndex)},${Number(sliceIndex)})">3</button>
                    <button onclick="clickingCredit(4,${Number(semesterIndex)},${Number(sliceIndex)})">4</button>
                    <button onclick="clickingCredit(5,${Number(semesterIndex)},${Number(sliceIndex)})">5</button>
                    <button onclick="clickingCredit(6,${Number(semesterIndex)},${Number(sliceIndex)})">6</button>
                </div>
                <!-- عدد الساعات -->

                <p class="prevew" style="left: 70px;">
                ${TheArray[Number(semesterIndex)].slices[Number(sliceIndex)].isAgain}
                </p>
                <input type="checkbox" name="isAgain" id="checkboxIsAgain">
                <div class="isAgainPOPup POPup">
                    <button onclick="clickingIsAgain('NO',${Number(semesterIndex)},${Number(sliceIndex)})">NO</button>
                    <button onclick="clickingIsAgain('A',${Number(semesterIndex)},${Number(sliceIndex)})">A</button>
                    <button onclick="clickingIsAgain('A-',${Number(semesterIndex)},${Number(sliceIndex)})">A-</button>
                    <button onclick="clickingIsAgain('B+',${Number(semesterIndex)},${Number(sliceIndex)})">B+</button>
                    <button onclick="clickingIsAgain('B',${Number(semesterIndex)},${Number(sliceIndex)})">B</button>
                    <button onclick="clickingIsAgain('B-',${Number(semesterIndex)},${Number(sliceIndex)})">B-</button>
                    <button onclick="clickingIsAgain('C+',${Number(semesterIndex)},${Number(sliceIndex)})">C+</button>
                    <button onclick="clickingIsAgain('C',${Number(semesterIndex)},${Number(sliceIndex)})">C</button>
                    <button onclick="clickingIsAgain('C-',${Number(semesterIndex)},${Number(sliceIndex)})">C-</button>
                    <button onclick="clickingIsAgain('D+',${Number(semesterIndex)},${Number(sliceIndex)})">D+</button>
                    <button onclick="clickingIsAgain('D',${Number(semesterIndex)},${Number(sliceIndex)})">D</button>
                    <button onclick="clickingIsAgain('D-',${Number(semesterIndex)},${Number(sliceIndex)})">D-</button>
                    <button onclick="clickingIsAgain('F',${Number(semesterIndex)},${Number(sliceIndex)})">F</button>
                </div>
                <!-- عايد؟؟ -->
                <button onclick="DeletSlice(${Number(semesterIndex)},${Number(sliceIndex)})">X</button>
            </div>
            `
        ;}







        theHTML=theHTML+(`
            <div class="semesterBlock">
                <div class="semesterResult">
                    <span id="semesterGPA">${element.semesterGPA}</span>
                    <button onclick="DeletBlock(${Number(semesterIndex)})">X</button>
                </div>
                <div class="redTutorialText"> dasds sdasdas sadasd adsadad</div>

                ${sliceesHTML}
                
                </div>
                <button id="addSlice" onclick="addSlice(${semesterIndex})">add</button>
            </div>
        `);
    }
    blockes.innerHTML=theHTML;
    buttonListener();
};

function clickingGrades(choice,block,slice){
    console.log(TheArray[block].slices[slice].grade);
    TheArray[block].slices[slice].grade=choice;
    console.log(TheArray);
    console.log(TheArray[block].slices[slice].grade);
};

function clickingCredit(choice,block,slice){
    console.log(TheArray[block].slices[slice].credit);
    TheArray[block].slices[slice].credit=choice;
    console.log(TheArray);
    console.log(TheArray[block].slices[slice].credit);
};

function clickingIsAgain(choice,block,slice){
    console.log(TheArray[block].slices[slice].isAgain);
    TheArray[block].slices[slice].isAgain=choice;
    console.log(TheArray);
    console.log(TheArray[block].slices[slice].isAgain);
};

function DeletSlice(block,slice){
    TheArray[block].slices.splice(slice,1);
    // delete TheArray[block].slices[slice];
};
function DeletBlock(block){
    TheArray.splice(block,1);
    // delete TheArray[block].slices[slice];
};

function calcNum(grade){
    // if(grade=='A'){
    //     return 4;
    // }else if(grade=='A-'){
    //     return 3.7;
    // }else if(grade=='B+'){
    //     return 3.3;
    // }else if(grade=='B'){
    //     return 3;
    // }else if(grade=='B-'){
    //     return 2.7;
    // }else if(grade=='C+'){
    //     return 2.3;
    // }else if(grade=='C'){
    //     return 2;
    // }else if(grade=='C-'){
    //     return 1.7;
    // }else if(grade=='D+'){
    //     return 1.3;
    // }else if(grade=='D'){
    //     return 1;
    // }else if(grade=='D-'){
    //     return 0.7;
    // }else if(grade=='F'){
    //     return 0;
    // };

    return(grades[grade]);
}