const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const container = document.getElementById('main-f');
let val = '';
let filteredInput = '';


  

textInput.addEventListener('keyup',function(){
    val = this.value;
    filteredInput = filterInput(val);
    checkPali(filteredInput,val);
});
function filterInput(input){
    
    checkButton.addEventListener('click',()=>{
        if(input === ''){
            alert('please enter some characters');
        }
    })
    let trimmer = input.trim();
    
    let regex = /[a-zA-Z0-9]/;
    let rtn ='';
    for(let i=0;i<trimmer.length;i++){
        if(regex.test(trimmer[i])){
            rtn+=trimmer[i];
        }
    }
    return rtn;
}
function checkPali(input,val){
    let flag =0; //tru
    for(let i=0,j=input.length-1;i<input.length;i++,j--){
        if(input[i]!==input[j]){
            flag =1; //fal
        }
    }
    let word = flag ==0 ? 'a palindrome' : 'not a palindrome';
    const HTMLString = `<p><strong style="color:ghostwhite">${val}</strong> is ${word}.</p>`;
    checkButton.addEventListener('click',()=>{
        container.style.height = "11em";
        result.innerHTML = HTMLString;
        textInput.value ='';
    })
    
}
checkButton.addEventListener('click',()=>{
    if(val === ''){
    alert('please input some characters');
    textInput.replaceChildren();
    }
})

// checkButton.addEventListener("click.empty", function() {
//     if (textInput.value === "") {
//       alert("Please enter a word or phrase to check.");
//       checkButton.removeEventListener("click.empty"); // Remove temporary listener
//     }
//   }, { once: true });

// userInput.addEventListener('keydown', e => {
//     if (e.key === 'Enter') {
//       checkForPalindrome(userInput.value);
//       userInput.value = '';
//     }
//   });