export interface IEditRoomUseCase {
    editRoom: () => Promise<void>;
}

export class EditRoomUseCase implements IEditRoomUseCase {
    constructor(

    ) { }

    editRoom = async () => {
        try {

        } catch (error) {
            console.warn('EditRoomUseCase -> editRoom: ', error);
        }
    }

}
