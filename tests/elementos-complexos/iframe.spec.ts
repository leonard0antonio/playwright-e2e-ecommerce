import { test, expect } from "@playwright/test";

test.describe("Domínio de Elementos Complexos - The Internet", () => {
  // 2. IFRAMES (Páginas embutidas dentro de outras páginas)
  test("Deve escrever dentro de um editor de texto em um Iframe", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");

    // Elementos dentro de iframes são invisíveis para o page.locator() normal.
    // Usamos o frameLocator() para focar no "buraco" do iframe primeiro.
    const frameEditor = page.frameLocator("#mce_0_ifr");
    const caixaDeTexto = frameEditor.locator("#tinymce");

    await caixaDeTexto.clear();
    await caixaDeTexto.fill("Dominando o Playwright passo a passo!");

    await expect(caixaDeTexto).toHaveText(
      "Dominando o Playwright passo a passo!",
    );
  });
});
