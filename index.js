document.addEventListener("DOMContentLoaded", function() {
  const codeblocks = document.querySelectorAll("pre");

  for (let codeblock of codeblocks) {
    highlightSyntax(codeblock);
  }
});

function highlightSyntax(element) {
  const keyword = /\b(DWORD|BOOL|INFINITE|DI|CreateThread|if|else|while|for|->|<|>|(|)|()|!|&|&&|<|>|void|=|==|TRUE|FALSE|break|return)(?=[^\w])/g;
  const comment = /(\/\/.*)/g;

  let parsedElement = element.textContent;

  parsedElement = parsedElement
    .replace(keyword, '<span class="keyword">$1</span>')
    .replace(comment, '<span class="comment">$1</span>');

  element.innerHTML = parsedElement;
}
