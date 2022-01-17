let body = document.getElementById('body');
let del = document.querySelector('.fa-trash-alt');

let post = document.querySelector('.pos');

let picture = document.querySelector('.image');
let par = document.querySelector('#article');
let articl = picture.parentNode;
let art = articl.parentNode;
let ar = art.parentNode;
let title = document.querySelector('.title');
let content = document.querySelector('.content');
let likes = document.querySelector('.lik');
let a = ar.childNodes;

function nullP(mes, me) {
  title.innerHTML = mes;
  content.innerHTML = me;
}
console.log(par.childNodes);
//Likes operation
let value = JSON.parse(localStorage.getItem('likes'));
likes.innerHTML = value;

//article operation

function stringLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function parseLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

function deleteArticle(child) {
  ar.removeChild(child);
}

function newArt(artic) {
  ar.appendChild(artic);
}
let aaa = [title.innerHTML, content.innerHTML];
stringLocal('articles', aaa);

//the article is stored in an array :new code
let edit = document.querySelector('.fa-edit');
edit.addEventListener('click', () => {
  let add = document.querySelector('.add');
  console.log('huhu');
  if (add.style.display === 'none') {
    add.style.display = 'grid';
  } else {
    add.style.display = 'none';
  }
});

function editt(key) {
  let arr = parseLocal(key);
  let jas = document.querySelector('#jas').value.trim();
  let js = document.querySelector('#js').value.trim();

  arr.push(jas);
  arr.push(js);

  nullP(arr[2], arr[3]);
  stringLocal(key, arr);
}

let edb = document.querySelector('#j');
edb.addEventListener('click', () => {
  editt('articles');

  let file = document.querySelector('#fil');
  file.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('image', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
  });
  console.log(localStorage);
  let img = localStorage.getItem('image');
  picture.setAttribute('src', img);
});

function apply() {
  let pp = editt('articles');

  let div = document.createElement('div');
  div.innerHTML = pp[0];
  let aaaa = par.childNodes;
  aaaa[3].replaceChild(div, content);
}

console.log();

let delt = document.querySelector('fa-trash-alt');
