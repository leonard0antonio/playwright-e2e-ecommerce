import { test, expect } from '@playwright/test';

// 9. ELEMENTOS DINÂMICOS (Auto-waiting)
  test('Deve aguardar o carregamento de um elemento que demora a aparecer', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    // Clicamos no botão Start, que aciona uma barra de carregamento de 5 segundos
    await page.getByRole('button', { name: 'Start' }).click();
    
    const textoOculto = page.locator('#finish h4');
    
    // NÃO usamos "sleep" ou pausas fixas. 
    // O Playwright vai ficar testando a visibilidade automaticamente até o elemento aparecer 
    // (ou até atingir o timeout padrão de 5 segundos, que aqui estendemos para 10s por segurança)
    await expect(textoOculto).toBeVisible({ timeout: 10000 });
    await expect(textoOculto).toHaveText('Hello World!');
  });