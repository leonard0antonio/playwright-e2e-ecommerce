import { test, expect } from "@playwright/test";

test.describe("Domínio de Elementos Complexos - The Internet", () => {
  // 3. DRAG AND DROP (Arrastar e soltar)
  test("Deve arrastar a coluna A para a coluna B", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    const blocoA = page.locator("#column-a");
    const blocoB = page.locator("#column-b");

    // O Playwright abstrai toda a complexidade do mouse (clicar, segurar, mover, soltar) em um único comando
    await blocoA.dragTo(blocoB);

    // Validamos se a letra A foi parar no segundo bloco
    await expect(blocoB.locator("header")).toHaveText("A");
  });
});
