(function () {
  gitbook.events.bind('page.change', () => {
    var summary = document.querySelector('.book-summary');
    var menu = document.querySelector('.js-toolbar-action');
    var bookBody = document.querySelector('.book-body');
    SwipeListener(summary);
    SwipeListener(bookBody);
    summary.addEventListener('swipe', (e) => {
      if (e.detail.directions.left) {
        menu.click();
      }
    });
    bookBody.addEventListener('swipe', (e) => {
      if (e.detail.directions.right) {
        menu.click();
      }
    })
  })
})();

function toggleOutline() {
  var ouline = document.createElement('ul');
  ouline.classList.add('outline');
  
}