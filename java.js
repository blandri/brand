window.addEventListener('DOMContentLoaded', function e() {
  let article1 = document.querySelector('.at1');
  let article2 = document.querySelector('.at2');
  let like = document.querySelector('.fa-thumbs-up');
  let body = document.getElementById('body');
  let del = document.querySelector('.fa-trash-alt');
  let edit = document.querySelector('.fa-edit');
  let post = document.querySelector('.pos');

  let articles = {
    first: article1,
    second: article2,
  };

  console.log(articles);

  del.addEventListener('click', () => {
    body.removeChild(article1);
  });
  edit.addEventListener('click', () => {
    let div = document.createElement('div');
    div.classList.add('add');

    div.innerHTML =
      '<input type="text" id="jas" placeholder="Content" /> <input type="text" id="js" placeholder="Title" /> <input type="file" id="fil" accept="images/*"> <button id="j">Confirm</button>';
    ('');

    article1.appendChild(div);
  });
  post.addEventListener('click', () => {});

  const jas = document.querySelector('#jas');
  const js = document.querySelector('#js');
  const j = document.querySelector('#j');
  const fil = document.querySelector('#fil');
  let img = document.querySelector('.image');
  let p = document.querySelector('.p');
  let h2 = document.querySelector('h2');

  j.addEventListener('click', (a) => {
    a.preventDefault();
    const u = jas.value;
    const up = js.value;
    const upd = fil.value;

    console.log('hi');
  });
});
