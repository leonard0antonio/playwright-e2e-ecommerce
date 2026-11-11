import { test, expect } from '@playwright/test';

// 25. MENSAGENS DE NOTIFICAÇÃO (Toasters aleatórios)
  test('Deve capturar a mensagem de notificação ao clicar no botão', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    await page.getByRole('link', { name: 'Click here' }).click();
    
    const notificacao = page.locator('#flash');
    
    // Esta notificação exibe textos diferentes aleatoriamente.
    // Podemos validar usando Regex se o texto contém uma das palavras-chave esperadas.
    await expect(notificacao).toBeVisible();
    await expect(notificacao).toHaveText(/(Action successful|Action unsuccesful|Please try again)/);
  });