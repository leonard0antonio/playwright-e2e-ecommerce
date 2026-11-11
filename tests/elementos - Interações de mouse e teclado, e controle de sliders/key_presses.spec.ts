import { test, expect } from '@playwright/test';

// 11. SIMULAÇÃO DE TECLADO (Key Presses)
  test('Deve registrar as teclas pressionadas na página', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    
    const resultado = page.locator('#result');

    // O Playwright possui uma API específica para o Teclado (keyboard)
    await page.keyboard.press('Escape');
    await expect(resultado).toHaveText('You entered: ESCAPE');
    
    // Você pode simular qualquer tecla, incluindo modificadores (Shift, Control, Alt)
    await page.keyboard.press('Space');
    await expect(resultado).toHaveText('You entered: SPACE');
  });