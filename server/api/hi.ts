import { Context } from "elysia";


export const GET = (ctx: Context) => {
    console.log(ctx.query);
    return "Hello," + `${ctx.request.method}`;
}
export const POST = (ctx: Context) => {
    console.log(ctx.query);
    return "Hello," + `${ctx.request.method}`;
}

export function DELETE(ctx: Context){
    console.log(ctx.query);
    return "Hello," + `${ctx.request.method}`;
}
