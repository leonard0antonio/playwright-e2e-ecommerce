import { test, expect } from '@playwright/test';

// 19. NESTED FRAMES (Frames dentro de Frames)
  test('Deve navegar por iframes aninhados e capturar o texto', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    
    // O site tem um frame "top" que contém os frames "left", "middle" e "right".
    // Encadeamos os frameLocators para chegar até o destino.
    const frameTopo = page.frameLocator('[name="frame-top"]');
    const frameEsquerdo = frameTopo.frameLocator('[name="frame-left"]');
    
    const textoEsquerdo = frameEsquerdo.locator('body');
    await expect(textoEsquerdo).toHaveText('LEFT');
  });