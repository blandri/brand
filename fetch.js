/*fetch('https://my-brand-node.herokuapp.com/api/v1/articles').then((res) => {
  console.log(res);
});*/

const req = new XMLHttpRequest();

req.addEventListener('readystatechange', () => {
  if (req.readyState === 4 && req.status === 200) {
    console.log(req.responseText);
  } else if (req.readyState === 4) {
    console.log('not found');
  }
});

req.open('GET', 'https://my-brand-node.herokuapp.com/api/v1/articles');
req.send();
