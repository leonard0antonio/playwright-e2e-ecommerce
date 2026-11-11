import { test, expect } from '@playwright/test';

// 26. EXIT INTENT (Movimento do mouse para fora da tela)
  test('Deve disparar um modal quando o mouse sair da área da janela', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/exit_intent');
    
    const modal = page.locator('.modal');
    await expect(modal).not.toBeVisible();
    
    // Movemos o mouse para o centro da tela (coordenadas X: 500, Y: 500)
    await page.mouse.move(500, 500);
    
    // Movemos o mouse abruptamente para o topo absoluto (fora do viewport vertical), simulando que o usuário vai fechar a aba
    await page.mouse.move(500, -10);
    
    // O modal promocional deve aparecer
    await expect(modal).toBeVisible();
  });