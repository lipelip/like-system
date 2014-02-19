function addLikers(container){
  var likers = container.querySelectorAll('.liker');

  Array.prototype.forEach.call(likers, function(el, i) {

    var value = Number(el.dataset.value) || 0;

    var likeBtn = document.createElement('span');
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

    var dislikeBtn = document.createElement('span');
    dislikeBtn.innerHTML = "✘";
    dislikeBtn.className = 'liker-like-btn';
    //dislikeBtn.innerText = '';
    dislikeBtn.addEventListener('click', function(e){
      if ( value === -1 ) {
        value = 0;
      } else {
        value = -1;
      }
      updateElements();
    });

    function total(){
	    
	    //recuperer span.total
    }

    function updateElements(){
      switch( value ) {
        case 0:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.remove("selected");
          break;
        case 1:
          likeBtn.classList.add("selected");
          dislikeBtn.classList.remove("selected");
          break;
        case -1:
          likeBtn.classList.remove("selected");
          dislikeBtn.classList.add("selected");
          break;
      }

      el.dataset.value = value;
    }

    el.appendChild( likeBtn );
    el.appendChild( dislikeBtn );

    updateElements();

  });

}