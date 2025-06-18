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
import { MemeStore } from '../models/Meme';

const router = express.Router();

// Get all memes
router.get('/', (req, res) => {
  try {
    const memes = MemeStore.getAllMemes();
    res.json({
      success: true,
      memes,
      count: memes.length
    });
  } catch (error) {
    console.error('Error fetching memes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch memes'
    });
  }
});

// Get random meme
router.get('/random', (req, res) => {
  try {
    const randomMeme = MemeStore.getRandomMeme();
    res.json({
      success: true,
      meme: randomMeme
    });
  } catch (error) {
    console.error('Error fetching random meme:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch random meme'
    });
  }
});

// Get specific meme by ID
router.get('/:id', (req: any, res: any) => {
  try {
    const memeId = req.params.id;
    const meme = MemeStore.getMemeById(memeId);
    
    if (!meme) {
      return res.status(404).json({
        success: false,
        error: 'Meme not found'
      });
    }

    res.json({
      success: true,
      meme
    });
  } catch (error) {
    console.error('Error fetching meme:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch meme'
    });
  }
});

export default router;
