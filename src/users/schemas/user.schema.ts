import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: false })
    biography: string;
    @Prop({ required: false })
    primaryLocation: string;
    @Prop({ required: false })
    ridingLocation: string;
    @Prop({ required: false })
    isPublic: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);