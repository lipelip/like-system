function addLikers(container){
  var likers = container.querySelectorAll('.liker');

  Array.prototype.forEach.call(likers, function(el, i) {

    var value = Number(el.dataset.value) || 0;

    var likeBtn = document.createElement('button');
    likeBtn.className = 'liker-like-btn';
    likeBtn.innerText = '✔';
    likeBtn.addEventListener('click', function(e){
      if ( value === 1 ) {
        value = 0;
      } else {
        value = 1;
      }
      updateElements();
    });

    var dislikeBtn = document.createElement('button');
    dislikeBtn.innerHTML = "✘";
    dislikeBtn.className = 'liker-dislike-btn';
    //dislikeBtn.innerText = '';
    dislikeBtn.addEventListener('click', function(e){
      if ( value === -1 ) {
        value = 0;
      } else {
        value = -1;
      }
      updateElements();
    });

    var totalLike = document.createElement('span'),
     		totaldisLike = document.createElement('span');
     		
		totalLike.className = "total-like";
		likeBtn.appendChild(totalLike);
		
		totaldisLike.className = "total-dislike";
		dislikeBtn.appendChild(totaldisLike);
		
		//Un nombre pour l'exemple 
		var totalValue = "5";
 
    function updateElements(){
      switch( value ) {
        case 0:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.remove("selected");
          totalLike.innerHTML = totalValue;
          totaldisLike.innerHTML = totalValue;
          break;
        case 1:
          likeBtn.classList.add("selected");
          dislikeBtn.classList.remove("selected");
          totalLike.innerHTML = parseInt(totalValue) + 1;
          totaldisLike.innerHTML = parseInt(totalValue) - 1;
          break;
        case -1:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.add("selected");
          totalLike.innerHTML = parseInt(totalValue) - 1;
          totaldisLike.innerHTML = parseInt(totalValue) + 1;
          break;
      }

      el.dataset.value = value;
    }

    el.appendChild( likeBtn );
    el.appendChild( dislikeBtn );

    updateElements();

  });

}