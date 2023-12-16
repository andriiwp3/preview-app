import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/db';

interface LinkPreviewAttributes {
    id?: number;
    url: string;
    redirectURL?: string;
    description: string;
    title: string;
    image: string;
}

class LinkPreview extends Model<LinkPreviewAttributes> implements LinkPreviewAttributes {
    public id!: number;
    public url!: string;
    public redirectURL?: string;
    public description!: string;
    public title!: string;
    public image!: string;
}

LinkPreview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        redirectURL: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'LinkPreview',
    }
);

export default LinkPreview;
