import { RowDataPacket } from 'mysql2';

export interface Boxeador extends RowDataPacket {
    id: number;
    nombre: string;
    rating: number;
    activo: boolean;
}
