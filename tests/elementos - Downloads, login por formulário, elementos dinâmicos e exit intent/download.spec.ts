import { test, expect } from '@playwright/test';

// 21. DOWNLOAD DE ARQUIVOS
  test('Deve realizar o download de um arquivo e salvar localmente', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    
    // Assim como abas e alertas, preparamos o Playwright para "esperar" o evento de download
    const promessaDownload = page.waitForEvent('download');
    
    // Clicamos no primeiro link de arquivo disponível na lista
    await page.locator('.example a').first().click();
    
    // Capturamos o arquivo que foi baixado
    const arquivo = await promessaDownload;
    
    // Validamos se o nome sugerido do arquivo não está vazio
    expect(arquivo.suggestedFilename()).toBeTruthy();
    
    // (Opcional) Podemos salvar o arquivo na nossa máquina para validar o conteúdo depois
    // await arquivo.saveAs('./downloads/' + arquivo.suggestedFilename());
  });