export class DomService {

  /*scrollToTop: Given an element with overflow:y it will
  * be scroll top the top, internally
  * */
  static scrollToTop($el) {
    $el.scrollTop =  $el.scrollHeight;
  }
}
