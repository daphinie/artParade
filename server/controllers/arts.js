import express from 'express';
import mongoose from 'mongoose';

import ArtContent from '../models/artContent.js';

const router = express.Router();

export const getArts = async (req, res) => {
    try {
        const artContent = await ArtContent.find();
        res.status(200).json(artContent);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const postArts = async (req, res) => {
    const { artist, caption, tags, artFile } = req.body;

    const newArt = new ArtContent({ artist, caption, tags, artFile });
    
    try {
        await newArt.save();

        res.status(201).json(newArt);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export default router;