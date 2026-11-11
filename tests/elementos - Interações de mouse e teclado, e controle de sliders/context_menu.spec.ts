import { test, expect } from '@playwright/test';

// 10. MENU DE CONTEXTO (Clique com o botão direito)
  test('Deve acionar o alerta ao clicar com o botão direito', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    
    // Novamente, preparamos a "escuta" do alerta ANTES de realizar a ação
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('You selected a context menu');
      await dialog.accept();
    });

    const areaAlvo = page.locator('#hot-spot');
    
    // O método click() aceita opções, como especificar qual botão do mouse usar
    await areaAlvo.click({ button: 'right' });
  });