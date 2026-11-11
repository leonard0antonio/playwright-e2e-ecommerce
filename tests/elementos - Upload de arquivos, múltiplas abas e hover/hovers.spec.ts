import { test, expect } from '@playwright/test';

// 6. MOUSE HOVER (Passar o mouse por cima)
  test('Deve revelar informações ocultas ao passar o mouse na imagem', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    
    // Focamos no primeiro "card" de perfil
    const perfil = page.locator('.figure').first();
    const informacaoOculta = perfil.locator('.figcaption');
    
    // Garantimos que a informação não está visível no início
    await expect(informacaoOculta).not.toBeVisible();
    
    // Simulamos o mouse parando em cima da imagem
    await perfil.hover();
    
    // Validamos se o texto apareceu após o hover
    await expect(informacaoOculta).toBeVisible();
    await expect(informacaoOculta.locator('h5')).toHaveText('name: user1');
  });