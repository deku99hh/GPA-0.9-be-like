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
        semesterGPA : 0,
        slices : [
            {
                grade: '',
                credit: 0,
                isAgain: null,
            },{
                grade: '',
                credit: 0,
                isAgain: null,
            },{
                grade: '',
                credit: 0,
                isAgain: null,
            }
        ]
    },
];

let finalGPA = document.getElementById('finalGPA');
let pastHoures = document.getElementById('pastHoures');
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
                grade: '',
                credit: 0,
                isAgain: null,
            },{
                grade: '',
                credit: 0,
                isAgain: null,
            },{
                grade: '',
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
            grade: '',
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
        for (let [sliceIndex, slice] of Object.entries(element.slices)){
            // console.log(sliceIndex);
            sliceesHTML=sliceesHTML+`
            <div class="slice">
                <div class="corceNum">#${(Number(sliceIndex)+1)}</div>
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
            </div>
            `
        ;}
        theHTML=theHTML+(`
            <div class="semesterBlock">
                <div class="semesterResult">
                    <span id="semesterGPA">${element.semesterGPA}</span>
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