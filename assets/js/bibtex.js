document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("bibtex-dialog");
  if (!dialog) return;

  const title = dialog.querySelector("h2");
  const code = dialog.querySelector("code");
  const copyButton = dialog.querySelector(".bibtex-copy");
  const copyStatus = dialog.querySelector(".bibtex-copy-status");
  let request;

  copyButton.addEventListener("click", async () => {
    const currentRequest = request;
    copyButton.disabled = true;
    copyStatus.textContent = "";
    try {
      await navigator.clipboard.writeText(code.textContent);
      if (request === currentRequest) copyStatus.textContent = "Copied!";
    } catch (error) {
      if (request === currentRequest) {
        copyStatus.textContent = "Could not copy automatically. Select the code and copy it manually.";
      }
    } finally {
      if (request === currentRequest) copyButton.disabled = false;
    }
  });

  document.addEventListener("click", async event => {
    const link = event.target.closest("a.bibtex-link");
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    if (request) request.abort();
    const controller = new AbortController();
    request = controller;
    title.textContent = "BibTeX: " + link.dataset.publicationTitle;
    code.textContent = "Loading BibTeX…";
    copyButton.disabled = true;
    copyStatus.textContent = "";
    if (!dialog.open) dialog.showModal();

    try {
      const url = new URL(link.href);
      // Use local files in previews even when metadata uses the production URL.
      if (dialog.dataset.siteUrl && url.origin === new URL(dialog.dataset.siteUrl).origin) {
        url.protocol = window.location.protocol;
        url.host = window.location.host;
      }
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error("BibTeX unavailable");
      const text = await response.text();
      if (!/^\s*@\w+\s*[{(]/m.test(text)) throw new Error("Invalid BibTeX response");
      if (request === controller) {
        code.textContent = text;
        copyButton.disabled = false;
      }
    } catch (error) {
      if (error.name !== "AbortError" && request === controller) {
        code.textContent = "The BibTeX code could not be loaded. Check that this publication’s bibtexurl points to an available .bib file.";
      }
    }
  });

  dialog.addEventListener("close", () => {
    if (request) request.abort();
  });
});
