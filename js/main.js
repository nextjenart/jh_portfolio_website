/* This is my main JS file */

.calc-grid-column(@index, @class, @type) when (@type = width) and (@index > 0) {
  .col-@{class}-@{index} {
    width: percentage((@index / @grid-columns));
  }
}