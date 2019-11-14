export class DomService {

  /*scrollToTop: Given an element with overflow:y it will
  * be scroll top the top, internally
  * */
  static scrollToTop($el) {
    $el.scrollTop = $el.scrollHeight;
  }

  static focusOnContentEditable(contentEditableDiv: HTMLElement) {
    contentEditableDiv.focus();
    const p = contentEditableDiv,
      s = window.getSelection(),
      r = document.createRange();
    p.innerHTML = '\u00a0';
    r.selectNodeContents(p);
    s.removeAllRanges();
    s.addRange(r);
    document.execCommand('delete', false, null);
  }

  getParentOfSelection() {

  }

  static isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
}
