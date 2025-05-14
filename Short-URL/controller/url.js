import express from 'express';
import { nanoid } from 'nanoid';
import Url from "../models/url.js";

// Create short URL
export async function handleGetUrl(req, res) {
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "Url Required" });

    const shortId = nanoid(8);
    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []  // This field name must match your schema
    });

    return res.json({ id: shortId });
}

// Get analytics for a short URL
export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    // ✅ You must await the result
    const result = await Url.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}
