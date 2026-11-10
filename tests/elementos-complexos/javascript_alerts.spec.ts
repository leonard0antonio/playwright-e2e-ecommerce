import { test, expect } from "@playwright/test";

test.describe("Domínio de Elementos Complexos - The Internet", () => {
  test("Deve aceitar um alerta de confirmação e validar a mensagem", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // O Playwright cancela (dismiss) alertas automaticamente por padrão.
    // Para interagir com ele, precisamos "ouvir" o evento de diálogo ANTES de clicar no botão.
    page.on("dialog", async (dialog) => {
      // Validamos o texto que aparece no alerta
      expect(dialog.message()).toBe("I am a JS Confirm");
      // Aceitamos o alerta (clicamos em OK)
      await dialog.accept();
    });

    // Disparamos o alerta
    await page.getByRole("button", { name: "Click for JS Confirm" }).click();

    // Validamos se a ação refletiu na página principal
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  });
});
