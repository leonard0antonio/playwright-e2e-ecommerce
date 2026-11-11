import { test, expect } from '@playwright/test';

// 15. TABELAS DE DADOS (Web Tables)
  test('Deve localizar um usuário em uma tabela e validar seu débito', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    
    // Localizando uma linha (tr) específica baseada no conteúdo dela usando o filtro "hasText"
    const linhaUsuario = page.locator('#table1 tbody tr', { hasText: 'jsmith@gmail.com' });
    
    // Dentro dessa linha, verificamos a célula correspondente ao primeiro nome (coluna 2, índice 1)
    const nome = linhaUsuario.locator('td').nth(1);
    await expect(nome).toHaveText('John');
    
    // Verificamos o valor da coluna "Due" (coluna 4, índice 3)
    const valorDevido = linhaUsuario.locator('td').nth(3);
    await expect(valorDevido).toHaveText('$50.00');
  });