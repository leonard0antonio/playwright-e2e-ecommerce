import { test, expect } from '@playwright/test';

// 23. ADICIONAR E REMOVER ELEMENTOS (Contagem de locadores)
  test('Deve adicionar múltiplos elementos e validar a contagem na tela', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    
    const botaoAdicionar = page.getByRole('button', { name: 'Add Element' });
    const botoesDeletar = page.locator('.added-manually');
    
    // Garantimos que não há botões de deletar no início
    await expect(botoesDeletar).toHaveCount(0);
    
    // Clicamos 3 vezes para adicionar elementos
    await botaoAdicionar.click();
    await botaoAdicionar.click();
    await botaoAdicionar.click();
    
    // Validamos se exatamente 3 botões apareceram na tela
    await expect(botoesDeletar).toHaveCount(3);
    
    // Clicamos no primeiro botão de deletar e validamos se a contagem caiu para 2
    await botoesDeletar.first().click();
    await expect(botoesDeletar).toHaveCount(2);
  });