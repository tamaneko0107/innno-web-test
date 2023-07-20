

// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var pdfPath = "./pdfs/file.pdf";

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'build/pdf.worker.js';

document.getElementById('file-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(event) {
        var typedarray = new Uint8Array(event.target.result);
        pdfjsLib.getDocument(typedarray).promise.then(function(pdfDoc_) {
          pdfDoc = pdfDoc_;
          pageNum = 1;
          renderPage(pageNum);
        });
      };
      reader.readAsArrayBuffer(file);
    }
  });

  var pdfDoc = null,
      pageNum = 1,
      scale = 1.5,
      canvas = document.getElementById('the-canvas'),
      ctx = canvas.getContext('2d');

  function renderPage(num) {
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale});
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      page.render(renderContext);
    });
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}
document.getElementById('prev').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}
document.getElementById('next').addEventListener('click', onNextPage);

/**
 * Asynchronously downloads PDF.
 */
pdfjsLib.getDocument(pdfPath).promise.then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;
  document.getElementById('page_count').textContent = pdfDoc.numPages;

  // Initial/first page rendering
  renderPage(pageNum);
});