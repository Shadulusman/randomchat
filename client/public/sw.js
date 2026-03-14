// Service worker for PropellerAds push notifications
// PropellerAds will update this file automatically once your site is verified.
// Do not delete this file.

self.addEventListener('push', function (event) {
  if (!event.data) return;
  const data = event.data.json();
  const options = {
    body: data.body || '',
    icon: data.icon || '/favicon-32.png',
    badge: data.badge || '/favicon-16.png',
    data: { url: data.url || '/' },
  };
  event.waitUntil(
    self.registration.showNotification(data.title || 'Omeelo', options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
