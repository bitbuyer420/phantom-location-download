"use strict";

const copyButton = document.getElementById("copyHash");
const checksum = document.getElementById("checksum");

if (copyButton && checksum) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(checksum.textContent.trim());
      copyButton.textContent = "Copied";
      window.setTimeout(() => { copyButton.textContent = "Copy"; }, 1600);
    } catch (_) {
      copyButton.textContent = "Select manually";
    }
  });
}
