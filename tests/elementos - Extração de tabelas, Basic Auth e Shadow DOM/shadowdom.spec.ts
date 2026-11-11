import { test, expect } from '@playwright/test';

// 14. SHADOW DOM (Elementos encapsulados)
  test('Deve interagir com elementos dentro de um Shadow DOM', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom');
    
    // O Shadow DOM esconde elementos em outras ferramentas de automação (exigindo scripts complexos).
    // O Playwright perfura (pierce) o Shadow DOM por padrão! O locator funciona normalmente.
    const paragrafoShadow = page.locator('span[slot="my-text"]').first();
    
    await expect(paragrafoShadow).toHaveText("Let's have some different text!");
  });