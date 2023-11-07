import {promises as fs} from 'fs';
import { request } from 'http';
import { NextResponse } from 'next/server';

export async function POST(resquest, response){

    //  Recebendo o arquivo json
    const file = fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8")

    const dados = await JSON.parse(file)

    const dadosDoRequest = await request.json();

    return NextResponse.json({"status":True})
}