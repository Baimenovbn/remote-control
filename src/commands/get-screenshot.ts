import robot, {Bitmap} from "robotjs";
import Jimp from 'jimp';

export const getScreenshot = async (command: string, _: string[]) => {
    const { x, y } = robot.getMousePos();

    const bitMap: Bitmap = robot.screen.capture(x - 100, y - 100, 200, 200);
    for(let i=0; i < bitMap.image.length; i++){
        if(i%4 == 0){
            [bitMap.image[i], bitMap.image[i+2]] = [bitMap.image[i+2], bitMap.image[i]];
        }
    }

    var jimg = new Jimp(bitMap.width, bitMap.height);
    jimg.bitmap.data = bitMap.image;
    const result = await jimg.getBufferAsync(Jimp.MIME_PNG);

    return `${command} ${result.toString('base64')}`;
}
