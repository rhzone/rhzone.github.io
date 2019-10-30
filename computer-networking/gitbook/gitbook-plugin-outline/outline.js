
require(["gitbook"], function(gitbook) {

  gitbook.events.bind("page.change", function() {
    // let h2List = document.body.querySelectorAll(".page-wrapper h2");
    // if (!h2List.length) return;
    // let outline = document.createElement('ul');
    // outline.classList.add('outline-list');
    
    // Array.from(h2List).forEach(item => {
    //     outline.innerHTML += `<li class="outline-link"><a href="#${item.id}">${item.innerText}</a></li>`;
    // });
    // document.body.querySelector(".page-wrapper").appendChild(outline);
  });

});
