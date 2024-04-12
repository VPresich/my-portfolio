export function getImageUrl(pathToImg) {
  const currentUrl = window.location.href;
  const baseUrl = new URL(currentUrl).origin;
  const absoluteUrl = new URL(pathToImg, baseUrl).href;
  console.log(absoluteUrl);
  return absoluteUrl;
}
