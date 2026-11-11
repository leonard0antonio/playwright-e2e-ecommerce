import { test, expect } from '@playwright/test';

// 8. CHECKBOXES
  test('Deve marcar e desmarcar caixas de seleção', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    
    // Pegamos a primeira e a segunda checkbox da tela
    const checkbox1 = page.locator('#checkboxes input').nth(0);
    const checkbox2 = page.locator('#checkboxes input').nth(1);
    
    // O comando .check() garante que será marcado (se já estiver, ele não faz nada)
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    
    // O comando .uncheck() garante que será desmarcado
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
  });