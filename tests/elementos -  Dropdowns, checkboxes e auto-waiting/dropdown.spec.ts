import { test, expect } from '@playwright/test';

// 7. DROPDOWN (Caixa de seleção)
  test('Deve selecionar opções em um menu Dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    
    const menuDropdown = page.locator('#dropdown');
    
    // O Playwright permite selecionar pelo atributo 'value', pelo texto (label) ou pelo índice
    await menuDropdown.selectOption('1'); // Seleciona o "Option 1" através do atributo value
    
    // Validamos se o valor selecionado agora é o correto
    await expect(menuDropdown).toHaveValue('1');
    
    // Mudando para a opção 2 através do texto visível
    await menuDropdown.selectOption({ label: 'Option 2' });
    await expect(menuDropdown).toHaveValue('2');
  });