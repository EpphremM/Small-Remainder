const addMovieModel=document.getElementById('model-container');
const   startAddMovieButton=document.getElementById('add');
const backDrop=document.getElementById('back-drop');
const cancelMovieModel=document.getElementById('no');
const confirmAddMovieButton=document.getElementById('yes');
const userInputs=addMovieModel.querySelectorAll('input'); 
const personalData=document.getElementById('personal-data');
const dataStorage=document.getElementById('data-entry');
const deleteCaution=document.getElementById('delete-caution');
const cautionN=document.getElementById('cNo');
const cautionY=document.getElementById('cYes');
const Movies=[];
const updateUI=()=>{
}
const togglebackDropModel=()=>{
  backDrop.classList.toggle('visible');
}
const toggelMovieModel=()=>{
    addMovieModel.classList.toggle('visible');
    togglebackDropModel();
}
 const visibleMovieModel=()=>
 {
    addMovieModel.classList.add('visible');
 }
 const removeMovieModel=()=>
 {
    addMovieModel.classList.remove('visible');
 }
const backDropHandler=()=>{
    toggelMovieModel();
}
const cancelMovie=()=>{
   toggelMovieModel(); 
}
const renderNewMovieElement=(title,imgUrl,rating)=>{
const newMovieElement=document.createElement('li');
newMovieElement.className="movie-element";
newMovieElement.innerHTML=`
<div>
<img src="${imgUrl}" alt${title} class="movie-element-image">
</div>
<div class="movie-element-info>
<h2 class="title">${title}</h2>
<p class="rating">${rating}/5 stars</p>
</div>
`;
const container=document.createElement('div');
container.appendChild(newMovieElement);
const deleteBtn=document.createElement('button');
deleteBtn.innerText="Remove";
deleteBtn.className="delete";
container.appendChild(deleteBtn);
dataStorage.appendChild(container);
deleteBtn.classList="delete visible";
const deleteHandler=(event)=>{
    removeMovieModel();
    deleteCaution.style.display="block";
    cautionY.addEventListener('click',()=>{
        var card=event.target.parentElement;
        card.remove();
        deleteCaution.style.display="none";
    })
    cautionN.addEventListener('click',()=>{
        deleteCaution.style.display="none";
    })
    if(Movies.length===0)
    {
        personalData.style.display="block";
    }
    else{
        personalData.style.display="none";
    }
 
 }
 deleteBtn.addEventListener('click',deleteHandler);
}
const addMovieHandler=()=>{
const titleInput=userInputs[0].value;
const imageUrl=userInputs[1].value;
const ratingValue=userInputs[2].value;
if(titleInput.trim()=== '' ||imageUrl.trim() === '' ||ratingValue.trim()=== '' ||+ratingValue>5 ||+ratingValue<1)
{
    alert("Please Enter the correct value");
    return;
}
else{
    const newMovie={
        title:titleInput,
        image:imageUrl,
        rating:ratingValue
    };
    Movies.push(newMovie);
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.rating);
}

cancelMovie();
updateUI();

}


startAddMovieButton.addEventListener('click',toggelMovieModel);
backDrop.addEventListener('click',backDropHandler);
cancelMovieModel.addEventListener('click',cancelMovie);
confirmAddMovieButton.addEventListener('click',addMovieHandler);