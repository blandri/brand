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
let k = document.querySelector('.image');
let d = k.getAttribute('src');
localStorage.setItem('img', JSON.stringify(d));

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

function dele(x, y) {
  if (confirm('you are about to delete this article.')) {
    let h = [];
    console.log(x);
    let i = x.indexOf(y);
    x.splice(i, 1);
    h = x;
    localStorage.setItem('article', JSON.stringify(h));
  }
}

function edi(a, b) {
  let div = document.createElement('div');
  div.classList.toggle('edt');
  let co = document.createElement('input');
  co.value = b;
  let t = document.createElement('input');
  t.value = a;
  let conf = document.createElement('button');
  conf.innerHTML = 'confirm';
  div.append(t, co, conf);
  ar.append(div);

  conf.addEventListener('click', () => {
    let hh = JSON.parse(localStorage.getItem('article'));
    for (let i = 0; i <= hh.length; i++) {
      if (hh[i].title == a && hh[i].content == b) {
        hh[i].title = t.value;
        hh[i].content = co.value;
        localStorage.setItem('article', JSON.stringify(hh));
      }
    }
  });
}

function design(a, b, d, z, x, y) {
  let da = date.cloneNode();
  let tf = document.querySelector('.title');
  let ft = tf.cloneNode('deep');
  ft.innerHTML = a;
  let upd = document.createElement('div');
  let edit = document.createElement('button');
  edit.innerHTML = 'edit';
  edit.classList.toggle('edi');
  let delet = document.createElement('button');
  delet.innerHTML = 'delete';
  delet.classList.toggle('del');
  upd.append(edit, delet);

  edit.addEventListener('click', () => {
    edi(a, b);
  });

  let dap = document.createElement('div');
  let pic = document.createElement('img');
  pic.classList.toggle('image');
  pic.setAttribute('src', d);
  da.innerHTML = z;
  dap.append(da, pic);

  let tc = document.createElement('div');
  tc.classList.toggle('det');

  let c = document.createElement('p');
  c.classList.toggle('content');

  c = b;

  tc.append(ft, c);
  let ad = document.createElement('div');
  ad.classList.toggle('article');
  ad.append(dap, tc, upd);

  ar.append(ad);

  delet.addEventListener('click', () => {
    dele(x, y);
  });
}

for (let i = 0; i <= arti.length; i++) {
  design(
    arti[i].title,
    arti[i].content,
    arti[i].image,
    arti[i].date,
    arti,
    arti[i]
  );
}


