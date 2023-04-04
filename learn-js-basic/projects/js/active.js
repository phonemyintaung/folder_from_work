let addOne = 1;

const photoAlbum = [
    "./images/image_2.jpg",
    "./images/image_3.jpg",
    "./images/image_4.jpg",
    "./images/image_5.jpg",
    "./images/image_6.jpg",
];

let photo = document.getElementsByTagName("img");

function myFunction() {
    if(addOne < photoAlbum.length) {
        photo[src=photoAlbum[addOne]];
        addOne++;
    }
}