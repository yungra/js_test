'use strict';



//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        // let target = currentIndex + 1;
        // if (target === images.length) {
        //     target = 0;
        // }

        let target = Math.floor(Math.random() * images.length);
        document.querySelectorAll('.carousel__thumbnails > li')[target].click();
    },2000);
});

//即時関数
(function(){
    console.log('即時関数です');   
}());

setInterval(() => {}, 1000); //1000=1秒 10秒→1000 * 10みたいに掛け算使うと見やすい

const images = [
    'images/image000.jpg',
    'images/image001.jpg',
    'images/image002.jpg',
    'images/image003.jpg',
    'images/image004.jpg',
    'images/image005.jpg',
    'images/image006.jpg',
];

let currentIndex = 0;

//document→HTML要素へプログラム上から簡単にアクセスできる
//getElementById→引数にidの値を指定して要素(Element)を取得する
const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];
// console.log(mainImage.src);

for(let [index,image] of images.entries()){
    console.log(index,image);

    const img = document.createElement('img');
    img.src = image;

    mainImage.classList.add('active');
    //↑新しく'active'クラスを追加

    const li = document.createElement('li');
    if (index === currentIndex) {
        li.classList.add('current');
    }

    li.addEventListener('click', () => {
        mainImage.src = image;
        mainImage.classList.add('active');

        //時間切れになると関数または指定されたコードの断片を実行するタイマーを設定
        setTimeout(() => {
            mainImage.classList.remove('active');
        }, 800);

        //querySelector→条件に一致する最初の一つを取得
        //querySelectorAll→条件に一致するものを全て取得
        const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
    })

    //appendChild→特定の親ノードの子ノードの最後にノードを追加
    li.appendChild(img);
    
    //querySelector→任意のHTML要素を取得できる
    document.querySelector('.carousel__thumbnails').appendChild(li);
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
        target = 0;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});
