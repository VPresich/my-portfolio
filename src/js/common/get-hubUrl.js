export function getHubUrl(targetRef, gitHubLink) {
  let gitUrl;
  let anchorElement;
  if (targetRef.classList.contains(gitHubLink)) {
    if (targetRef.nodeName === 'a') {
      anchorElement = targetRef;
    } else {
      anchorElement = targetRef.closest('a');
    }
  }

  if (anchorElement) {
    gitUrl = anchorElement.getAttribute('href');
  }
  return gitUrl;
}
