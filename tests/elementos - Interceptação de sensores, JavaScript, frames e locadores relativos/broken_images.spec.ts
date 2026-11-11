import { test, expect } from '@playwright/test';

// 18. IMAGENS QUEBRADAS (Execução de JS no Client-Side)
  test('Deve identificar se uma imagem falhou ao carregar', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    
    // Pegamos a primeira imagem da página (que sabemos que está quebrada neste site)
    const imagemQuebrada = page.locator('.example img').first();
    
    // Usamos o .evaluate() para rodar código JavaScript real de dentro do navegador.
    // Verificamos a propriedade 'naturalWidth', que é 0 se a imagem não carregar.
    const larguraNatural = await imagemQuebrada.evaluate((node) => node.naturalWidth);
    
    expect(larguraNatural).toBe(0);
  });