function firePageViewEvent(pageMeta) {
  document.title = pageMeta.title || 'Count My Words';
  document.querySelector('meta[name="description"]').setAttribute('content', pageMeta.description || '');
  document.querySelector('link[rel="canonical"]').setAttribute('href', pageMeta.canonicalUrl || 'https://countmywords.in');

  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: pageMeta.title,
      page_location: pageMeta.canonicalUrl,
    });
  }
}



export default firePageViewEvent;
