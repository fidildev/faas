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
