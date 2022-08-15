import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description }) => {
  return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  `;
};

const makeGalleryCardList = galleryItems.map(makeGalleryCard).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryCardList);

let galleryS = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
galleryS.on('shown.simplelightbox');
