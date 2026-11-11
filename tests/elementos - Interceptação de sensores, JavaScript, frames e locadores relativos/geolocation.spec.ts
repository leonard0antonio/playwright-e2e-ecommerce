import { test, expect } from '@playwright/test';

// 17. GEOLOCALIZAÇÃO (Mocking de Sensores)
  test('Deve simular uma localização GPS falsa no navegador', async ({ context, page }) => {
    // Primeiro, damos permissão ao navegador para usar a localização, evitando o alerta nativo
    await context.grantPermissions(['geolocation']);
    
    // Setamos as coordenadas fictícias (Ex: Tóquio, Japão)
    await context.setGeolocation({ latitude: 35.6895, longitude: 139.6917 });
    
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    await page.getByRole('button', { name: 'Where am I?' }).click();
    
    // O Playwright espera os valores aparecerem na tela e valida nossa localização mockada
    await expect(page.locator('#lat-value')).toHaveText('35.6895');
    await expect(page.locator('#long-value')).toHaveText('139.6917');
  });