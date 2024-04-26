const userInput = document.getElementById('text-input');
const submitButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(input){
    const orgInput = input;
    if(input === ''){
        alert('please enter some characters');
        return;
    }
    result.replaceChildren();
    let regex = /[^A-Z0-9a-z]/g;
    let newString = input.replace(regex,'');
    let word = newString === [newString].reverse().join() ? 'is' : 'is not';
    const HTMLString = `<strong>${orgInput}</strong> ${word} a palindrome.`;
    const pTag = document.createElement('p');
    pTag.className = 'output';
    pTag.innerHTML = HTMLString;
    result.appendChild(pTag);
    result.classList.remove('hidden');
}
submitButton.addEventListener('click',()=>{
    checkPalindrome(userInput.value);
    userInput.value ='';
});
userInput.addEventListener('keydown',e=>{
    if(e.key === 'Enter'){
        checkPalindrome(userInput.value);
    userInput.value ='';
    }
})
