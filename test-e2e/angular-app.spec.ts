import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page).toHaveTitle('angular-starter');
});

test('step buttons change terminal text', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  const terminalElement = page.locator('css=.terminal').locator('pre');
  let terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng generate component xyz');

  const buttons = page.locator('button');

  await buttons.nth(5).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng build');

  await buttons.nth(4).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng test');

  await buttons.nth(3).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng add _____');

  await buttons.nth(2).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng add @angular/pwa');

  await buttons.nth(1).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng add @angular/material');

  await buttons.nth(0).click();
  terminalText = await terminalElement.innerText();
  expect(terminalText).toEqual('ng generate component xyz');
});
