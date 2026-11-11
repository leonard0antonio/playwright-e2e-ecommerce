import { test, expect } from '@playwright/test';

// 12. SLIDER HORIZONTAL (Controle Deslizante)
  test('Deve mover um controle deslizante e validar o valor', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    
    const slider = page.locator('input[type="range"]');
    const valorExibido = page.locator('#range');

    // Abordagem 1: Focar no slider e usar as setas do teclado (simula o usuário real)
    await slider.click();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    
    // Neste site, cada clique na seta direita aumenta 0.5 (2 cliques = 1)
    await expect(valorExibido).toHaveText('3.5');

    // Abordagem 2: Usar o comando fill(). 
    // O Playwright é inteligente o suficiente para aplicar fill() em inputs do tipo "range"
    await slider.fill('4.5');
    await expect(valorExibido).toHaveText('4.5');
  });