import { test, expect } from '@playwright/test';

// 22. FORMULARIO DE LOGIN (Form Authentication)
  test('Deve realizar login com credenciais válidas', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    
    // O Playwright é muito rápido interagindo com inputs e botões
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    
    await page.getByRole('button', { name: /login/i }).click(); // Usando Regex para ignorar letras maiúsculas/minúsculas
    
    // Validamos a faixa verde de sucesso e se a URL mudou
    const alertaSucesso = page.locator('#flash.success');
    await expect(alertaSucesso).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/.*secure/);
  });