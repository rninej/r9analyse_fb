self.addEventListener('install', (event) => {
        console.log('Service worker installed');
      });
      
      self.addEventListener('activate', (event) => {
        console.log('Service worker activated');
      });
      
      self.addEventListener('push', (event) => {
        const data = event.data.json();
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: '/android-chrome-192x192.png',
          badge: '/android-chrome-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample',
          requireInteraction: true,
          actions: [
            { action: 'explore', title: 'Go to the site' },
          ]
        });
      });
      
      self.addEventListener('notificationclick', (event) => {
        event.notification.close();
        event.waitUntil(
          clients.openWindow('/')
        );
      });