export interface ILeaveRoomUseCase {
    leaveRoom: () => Promise<void>;
}

export class LeaveRoomUseCase implements ILeaveRoomUseCase {
    constructor(

    ) { }

    leaveRoom = async () => {
        try {

        } catch (error) {
            console.warn('LeaveRoomUseCase -> leaveRoom: ', error);
        }
    }

}
