import Jimp from "jimp";
import path from "path";

interface Label {
    sender: string;
    recipient: string;
    carrier: string;  
    address: string; 
    notes?: string; 
};

type Position = {
    id: string;
    x: number;
    y: number;
};

let positions: Position[] = [
    {id: "sender", x: 88, y: 100},
    {id: "recipent", x: 88, y: 250},
    {id: "carrier", x: 792, y: 250},
    {id: "address", x: 88, y: 400},
    {id: "notes", x: 88, y: 700}
];

function createID(): string {
    return "" + Math.random().toString(36).substr(2, 9);
};

async function createLabel(info: Label): Promise<string> {
    let image = await Jimp.read(__dirname + "/label.jpg");
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    let id = await createID();

    await image 
        .print(font, positions[0].x, positions[0].y, info.sender)
        .print(font, positions[1].x, positions[1].y, info.recipient)
        .print(font, positions[2].x, positions[2].y, info.carrier)
        .print(font, positions[3].x, positions[3].y, info.address)
        .print(font, positions[4].x, positions[4].y, info.notes || "")
        .writeAsync(path.join(__dirname, "..", "assets", id + ".jpg"))
        .catch(err => {
            return "error"
        })

    return id
};

export {createLabel}
