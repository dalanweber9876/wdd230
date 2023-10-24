const list=document.querySelector("#list");
const button=document.querySelector("button");
const input=document.querySelector("#favchap");

let chaptersArray = GetChapterList() || [];

button.addEventListener("click", () => {
    if(input.value != "") {
        displayList(input.value)
        chaptersArray.push(input.value)
        SetChapterList();
        input.value = '';
        input.focus();
    }
    input.focus();
    input.value="";
});

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        button.click()
    }
})

function SetChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function GetChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function displayList(item) {
    const listItem=document.createElement("li");
    const btn=document.createElement("button");
    listItem.textContent=item;
    btn.textContent="❌";
    btn.classList.add('delete');
    listItem.append(btn);
    list.append(listItem);
    btn.addEventListener("click", function () {
        list.removeChild(listItem);
        DeleteChapter(listItem.textContent);
        input.focus();
    })
}

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

function DeleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    SetChapterList();
}