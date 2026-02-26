import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set mobile viewport (iPhone 12 Pro dimensions)
  await page.setViewport({
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
  });
  
  console.log('Navigating to http://localhost:8080...');
  await page.goto('http://localhost:8080', {
    waitUntil: 'networkidle2',
    timeout: 10000
  });
  
  // Wait a bit for any animations
  await page.waitForTimeout(1000);
  
  // Take screenshot of initial view (first slides)
  console.log('Taking screenshot 1 - Initial view...');
  await page.screenshot({
    path: 'mobile-screenshot-1-initial.png',
    fullPage: false
  });
  
  // Get page height to calculate scroll positions
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = 812;
  
  console.log(`Page height: ${bodyHeight}px`);
  
  // Scroll down to see more slides (scroll by viewport height)
  console.log('Scrolling down...');
  await page.evaluate((scrollAmount) => {
    window.scrollBy(0, scrollAmount);
  }, viewportHeight);
  
  await page.waitForTimeout(500);
  
  // Take screenshot 2
  console.log('Taking screenshot 2 - After first scroll...');
  await page.screenshot({
    path: 'mobile-screenshot-2-scroll1.png',
    fullPage: false
  });
  
  // Scroll down more
  await page.evaluate((scrollAmount) => {
    window.scrollBy(0, scrollAmount);
  }, viewportHeight);
  
  await page.waitForTimeout(500);
  
  // Take screenshot 3
  console.log('Taking screenshot 3 - After second scroll...');
  await page.screenshot({
    path: 'mobile-screenshot-3-scroll2.png',
    fullPage: false
  });
  
  // Scroll down more
  await page.evaluate((scrollAmount) => {
    window.scrollBy(0, scrollAmount);
  }, viewportHeight);
  
  await page.waitForTimeout(500);
  
  // Take screenshot 4
  console.log('Taking screenshot 4 - After third scroll...');
  await page.screenshot({
    path: 'mobile-screenshot-4-scroll3.png',
    fullPage: false
  });
  
  // Also take a full page screenshot for reference
  console.log('Taking full page screenshot...');
  await page.screenshot({
    path: 'mobile-screenshot-full-page.png',
    fullPage: true
  });
  
  console.log('Screenshots saved successfully!');
  console.log('- mobile-screenshot-1-initial.png');
  console.log('- mobile-screenshot-2-scroll1.png');
  console.log('- mobile-screenshot-3-scroll2.png');
  console.log('- mobile-screenshot-4-scroll3.png');
  console.log('- mobile-screenshot-full-page.png');
  
  await browser.close();
})();
