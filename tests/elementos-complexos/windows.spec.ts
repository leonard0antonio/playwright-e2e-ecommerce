import { test, expect } from "@playwright/test";

test("Deve clicar em um link, capturar a nova aba e validar seu conteúdo", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/windows");

  // Assim como nos alertas, precisamos "avisar" o Playwright para esperar uma nova aba ANTES de clicar
  const promessaNovaAba = page.waitForEvent("popup");

  await page.getByRole("link", { name: "Click Here" }).click();

  // Captura a nova aba assim que ela abrir
  const novaAba = await promessaNovaAba;

  // A partir de agora, usamos a variável 'novaAba' em vez de 'page' para interagir com a tela nova
  await expect(novaAba.locator("h3")).toHaveText("New Window");
});
