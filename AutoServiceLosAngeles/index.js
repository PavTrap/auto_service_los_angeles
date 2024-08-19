// const photoBg1 = "./contents/photo/1.jpg";
// const photoBg2 = "./contents/photo/2.jpg";
// const photoBg3 = "./contents/photo/3.jpg";

// viewImages({
//   img: [photoBg1, photoBg2, photoBg3],
//   speed: 2,
// });

// function viewImages(props) {
//   let i = 0,
//     one = document.getElementById("one"),
//     two = document.getElementById("two"),
//     three = document.getElementById("three"),
//     timeout,
//     speed = props.speed * 1000,
//     changeSrc = props.speed * 1000 + 900,
//     elems = [two, one, three];
//   //   (one.style.backgroundImage = photoBg1),
//   //     (two.style.backgroundImage = photoBg2),
//   //  (three.style.backgroundImage = photoBg3),
//   (one.style.backgroundImage = "url(" + props.img[0] + ")"),
//     (two.style.backgroundImage = "url(" + props.img[1] + ")"),
//     (three.style.backgroundImage = "url(" + props.img[2] + ")");

//   changeImg();
//   function changeImg() {
//     elems.reverse();
//     (elems[0].style.opacity = 1),
//       (elems[1].style.opacity = 0),
//       (elems[2].style.opacity = 0);
//     setTimeout(
//       () => (elems[0].style.backgroundImage = "url(" + props.img[i] + ")"),
//       changeSrc
//     );
//     i == props.img.length - 1 ? (i = 0) : i++;
//     timeout = setTimeout(changeImg, speed);
//   }
// }

// setInterval(function () {
//   animate();
// }, 3000);

// function animate() {
//   let randomBgImage = Math.floor(Math.random() * 4);
//   document.body.style.backgroundImage =
//     "url(./contents/photo/" + randomBgImage + ".jpg)";
// }



const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
