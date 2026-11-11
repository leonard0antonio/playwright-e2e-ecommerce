import { test, expect } from '@playwright/test';

// 13. AUTENTICAÇÃO BÁSICA (Basic Auth Popup)
  test('Deve realizar login em um alerta de Basic Auth', async ({ page }) => {
    // Alertas de "Basic Auth" são popups do navegador, não elementos HTML.
    // O Playwright permite injetar as credenciais diretamente na URL: http://usuario:senha@site.com
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    
    // Validamos se a autenticação foi bem-sucedida
    const mensagemSucesso = page.locator('p');
    await expect(mensagemSucesso).toContainText('Congratulations! You must have the proper credentials.');
  });