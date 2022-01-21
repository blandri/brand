let body = document.getElementById('body');
let del = document.querySelector('.fa-trash-alt');
let date = document.querySelector('.date');
let picture = document.querySelector('.image');
let par = document.querySelector('#article');
let articl = picture.parentNode;
let art = articl.parentNode;
let ar = art.parentNode;
let title = document.querySelector('.title');
let content = document.querySelector('.content');
let likes = document.querySelector('.lik');
let a = ar.childNodes;

//creating article

console.log(localStorage.new);
function nullP(mes, me) {
  title.innerHTML = mes;
  content.innerHTML = me;
}

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

//the article is stored in an array :new code
let edit = document.querySelector('.fa-edit');
edit.addEventListener('click', () => {
  let add = document.querySelector('.add');

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

  arr.unshift(jas);
  arr.unshift(js);

  nullP(arr[0], arr[1]);
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

let arti = JSON.parse(localStorage.getItem('article'));
let ima = JSON.parse(localStorage.getItem('image'));
console.log(arti);

function design(a, b, d, z) {
  let da = date.cloneNode();
  let smash = document.querySelector('.smash');
  let add = document.querySelector('.add');
  let sma = smash.cloneNode('deep');
  let addd = add.cloneNode('deep');

  let dap = document.createElement('div');
  let pic = document.createElement('img');
  pic.classList.toggle('image');
  pic.setAttribute('src', d);
  da.innerHTML = z;
  dap.append(da, pic);

  let tc = document.createElement('div');
  tc.classList.toggle('det');

  let t = document.createElement('h2');
  t.classList.toggle('title');
  let c = document.createElement('p');
  c.classList.toggle('content');
  t = a;
  c = b;

  tc.append(t, c);
  let ad = document.createElement('div');
  ad.classList.toggle('article');
  ad.append(dap, tc, sma, addd);

  ar.append(ad);
}

for (let i = 0; i <= arti.length; i++) {
  design(arti[i].title, arti[i].content, ima[i], arti[i].date);
}
