import { test, expect } from '@playwright/test';

// 24. CONTROLES DINÂMICOS (Habilitar/Desabilitar Inputs)
  test('Deve aguardar um input ser habilitado assincronamente', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    
    const inputTexto = page.locator('#input-example input');
    const botaoHabilitar = page.getByRole('button', { name: 'Enable' });
    
    // Verificamos se o input está desabilitado (disabled) no início
    await expect(inputTexto).toBeDisabled();
    
    // Clicamos para habilitar (isso dispara uma barra de carregamento de alguns segundos)
    await botaoHabilitar.click();
    
    // O Playwright espera automaticamente o status do elemento mudar antes de continuar
    await expect(inputTexto).toBeEnabled();
    
    // Escrevemos no input agora que ele está liberado
    await inputTexto.fill('Playwright é incrível!');
    await expect(inputTexto).toHaveValue('Playwright é incrível!');
  });