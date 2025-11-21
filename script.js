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
                    <button>A</button>
                    <button>A-</button>
                    <button>B+</button>
                    <button>B</button>
                    <button>B-</button>
                    <button>C+</button>
                    <button>C</button>
                    <button>C-</button>
                    <button>D+</button>
                    <button>D</button>
                    <button>D-</button>
                    <button>F</button>
                </div>
                <!-- جبت كام -->

                <input type="checkbox" name="credit" id="checkboxCredit"> 
                <div class="creditPOPup POPup">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <!-- عدد الساعات -->

                <input type="checkbox" name="isAgain" id="checkboxIsAgain">
                <div class="isAgainPOPup POPup">
                    <button>NO</button>
                    <button>A</button>
                    <button>A-</button>
                    <button>B+</button>
                    <button>B</button>
                    <button>B-</button>
                    <button>C+</button>
                    <button>C</button>
                    <button>C-</button>
                    <button>D+</button>
                    <button>D</button>
                    <button>D-</button>
                    <button>F</button>
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

function clickingGrades(){

}