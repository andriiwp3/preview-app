import express, { Request, Response } from 'express';
import { validationResult, body } from 'express-validator';
import LinkPreview from '../models/linkPreview';
import ejs from 'ejs';
import path from 'path';

const router = express.Router();

const validateLinkPreview = [
    body('url').notEmpty().withMessage('URL is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('title').notEmpty().withMessage('Title is required'),
    body('image').notEmpty().withMessage('Image is required'),
];

router.post('/create-link-preview', validateLinkPreview, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { url, description, title, image, redirectURL } = req.body;
        const encodedURL = encodeURIComponent(url);

        const linkPreview = await LinkPreview.create({ url: encodedURL, description, title, image, redirectURL });

        return res.json(linkPreview);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:linkURL', async (req: Request, res: Response) => {
    try {
        const linkURL = req.params.linkURL;
        const encodedURL = encodeURIComponent(linkURL);

        const linkPreview = await LinkPreview.findOne({
            where: { url: encodedURL }
        });

        if (!linkPreview) {
            return res.status(404).json({ error: 'Link not found' });
        }

        const templatePath = path.join(__dirname, '../views/previewPage.ejs');

        const html = await ejs.renderFile(templatePath, {
            title: linkPreview.title,
            redirectURL: linkPreview.redirectURL,
            imageURL: linkPreview.image,
            description: linkPreview.description,
        });


        return res.send(html);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
