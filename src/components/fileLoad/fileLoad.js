// if (document.querySelector('input[type="file"]')) {
//   const inputArr = document.querySelectorAll('input[type="file"]');

//   inputArr.forEach((item) => {
//     item.addEventListener('change', (e) => {
//       let files = e.target.files;
//       let reader = new FileReader();
//       let file;
//       for (let i = 0; i < files.length; i++) {
//         (function (file) {
//           var reader = new FileReader();
//           reader.onload = (file) => {
//             console.log(reader.result);
//             // this.product.photo[i] = reader.result;
//           };
//           reader.readAsDataURL(file);
//         })(files[i]);
//       }
//     });
//   });
// }
