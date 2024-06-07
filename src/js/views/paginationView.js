import View from "./view.js";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHendlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    const curPage = this._data.page;
    if (curPage === 1 && numPages > 1) {
      return this._generateNextButton(curPage);
    }

    if (curPage === numPages && numPages > 1) {
      return this._generatePrevButton(curPage);
    }
    if (curPage < numPages) {
      return this._generatePrevButton(curPage) + this._generateNextButton(curPage);
    }
    return '';
  }
  _generateNextButton(curPage) {
    return `<button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
  _generatePrevButton(curPage) {
    return `<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
  </button>`;
  }
}

export default new PaginationView();