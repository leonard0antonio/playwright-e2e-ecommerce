import { test, expect } from '@playwright/test';

// 16. SCROLL DA PÁGINA (Infinite Scroll)
  test('Deve rolar a página para baixo para carregar mais conteúdo', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
    
    // O Playwright tem um simulador de roda do mouse (mouse wheel)
    // Rolamos 1000 pixels para baixo (eixo Y)
    await page.mouse.wheel(0, 1000);
    
    // Pequena pausa apenas para garantir que o javascript da página dispare e crie novos elementos
    await page.waitForTimeout(1000); // Evite usar pausas fixas no dia a dia, mas útil aqui para visualizar
    
    // Você também pode focar no rodapé da página para forçar o scroll até o final
    const rodape = page.locator('#page-footer');
    await rodape.scrollIntoViewIfNeeded();
    
    await expect(rodape).toBeVisible();
  });