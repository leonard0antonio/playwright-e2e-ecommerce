import { test, expect } from "@playwright/test";
import { Buffer } from "buffer";

test("Deve realizar o upload de um arquivo virtual", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  // O Playwright permite criar um arquivo "falso" na memória para não precisarmos de arquivos reais no disco
  await page.locator("#file-upload").setInputFiles({
    name: "relatorio-teste.txt",
    mimeType: "text/plain",
    buffer: Buffer.from(
      "Este é um arquivo gerado automaticamente pelo Playwright.",
    ),
  });

  await page.getByRole("button", { name: "Upload" }).click();

  // Valida se a tela de sucesso carregou o nome do nosso arquivo
  await expect(page.locator("h3")).toHaveText("File Uploaded!");
  await expect(page.locator("#uploaded-files")).toContainText(
    "relatorio-teste.txt",
  );
});
