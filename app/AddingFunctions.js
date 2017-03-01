// /****************
// -This is how we will have a pop up box for the createBoard
// *****************/
//
//
//
// app.directive('createBoard', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       show: '='
//     },
//     replace: true, // Replace with the template below
//     transclude: true, // we want to insert custom content inside the directive
//     link: function(scope, element, attrs) {
//       scope.dialogStyle = {};
//       if (attrs.width)
//         scope.dialogStyle.width = attrs.width;
//       if (attrs.height)
//         scope.dialogStyle.height = attrs.height;
//       scope.hideModal = function() {
//         scope.show = false;
//       };
//     },
//     template: "partials/item-form.html" // See below
//   };
// });
//
//
// /****************
// -Starting CSS
// *****************/
// //
// // .ng-modal-overlay {
// //   /* A dark translucent div that covers the whole screen */
// //   position:absolute;
// //   z-index:9999;
// //   top:0;
// //   left:0;
// //   width:100%;
// //   height:100%;
// //   background-color:#000000;
// //   opacity: 0.8;
// // }
// // .ng-modal-dialog {
// //   /* A centered div above the overlay with a box shadow. */
// //   z-index:10000;
// //   position: absolute;
// //   width: 50%; /* Default */
// //
// //   /* Center the dialog */
// //   top: 50%;
// //   left: 50%;
// //   transform: translate(-50%, -50%);
// //   -webkit-transform: translate(-50%, -50%);
// //   -moz-transform: translate(-50%, -50%);
// //
// //   background-color: #fff;
// //   box-shadow: 4px 4px 80px #000;
// // }
// // .ng-modal-dialog-content {
// //   padding:10px;
// //   text-align: left;
// // }
// // .ng-modal-close {
// //   position: absolute;
// //   top: 3px;
// //   right: 5px;
// //   padding: 5px;
// //   cursor: pointer;
// //   font-size: 120%;
// //   display: inline-block;
// //   font-weight: bold;
// //   font-family: 'arial', 'sans-serif';
// // }
