/*
 * MIT License
 *
 * Copyright (c) 2025 FIDIL
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { LinkStore, GeneratedLink } from '../models/Link';
import { MemeStore } from '../models/Meme';

const router = express.Router();

// Helper function to generate random alphanumeric string
const generateRandomId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Helper function to read HTML files
const readHTMLFile = (filename: string): string => {
  const filePath = path.join(__dirname, '../views', filename);
  return fs.readFileSync(filePath, 'utf8');
};

// Home page
router.get('/', (req, res) => {
  const html = readHTMLFile('index.html');
  res.send(html);
});

// Generate new meme link
router.post('/generate', (req, res) => {
  try {
    const linkId = generateRandomId(10);
    const randomMeme = MemeStore.getRandomMeme();
    
    const newLink: GeneratedLink = {
      id: linkId,
      memeUrl: randomMeme.url,
      createdAt: new Date(),
      viewCount: 0
    };

    LinkStore.addLink(newLink);

    const shareUrl = `${req.protocol}://${req.get('host')}/${linkId}`;
    
    res.json({
      success: true,
      linkId,
      shareUrl,
      meme: randomMeme
    });
  } catch (error) {
    console.error('Error generating link:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate link'
    });
  }
});

// Get link stats (optional API endpoint)
router.get('/stats/:id', (req: any, res: any) => {
  const linkId = req.params.id;
  const link = LinkStore.getLink(linkId);

  if (!link) {
    return res.status(404).json({ error: 'Link not found' });
  }

  res.json({
    id: link.id,
    createdAt: link.createdAt,
    viewCount: link.viewCount,
    expiresAt: link.expiresAt
  });
});

// View meme by link ID (catch-all route - must be last)
router.get('/:id', (req: any, res: any) => {
  const linkId = req.params.id;
  console.log(`🔍 Viewing link: ${linkId}`);
  const link = LinkStore.getLink(linkId);
  console.log(`📊 Link found:`, link ? 'YES' : 'NO');

  if (!link) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Link Not Found</title>
        <link href="/css/styles.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="card text-center">
          <h1 class="text-2xl font-bold text-red-600 mb-4">Link Not Found</h1>
          <p class="text-gray-700 mb-4">This meme link doesn't exist or has expired.</p>
          <a href="/" class="btn-primary">Generate New Link</a>
        </div>
      </body>
      </html>
    `);
  }

  const html = readHTMLFile('meme.html')
    .replace(/{{MEME_URL}}/g, link.memeUrl)
    .replace(/{{VIEW_COUNT}}/g, link.viewCount.toString());

  res.send(html);
});

export default router;
