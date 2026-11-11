import { test, expect } from '@playwright/test';

// 20. CHALLENGING DOM (Locadores Relativos e IDs Dinâmicos)
  test('Deve clicar em botões que mudam de ID a cada recarregamento', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    
    // Neste site, os botões mudam o atributo 'id' toda vez que a página carrega.
    // Usar '#id-do-botao' faria o teste quebrar.
    
    // Abordagem 1: Usar a classe (se for única na tela)
    const botaoAzul = page.locator('.button').first();
    await botaoAzul.click();
    
    // Abordagem 2: localizar um botão específico pela classe do seu estado visual
    const botaoVerde = page.locator('.button.success').first();
    await botaoVerde.click();

    // Validamos que a tabela ficou visível após a interação
    await expect(page.locator('table')).toBeVisible();
  });