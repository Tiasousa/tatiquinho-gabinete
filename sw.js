// Service worker mínimo — existe só pra deixar o app instalável
// (o Chrome exige um SW com evento "fetch" pra liberar o "Adicionar
// à tela inicial"). Não guarda nada offline por enquanto: sempre
// busca a versão mais nova da rede, pra você nunca ficar preso
// numa versão antiga do sistema depois de uma atualização.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
